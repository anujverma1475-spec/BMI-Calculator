/**
 * Converts user weight input to Kilograms (kg) with validation
 */
export const convertWeightToKg = (weight, unit) => {
  const numWeight = parseFloat(weight);
  if (isNaN(numWeight) || numWeight <= 0 || numWeight > 500) return null;

  if (unit === 'lb') {
    return numWeight * 0.45359237;
  }
  return numWeight;
};

/**
 * Converts user height input to Meters (m) with validation
 */
export const convertHeightToMeters = (unit, cm, m, ft, inch) => {
  if (unit === 'cm') {
    const numCm = parseFloat(cm);
    if (isNaN(numCm) || numCm < 50 || numCm > 250) return null;
    return numCm / 100;
  }

  if (unit === 'm') {
    const numM = parseFloat(m);
    if (isNaN(numM) || numM < 0.5 || numM > 2.5) return null;
    return numM;
  }

  if (unit === 'ft') {
    const numFt = parseFloat(ft) || 0;
    const numIn = parseFloat(inch) || 0;
    if (numFt <= 0 && numIn <= 0) return null;
    if (numFt < 1 || numFt > 8 || numIn < 0 || numIn > 11) return null;
    
    return numFt * 0.3048 + numIn * 0.0254;
  }

  return null;
};

/**
 * Calculates BMI value, category, and weight adjustment target
 */
export const calculateBMI = ({ weight, weightUnit, heightUnit, heightCm, heightM, heightFt, heightIn }) => {
  const weightKg = convertWeightToKg(weight, weightUnit);
  const heightMeters = convertHeightToMeters(heightUnit, heightCm, heightM, heightFt, heightIn);

  if (weightKg === null || heightMeters === null || heightMeters <= 0) {
    return { error: 'Please enter realistic, valid numbers for your height and weight.' };
  }

  const rawBmi = weightKg / (heightMeters * heightMeters);
  const bmiValue = parseFloat(rawBmi.toFixed(1));

  if (bmiValue < 5 || bmiValue > 100) {
    return { error: 'Calculated BMI is out of normal human bounds. Please check your inputs.' };
  }

  const minHealthyKg = 18.5 * (heightMeters * heightMeters);
  const maxHealthyKg = 24.9 * (heightMeters * heightMeters);

  let category = '';
  let color = '';
  let weightDifference = null;

  if (bmiValue < 18.5) {
    category = 'Underweight';
    color = 'var(--category-underweight)';
    const diff = minHealthyKg - weightKg;
    weightDifference = {
      type: 'underweight',
      kg: parseFloat(diff.toFixed(1)),
      lbs: parseFloat((diff * 2.20462).toFixed(1))
    };
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    category = 'Healthy weight';
    color = 'var(--category-healthy)';
    weightDifference = {
      type: 'healthy',
      kg: 0,
      lbs: 0
    };
  } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
    category = 'Overweight';
    color = 'var(--category-overweight)';
    const diff = weightKg - maxHealthyKg;
    weightDifference = {
      type: 'overweight',
      kg: parseFloat(diff.toFixed(1)),
      lbs: parseFloat((diff * 2.20462).toFixed(1))
    };
  } else {
    category = 'Obesity';
    color = 'var(--category-obese)';
    const diff = weightKg - maxHealthyKg;
    weightDifference = {
      type: 'obese',
      kg: parseFloat(diff.toFixed(1)),
      lbs: parseFloat((diff * 2.20462).toFixed(1))
    };
  }

  return {
    bmi: bmiValue,
    category,
    color,
    weightKg: parseFloat(weightKg.toFixed(1)),
    heightMeters: parseFloat(heightMeters.toFixed(2)),
    minHealthyKg: parseFloat(minHealthyKg.toFixed(1)),
    maxHealthyKg: parseFloat(maxHealthyKg.toFixed(1)),
    weightDifference
  };
};