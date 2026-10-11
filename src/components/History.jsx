import React from 'react';
import { History as HistoryIcon, Trash2 } from 'lucide-react';

function History({ historyList, onClearHistory }) {
  if (!historyList || historyList.length === 0) {
    return null; // Don't show if empty
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <div className="history-title-group">
          <HistoryIcon size={16} className="history-icon" />
          <h3>Calculation History</h3>
        </div>
        <button className="btn-clear-history" onClick={onClearHistory} title="Clear History">
          <Trash2 size={14} />
          <span>Clear</span>
        </button>
      </div>

      <div className="history-list">
        {historyList.map((item, index) => (
          <div key={index} className="history-item">
            <div className="history-item-left">
              <span className="history-bmi" style={{ color: item.color }}>{item.bmi}</span>
              <div className="history-details">
                <span className="history-category">{item.category}</span>
                <span className="history-specs">{item.weightKg} kg • {item.heightMeters * 100} cm</span>
              </div>
            </div>
            <span className="history-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;