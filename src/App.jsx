import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CalculatorForm from './components/CalculatorForm';
import ResultCard from './components/ResultCard';
import History from './components/History';
import { calculateBMI } from './utils/bmiCalculator';
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

  // State for calculation result and history list
  const [bmiResult, setBmiResult] = useState(null);
  const [historyList, setHistoryList] = useState([]);

  // Load history from localStorage on initial app load
  useEffect(() => {
    const savedHistory = localStorage.getItem('bmi_history');
    if (savedHistory) {
      try {
        setHistoryList(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse history from localStorage', error);
      }
    }
  }, []);

  // Calculation Trigger Handler
  const handleCalculate = () => {
    const result = calculateBMI({
      weight,
      weightUnit,
      heightUnit,
      heightCm,
      heightM,
      heightFt,
      heightIn
    });

    if (result) {
      // Add timestamp to result record
      const newRecord = {
        ...result,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      };

      setBmiResult(result);

      // Prepend new record to history list (latest first)
      const updatedHistory = [newRecord, ...historyList].slice(0, 10); // Keep max 10 entries
      setHistoryList(updatedHistory);

      // Save to localStorage
      localStorage.setItem('bmi_history', JSON.stringify(updatedHistory));
    } else {
      alert('Please enter valid numeric values for height and weight.');
    }
  };

  // Clear History Handler
  const handleClearHistory = () => {
    setHistoryList([]);
    localStorage.removeItem('bmi_history');
  };

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
    setBmiResult(null);
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header />

      {/* Main Responsive Layout */}
      <div className="main-content-grid">
        {!bmiResult ? (
          <>
            {/* Left Column: Form Inputs Component */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
              
              {/* History shown below inputs when idle */}
              <History historyList={historyList} onClearHistory={handleClearHistory} />
            </div>

            {/* Right Column Action CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
              <div className="action-area" style={{ width: '100%' }}>
                <button className="btn-primary-calculate" onClick={handleCalculate}>
                  Calculate BMI
                </button>
              </div>
            </div>
          </>
        ) : (
          /* When calculation is complete, show result card and history below */
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ResultCard result={bmiResult} onRecalculate={() => setBmiResult(null)} />
            <History historyList={historyList} onClearHistory={handleClearHistory} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;