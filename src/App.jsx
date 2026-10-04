import React, { useState } from 'react';
import Header from './components/Header';
import CalculatorForm from './components/CalculatorForm';
import './App.css';

function App() {
  // State for user inputs
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('70');
  const [weightUnit, setWeightUnit] = useState('kg');
  
  const [heightUnit, setHeightUnit] = useState('cm');
  const [heightCm, setHeightCm] = useState('175');
  const [heightM, setHeightM] = useState('1.75');
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('9');
  
  const [age, setAge] = useState('25');

  // Reset Handler Function
  const handleReset = () => {
    setGender('male');
    setWeight('70');
    setWeightUnit('kg');
    setHeightUnit('cm');
    setHeightCm('175');
    setHeightM('1.75');
    setHeightFt('5');
    setHeightIn('9');
    setAge('25');
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header />

      {/* Main Responsive Layout */}
      <div className="main-content-grid">
        {/* Form Inputs Component */}
        <CalculatorForm
          gender={gender}
          setGender={setGender}
          weight={weight}
          setWeight={setWeight}
          weightUnit={weightUnit}
          setWeightUnit={setWeightUnit}
          heightUnit={heightUnit}
          setHeightUnit={setHeightUnit}
          heightCm={heightCm}
          setHeightCm={setHeightCm}
          heightM={heightM}
          setHeightM={setHeightM}
          heightFt={heightFt}
          setHeightFt={setHeightFt}
          heightIn={heightIn}
          setHeightIn={setHeightIn}
          age={age}
          setAge={setAge}
          onReset={handleReset}
        />

        {/* Right Column Action CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
          <div className="action-area" style={{ width: '100%' }}>
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