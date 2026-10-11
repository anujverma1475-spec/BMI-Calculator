# 🏋️ Modern Health BMI Calculator

A responsive, modern health dashboard web application built with **React.js**, **JavaScript (ES6+)**, **Vite**, and **CSS3**. Built as a college placement portfolio project to demonstrate practical React fundamentals, state management, modular utility math logic, and browser `localStorage` persistence.

---

## ✨ Features

- **Dynamic Unit Conversions:** Switch seamlessly between Metric (`kg`, `cm`, `m`) and Imperial (`lb`, `ft/in`) units.
- **Interactive Height Controls:** Conditional rendering switches between single height inputs and dual Feet/Inches inputs dynamically[cite: 1].
- **Visual BMI Category Scale:** Features a horizontal range scale with a dynamic percentage marker pin mapped to WHO adult categories.
- **Data Persistence:** Automatically stores previous calculation logs in browser `localStorage`.
- **Validation & Safe Logic:** Defensive input bounds checking preventing invalid calculations (`NaN`/`Infinity`).
- **Responsive Dashboard UI:** Styled with a dark-themed fitness aesthetic optimized for Mobile, Tablet, and Desktop screens.

---

## 🛠️ Tech Stack

- **Frontend Library:** React.js (Functional Components, `useState`, `useEffect`)
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Styling:** CSS3 (CSS Grid, Flexbox, Custom Root Variables, Media Queries)
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

```text
bmi-calculator/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top application bar
│   │   ├── CalculatorForm.jsx  # Interactive inputs & unit switches
│   │   ├── ResultCard.jsx      # Dynamic result overlay display
│   │   ├── BMIScale.jsx        # Horizontal visual scale & marker pin
│   │   └── History.jsx         # Saved calculations list
│   ├── utils/
│   │   └── bmiCalculator.js    # Unit conversion & math formula functions
│   ├── App.jsx                 # Root container & state orchestration
│   ├── App.css                 # Responsive layout & theme styles
│   ├── index.css               # CSS reset & global root variables
│   └── main.jsx                # Application DOM entry point
├── public/
├── package.json
└── README.md