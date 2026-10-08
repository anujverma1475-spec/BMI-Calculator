/**
 * Converts user weight input to Kilograms (kg)
 */
export const convertWeightToKg = (weight, unit) => {
  const numWeight = parseFloat(weight);
  if (isNaN(numWeight) || numWeight <= 0) return 0;

  if (unit === 'lb') {
    return numWeight * 0.45359237;
  }
  return numWeight; // Default is already 'kg'
};

/**
 * Converts user height input to Meters (m)
 */
export const convertHeightToMeters = (unit, cm, m, ft, inch) => {
  if (unit === 'cm') {
    const numCm = parseFloat(cm);
    if (isNaN(numCm) || numCm <= 0) return 0;
    return numCm / 100;
  }

  if (unit === 'm') {
    const numM = parseFloat(m);
    if (isNaN(numM) || numM <= 0) return 0;
    return numM;
  }

  if (unit === 'ft') {
    const numFt = parseFloat(ft) || 0;
    const numIn = parseFloat(inch) || 0;
    if (numFt <= 0 && numIn <= 0) return 0;
    
    // 1 ft = 0.3048 m, 1 inch = 0.0254 m
    return numFt * 0.3048 + numIn * 0.0254;
  }

  return 0;
};

/**
 * Calculates BMI value and identifies category
 */
export const calculateBMI = ({ weight, weightUnit, heightUnit, heightCm, heightM, heightFt, heightIn }) => {
  const weightKg = convertWeightToKg(weight, weightUnit);
  const heightMeters = convertHeightToMeters(heightUnit, heightCm, heightM, heightFt, heightIn);

  // Guard Clause: Prevent divide-by-zero or negative inputs
  if (weightKg <= 0 || heightMeters <= 0) {
    return null;
  }

  // Formula: BMI = kg / (m * m)
  const rawBmi = weightKg / (heightMeters * heightMeters);
  
  // Format to 1 decimal place (e.g. 21.4)
  const bmiValue = parseFloat(rawBmi.toFixed(1));

  // Determine Category
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