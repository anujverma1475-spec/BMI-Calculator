import React from 'react'
import {Activity} from 'lucide-react'
function Header() {
  return (
    <header className="app-header">
        <div className="header-title-container">
            <Activity className="header-icon" size={22} />
            <h1>BMI Calculator</h1>
        </div>
        <p className="header-subtitle">Understand your body mass index</p>
    </header>

  )
}

export default Header
