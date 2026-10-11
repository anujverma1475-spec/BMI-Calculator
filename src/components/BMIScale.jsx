import React from 'react';

function BMIScale({ bmi }) {
  // Map BMI value (15 to 35) to a percentage (0% to 100%)
  const calculatePosition = (val) => {
    const minBmi = 15;
    const maxBmi = 35;
    
    if (!val || val < minBmi) return 0;
    if (val > maxBmi) return 100;
    
    return ((val - minBmi) / (maxBmi - minBmi)) * 100;
  };

  const markerPosition = calculatePosition(bmi);

  return (
    <div className="bmi-scale-wrapper">
      <div className="scale-header">
        <span className="scale-title">BMI Scale</span>
        <span className="scale-range-info">Healthy Range: <strong>18.5 – 24.9</strong></span>
      </div>

      {/* Multi-segmented scale track */}
      <div className="scale-track">
        {/* Category segments */}
        <div className="scale-segment underweight" title="Underweight (< 18.5)"></div>
        <div className="scale-segment healthy" title="Healthy (18.5 - 24.9)"></div>
        <div className="scale-segment overweight" title="Overweight (25.0 - 29.9)"></div>
        <div className="scale-segment obese" title="Obese (≥ 30.0)"></div>

        {/* Moving marker pin */}
        <div
          className="scale-marker-pin"
          style={{ left: `${markerPosition}%` }}
        >
          <div className="marker-dot"></div>
        </div>
      </div>

      {/* Range Labels */}
      <div className="scale-labels">
        <span>Underweight</span>
        <span>Healthy</span>
        <span>Overweight</span>
        <span>Obesity</span>
      </div>
    </div>
  );
}

export default BMIScale;