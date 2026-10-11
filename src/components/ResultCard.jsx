import React from 'react';
import { RotateCcw, Info } from 'lucide-react';
import BMIScale from './BMIScale';

function ResultCard({ result, onRecalculate }) {
  if (!result) return null;

  return (
    <div className="result-overlay-card">
      <div className="result-top-action">
        <button className="btn-recalculate" onClick={onRecalculate} title="Recalculate">
          <RotateCcw size={16} />
          <span>Recalculate</span>
        </button>
      </div>

      <div className="result-content">
        <span className="result-header-label">Your BMI is</span>
        
        <div className="bmi-big-number" style={{ color: result.color }}>
          {result.bmi}
        </div>
        
        <span className="bmi-unit-label">Kg/m²</span>

        <div className="bmi-category-badge" style={{ backgroundColor: `${result.color}20`, color: result.color, border: `1px solid ${result.color}40` }}>
          {result.category}
        </div>

        {/* Interactive BMI Scale Component */}
        <BMIScale bmi={result.bmi} />

        <div className="result-summary-pills">
          <span>Height: {result.heightMeters * 100} cm</span>
          <span>•</span>
          <span>Weight: {result.weightKg} kg</span>
        </div>

        <div className="bmi-disclaimer-box">
          <Info size={16} className="disclaimer-icon" />
          <p>
            A BMI of {result.bmi} is in the <strong>{result.category}</strong> category for adults of your height. 
            BMI is a screening measure and has limitations. It is not a medical diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;