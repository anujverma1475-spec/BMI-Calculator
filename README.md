# 🏋️ Modern BMI Calculator & Health Dashboard

A sleek, responsive, and feature-rich Body Mass Index (BMI) calculator web application built with **React**, **Vite**, and **CSS Grid/Flexbox**. Designed as a portfolio project to demonstrate modern front-end engineering, clean state management, accessible UI design, and interactive data presentation.

![BMI Calculator Banner](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- 📏 **Multi-Unit Unit Conversion**: Seamlessly switch between Metric (`kg`, `cm`, `m`) and Imperial (`lb`, `ft/in`) measurement systems.
- 🎯 **Actionable Weight Adjustment Targets**: Dynamically calculates exact weight to gain or lose (in `kg` and `lbs`) to achieve a healthy WHO target BMI range (18.5 – 24.9).
- 📊 **Interactive Visual BMI Scale**: Real-time position marker pin on a color-coded World Health Organization (WHO) index scale.
- 💾 **Persistent Calculation History**: Automatically saves up to 10 recent calculation records to `localStorage` with clear and filter controls.
- 📱 **Responsive Desktop & Mobile Layout**: Mobile-first design that scales into a dual-column health dashboard on desktop viewports.
- ⚡ **Zero External Heavy UI Libraries**: Built using custom dark-theme CSS variables, smooth transitions, and GPU-accelerated micro-interactions.
- ♿ **Accessibility & Error Handling**: Real-time input validation, accessible focus states, and user error alerts.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React.js](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Styling:** Custom CSS Flexbox/Grid, CSS Variables (Variables & Animations)
- **State Management:** React `useState`, `useEffect` Hooks
- **Storage:** Web Storage API (`localStorage`)

---

## 📂 Project Structure

```text
bmi-calculator/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # App title & branding
│   │   ├── CalculatorForm.jsx   # Input fields & unit toggles
│   │   ├── ResultCard.jsx       # BMI result badge & weight adjustment advice
│   │   ├── BMIScale.jsx         # Visual marker scale component
│   │   ├── History.jsx          # Calculation history & empty state placeholder
│   │   └── Footer.jsx           # Developer credits & social links
│   ├── utils/
│   │   └── bmiCalculator.js     # Pure utility functions for unit conversion & math
│   ├── App.jsx                  # Main root state orchestration
│   ├── App.css                  # Core component styles & responsive breakpoints
│   ├── index.css                # Global font imports & color variables
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
└── README.md