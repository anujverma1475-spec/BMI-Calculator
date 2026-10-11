import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CalculatorForm from './components/CalculatorForm';
import ResultCard from './components/ResultCard';
import History from './components/History';
import { calculateBMI } from './utils/bmiCalculator';
import { AlertCircle } from 'lucide-react';
import './App.css';

function App() {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('70');
  const [weightUnit, setWeightUnit] = useState('kg');
  
  const [heightUnit, setHeightUnit] = useState('cm');
  const [heightCm, setHeightCm] = useState('175');
  const [heightM, setHeightM] = useState('1.75');
  const [heightFt, setHeightFt] = useState('5');
  const [heightIn, setHeightIn] = useState('9');
  
  const [age, setAge] = useState('25');

  const [bmiResult, setBmiResult] = useState(null);
  const [historyList, setHistoryList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleCalculate = () => {
    setErrorMessage(''); // Clear previous error

    const result = calculateBMI({
      weight,
      weightUnit,
      heightUnit,
      heightCm,
      heightM,
      heightFt,
      heightIn
    });

    if (result.error) {
      setErrorMessage(result.error);
      return;
    }

    const newRecord = {
      ...result,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };

    setBmiResult(result);

    const updatedHistory = [newRecord, ...historyList].slice(0, 10);
    setHistoryList(updatedHistory);
    localStorage.setItem('bmi_history', JSON.stringify(updatedHistory));
  };

  const handleClearHistory = () => {
    setHistoryList([]);
    localStorage.removeItem('bmi_history');
  };

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
    setErrorMessage('');
  };

  return (
    <div className="app-container">
      <Header />

      {/* Error Notification Banner */}
      {errorMessage && (
        <div className="error-banner">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="main-content-grid">
        {!bmiResult ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}>
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
              <History historyList={historyList} onClearHistory={handleClearHistory} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
              <div className="action-area" style={{ width: '100%' }}>
                <button className="btn-primary-calculate" onClick={handleCalculate}>
                  Calculate BMI
                </button>
              </div>
            </div>
          </>
        ) : (
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