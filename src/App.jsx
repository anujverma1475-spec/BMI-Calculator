import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Top Header */}
      <Header />

      {/* Main Grid Wrapper for Responsive Layout */}
      <div className="main-content-grid">
        
        {/* Left Column (Inputs) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Gender Selection Section */}
          <div className="gender-grid">
            <div className="ui-card gender-card active">
              <span className="gender-label">Male</span>
            </div>
            <div className="ui-card gender-card">
              <span className="gender-label">Female</span>
            </div>
          </div>

          {/* Height Section */}
          <div className="ui-card height-card">
            <span className="card-label">Height</span>
            <div className="unit-selector">
              <button className="unit-btn active">cm</button>
              <button className="unit-btn">m</button>
              <button className="unit-btn">ft/in</button>
            </div>
            <div className="numeric-display">175</div>
            <span className="unit-subtext">centimeters</span>
          </div>
        </div>

        {/* Right Column (Weight, Age & Calculate CTA) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Dual Inputs: Weight & Age */}
          <div className="inputs-dual-grid">
            <div className="ui-card control-card">
              <span className="card-label">Weight</span>
              <div className="numeric-display">70</div>
              <span className="unit-subtext">kilograms</span>
            </div>
            <div className="ui-card control-card">
              <span className="card-label">Age</span>
              <div className="numeric-display">25</div>
              <span className="unit-subtext">years old</span>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="action-area" style={{ marginTop: 'auto' }}>
            <button className="btn-primary-calculate">
              Calculate BMI
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;