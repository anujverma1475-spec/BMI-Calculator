import React from "react";
import { RotateCcw } from "lucide-react";

function CalculatorForm({
  gender,
  setGender,
  weight,
  setWeight,
  weightUnit,
  setWeightUnit,
  heightUnit,
  setHeightUnit,
  heightCm,
  setHeightCm,
  heightM,
  setHeightM,
  heightFt,
  setHeightFt,
  heightIn,
  setHeightIn,
  age,
  setAge,
  onReset,
}) {
  return (
    <div className="calculator-form-container">
      {/* Top Header Controls / Reset */}
      <div className="form-top-bar">
        <span className="section-subtitle">Input Details</span>
        <button className="btn-reset" onClick={onReset} title="Reset Form">
          <RotateCcw size={14} />
          <span>Reset</span>
        </button>
      </div>

      {/* Gender Selection Cards */}
      <div className="gender-grid">
        <div
          className={`ui-card gender-card ${gender === "male" ? "active" : ""}`}
          onClick={() => setGender("male")}
        >
          <span className="gender-label">Male</span>
        </div>
        <div
          className={`ui-card gender-card ${gender === "female" ? "active" : ""}`}
          onClick={() => setGender("female")}
        >
          <span className="gender-label">Female</span>
        </div>
      </div>

      {/* Height Section */}
      <div className="ui-card height-card">
        <div className="card-top-row">
          <span className="card-label">Height</span>
          <div className="unit-selector">
            <button
              className={`unit-btn ${heightUnit === "cm" ? "active" : ""}`}
              onClick={() => setHeightUnit("cm")}
            >
              cm
            </button>
            <button
              className={`unit-btn ${heightUnit === "m" ? "active" : ""}`}
              onClick={() => setHeightUnit("m")}
            >
              m
            </button>
            <button
              className={`unit-btn ${heightUnit === "ft" ? "active" : ""}`}
              onClick={() => setHeightUnit("ft")}
            >
              ft/in
            </button>
          </div>
        </div>

        {/* Dynamic Input based on selected Height Unit */}
        {heightUnit === "cm" && (
          <div className="input-group">
            <input
              type="number"
              className="numeric-input"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              placeholder="175"
              min="1"
            />
            <span className="unit-subtext">centimeters</span>
          </div>
        )}

        {heightUnit === "m" && (
          <div className="input-group">
            <input
              type="number"
              step="0.01"
              className="numeric-input"
              value={heightM}
              onChange={(e) => setHeightM(e.target.value)}
              placeholder="1.75"
              min="0.1"
            />
            <span className="unit-subtext">meters</span>
          </div>
        )}

        {heightUnit === "ft" && (
          <div className="dual-input-row">
            <div className="input-group">
              <input
                type="number"
                className="numeric-input"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                placeholder="5"
                min="0"
              />
              <span className="unit-subtext">feet</span>
            </div>
            <div className="input-group">
              <input
                type="number"
                className="numeric-input"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                placeholder="9"
                min="0"
                max="11"
              />
              <span className="unit-subtext">inches</span>
            </div>
          </div>
        )}
      </div>

      {/* Dual Inputs: Weight & Age */}
      <div className="inputs-dual-grid">
        {/* Weight Control Card */}
        <div className="ui-card control-card">
          <div className="card-top-row">
            <span className="card-label">Weight</span>
            <div className="unit-selector">
              <button
                className={`unit-btn ${weightUnit === "kg" ? "active" : ""}`}
                onClick={() => setWeightUnit("kg")}
              >
                kg
              </button>
              <button
                className={`unit-btn ${weightUnit === "lb" ? "active" : ""}`}
                onClick={() => setWeightUnit("lb")}
              >
                lb
              </button>
            </div>
          </div>
          <div className="input-group">
            <input
              type="number"
              className="numeric-input"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={weightUnit === "kg" ? "70" : "154"}
              min="1"
            />
            <span className="unit-subtext">
              {weightUnit === "kg" ? "kilograms" : "pounds"}
            </span>
          </div>
        </div>

        {/* Age Control Card */}
        <div className="ui-card control-card">
          <span className="card-label">Age</span>
          <div className="input-group" style={{ marginTop: "18px" }}>
            <input
              type="number"
              className="numeric-input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="25"
              min="1"
              max="120"
            />
            <span className="unit-subtext">years old</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorForm;
