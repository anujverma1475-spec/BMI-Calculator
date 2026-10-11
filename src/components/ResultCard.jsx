import React from 'react';
import { RotateCcw, Info, TrendingDown, TrendingUp, CheckCircle } from 'lucide-react';
import BMIScale from './BMIScale';

function ResultCard({ result, onRecalculate }) {
  if (!result) return null;

  const { weightDifference } = result;

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

        {weightDifference && (
          <div className="weight-target-box">
            {weightDifference.type === 'underweight' && (
              <div className="target-pill gain">
                <TrendingUp size={18} className="target-icon" />
                <span>Gain <strong>{weightDifference.kg} kg ({weightDifference.lbs} lbs)</strong> to reach a healthy weight</span>
              </div>
            )}

            {(weightDifference.type === 'overweight' || weightDifference.type === 'obese') && (
              <div className="target-pill lose">
                <TrendingDown size={18} className="target-icon" />
                <span>Lose <strong>{weightDifference.kg} kg ({weightDifference.lbs} lbs)</strong> to reach a healthy weight</span>
              </div>
            )}

            {weightDifference.type === 'healthy' && (
              <div className="target-pill healthy">
                <CheckCircle size={18} className="target-icon" />
                <span>You are within the healthy weight range!</span>
              </div>
            )}
          </div>
        )}

        <BMIScale bmi={result.bmi} />

        <div className="result-summary-pills">
          <span>Height: {Math.round(result.heightMeters * 100)} cm</span>
          <span>•</span>
          <span>Weight: {result.weightKg} kg</span>
        </div>

        <div className="bmi-disclaimer-box">
          <Info size={16} className="disclaimer-icon" />
          <p>
            A healthy weight for your height is between <strong>{result.minHealthyKg} kg</strong> and <strong>{result.maxHealthyKg} kg</strong>. 
            BMI is a screening measure and not a medical diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;