/**
 * Converts user weight input to Kilograms (kg) with validation
 */
export const convertWeightToKg = (weight, unit) => {
  const numWeight = parseFloat(weight);
  if (isNaN(numWeight) || numWeight <= 0 || numWeight > 500) return null; // Realistic max weight 500kg

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
    if (isNaN(numCm) || numCm < 50 || numCm > 250) return null; // Realistic human height range 50cm - 250cm
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
 * Calculates BMI value and identifies category with error feedback
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

  let category = '';
  let color = '';

  if (bmiValue < 18.5) {
    category = 'Underweight';
    color = 'var(--category-underweight)';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    category = 'Healthy weight';
    color = 'var(--category-healthy)';
  } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
    category = 'Overweight';
    color = 'var(--category-overweight)';
  } else {
    category = 'Obesity';
    color = 'var(--category-obese)';
  }

  return {
    bmi: bmiValue,
    category,
    color,
    weightKg: parseFloat(weightKg.toFixed(1)),
    heightMeters: parseFloat(heightMeters.toFixed(2))
  };
};