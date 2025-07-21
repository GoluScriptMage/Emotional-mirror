# 🚀 Calculator Hub - Complete Implementation Guide

## 📋 **Project Overview**
Building a 4-calculator personality app with React, Tailwind CSS, and Framer Motion
- **Timeline**: 3-4 weeks (can be adjusted based on your pace)
- **Tech Stack**: React 18+, Tailwind CSS, Framer Motion, React Router
- **Design**: Dark theme with calculator-specific colors
- **Calculator Types**: Love, Friendship, Career, and Personality calculators

---

## 🎯 **PHASE 1: PROJECT SETUP (Days 1-2)**

### Step 1.1: Initialize React Project

```bash
# Create new Vite React project
npm create vite@latest calculator-hub -- --template react
cd calculator-hub
npm install

# Install required dependencies
npm install react-router-dom framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 1.2: Configure Tailwind CSS

**File**: `tailwind.config.js`
**Reference**: Lines 61-120 in `COLOR_SYSTEM_GUIDE.md`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        // Calculator-specific colors (from COLOR_SYSTEM_GUIDE.md)
        love: {
          50: '#fdf2f8',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          900: '#831843'
        },
        friendship: {
          50: '#f0fdfa',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a'
        },
        career: {
          50: '#faf5ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          900: '#581c87'
        },
        personality: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          900: '#92400e'
        }
      },
      backgroundImage: {
        'love-gradient': 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
        'friendship-gradient': 'linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)',
        'career-gradient': 'linear-gradient(135deg, #9333ea 0%, #8b5cf6 100%)',
        'personality-gradient': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-love': 'pulseLove 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseLove: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(236, 72, 153, 0.7)' },
          '50%': { boxShadow: '0 0 0 20px rgba(236, 72, 153, 0)' },
        }
      }
    },
  },
  plugins: [],
}
```

### Step 1.3: Setup Base CSS
**File**: `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply dark; /* Enable dark mode by default */
  }
  
  body {
    @apply bg-gray-900 text-white font-sans;
  }
}

@layer components {
  .btn-primary {
    @apply px-6 py-3 rounded-lg font-medium transition-all duration-200 
           hover:scale-105 active:scale-95;
  }
  
  .btn-love {
    @apply btn-primary bg-love-gradient hover:shadow-lg hover:shadow-love-500/25;
  }
  
  .btn-friendship {
    @apply btn-primary bg-friendship-gradient hover:shadow-lg hover:shadow-friendship-500/25;
  }
  
  .btn-career {
    @apply btn-primary bg-career-gradient hover:shadow-lg hover:shadow-career-500/25;
  }
  
  .btn-personality {
    @apply btn-primary bg-personality-gradient hover:shadow-lg hover:shadow-personality-500/25;
  }
  
  .card {
    @apply bg-gray-800 border border-gray-700 rounded-xl p-6 
           shadow-lg hover:shadow-xl transition-shadow duration-300;
  }
  
  .calculator-card {
    @apply card hover:scale-105 transition-transform duration-300 
           cursor-pointer group;
  }
}
```

### Step 1.4: Create Project Structure
```bash
mkdir -p src/{components/{calculators,shared,ui,layout},data,hooks,utils}
```

This creates the following structure based on the actual project implementation:

```plaintext
src/
├── components/           # React components
│   ├── calculators/      # Calculator-specific components (LoveCalculator, EnhancedCalculator)
│   ├── layout/           # Layout components (Layout)
│   ├── shared/           # Shared components (ProgressBar, QuestionCard, ResultDisplay)
│   └── ui/               # Reusable UI components (Button, Card, Modal)
├── data/                 # Data files (questions.js, questions.json, questions_missing_flavors.json)
├── hooks/                # Custom React hooks (useLocalStorage)
├── utils/                # Utility functions (scoring)
├── App.jsx               # Main App component
└── index.jsx             # Entry point
```

Each calculator will be implemented as a separate component, and we'll leverage shared components to maintain a consistent user experience.
```

**Project Structure**:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Modal.jsx
│   ├── calculator/
│   │   ├── CalculatorCard.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── ProgressBar.jsx
│   │   └── ResultDisplay.jsx
│   └── audio/
│       └── AudioControls.jsx
├── pages/
│   ├── Home.jsx
│   ├── Calculator.jsx
│   └── Result.jsx
├── contexts/
│   ├── ThemeContext.jsx
│   └── AudioContext.jsx
├── hooks/
│   ├── useLocalStorage.js
│   └── useCalculator.js
├── data/
│   └── questions.js
└── utils/
    └── scoring.js
```

---

## 🎯 **PHASE 2: CORE COMPONENTS (Days 3-7)**

### Step 2.1: Reusable UI Components

Create reusable UI components that can be used across different calculator types. These components will provide a consistent look and feel while adapting to the specific calculator theme.

**File**: `src/components/ui/Button.jsx`

```jsx
import { motion } from 'framer-motion'

/**
 * Reusable Button component with calculator-specific themes
 * @param {string} variant - Button style variant
 * @param {string} size - Button size
 * @param {string} calculatorTheme - Calculator type for theming
 * @param {boolean} disabled - Whether button is disabled
 * @param {boolean} loading - Whether button is in loading state
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Button content
 * @param {function} onClick - Click handler
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  calculatorTheme = 'love',
  disabled = false,
  loading = false,
  className = '',
  children,
  onClick,
  ...props
}) => {
  // Base button classes
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900'

  // Size variants
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  // Theme-specific colors
  const themeClasses = {
    love: {
      primary: 'btn-love focus:ring-love-500',
      secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-love-500/30 hover:border-love-500/50',
      outline: 'border-2 border-love-500 text-love-400 hover:bg-love-500 hover:text-white'
    },
    friendship: {
      primary: 'btn-friendship focus:ring-friendship-500',
      secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-friendship-500/30 hover:border-friendship-500/50',
      outline: 'border-2 border-friendship-500 text-friendship-400 hover:bg-friendship-500 hover:text-white'
    },
    career: {
      primary: 'btn-career focus:ring-career-500',
      secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-career-500/30 hover:border-career-500/50',
      outline: 'border-2 border-career-500 text-career-400 hover:bg-career-500 hover:text-white'
    },
    personality: {
      primary: 'btn-personality focus:ring-personality-500',
      secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-personality-500/30 hover:border-personality-500/50',
      outline: 'border-2 border-personality-500 text-personality-400 hover:bg-personality-500 hover:text-white'
    }
  }

  // Additional variant classes
  const variantClasses = {
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  }

  // Get theme classes
  const currentThemeClasses = themeClasses[calculatorTheme] || themeClasses.love
  const variantClass = currentThemeClasses[variant] || variantClasses[variant] || currentThemeClasses.primary

  // Disabled and loading states
  const stateClasses = disabled || loading 
    ? 'opacity-50 cursor-not-allowed' 
    : 'hover:scale-105 active:scale-95'

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClass}
    ${stateClasses}
    ${className}
  `.trim()

  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : children}
    </motion.button>
  )
}

export default Button
```

**File**: `src/components/ui/Card.jsx`

```jsx
import { motion } from 'framer-motion'

/**
 * Reusable Card component with different styles and animations
 * @param {string} variant - Card style variant
 * @param {string} calculatorTheme - Calculator type for theming
 * @param {boolean} hover - Whether card has hover effects
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Card content
 */
const Card = ({
  variant = 'default',
  calculatorTheme = null,
  hover = false,
  className = '',
  children,
  onClick,
  ...props
}) => {
  // Base card classes
  const baseClasses = 'bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-all duration-300'

  // Variant classes
  const variantClasses = {
    default: 'p-6',
    compact: 'p-4',
    large: 'p-8',
    flat: 'p-6 shadow-none border-gray-600'
  }

  // Calculator theme borders
  const themeClasses = calculatorTheme ? {
    love: 'border-love-500/20 hover:border-love-500/40',
    friendship: 'border-friendship-500/20 hover:border-friendship-500/40',
    career: 'border-career-500/20 hover:border-career-500/40',
    personality: 'border-personality-500/20 hover:border-personality-500/40'
  }[calculatorTheme] : ''

  // Hover effects
  const hoverClasses = hover || onClick 
    ? 'hover:shadow-xl hover:scale-105 cursor-pointer' 
    : ''

  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${themeClasses}
    ${hoverClasses}
    ${className}
  `.trim()

  const CardWrapper = onClick ? motion.div : 'div'
  const motionProps = onClick ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick
  } : {}

  return (
    <CardWrapper
      className={cardClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </CardWrapper>
  )
}

export default Card
```

**File**: `src/components/ui/Modal.jsx`

```jsx
import { motion } from 'framer-motion'

/**
 * Reusable Modal component with Framer Motion animations
 * @param {boolean} isOpen - Whether modal is open
 * @param {function} onClose - Function to close modal
 * @param {ReactNode} children - Modal content
 * @param {string} size - Modal size ('sm', 'md', 'lg', 'xl')
 * @param {boolean} closeOnBackdrop - Whether clicking backdrop closes modal
 * @param {boolean} showCloseButton - Whether to show X close button
 */
const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  size = 'md',
  closeOnBackdrop = true,
  showCloseButton = true,
  className = ''
}) => {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md', 
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl'
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <motion.div 
        className={`bg-gray-800 border border-gray-700 rounded-xl ${sizeClasses[size]} w-full ${className}`}
        variants={modalVariants}
        transition={{ type: 'spring', damping: 25, stiffness: 500 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          {showCloseButton && (
            <div className="flex justify-end">
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
```

### Step 2.2: Shared Components

Create shared components that will be used across different calculator types:

**File**: `src/components/shared/ProgressBar.jsx`

```jsx
import { motion } from 'framer-motion'

/**
 * Progress bar component for showing question progress
 * @param {number} current - Current question number
 * @param {number} total - Total number of questions
 * @param {string} calculatorType - Type of calculator ('love', 'friendship', etc.)
 */
const ProgressBar = ({ current, total, calculatorType = 'love' }) => {
  const percent = (current / total) * 100
  
  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
      <motion.div 
        className={`h-2.5 rounded-full bg-${calculatorType}-500`}
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

export default ProgressBar
```

**File**: `src/components/shared/QuestionCard.jsx`

```jsx
import React from 'react';
import { personalizeText } from '../../data/questions';
import ProgressBar from './ProgressBar';

/**
 * Card component for displaying calculator questions
 * @param {string} question - Question text
 * @param {Array} options - Answer options
 * @param {number|null} selectedAnswer - Index of selected answer
 * @param {Function} onAnswerSelect - Function to call when answer is selected
 * @param {number} questionNumber - Current question number
 * @param {number} totalQuestions - Total number of questions
 * @param {string} calculatorType - Type of calculator
 * @param {string} englishHint - English translation/hint for the question
 */
const QuestionCard = ({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
  calculatorType,
  englishHint,
}) => {
  return (
    <div className={`question-card bg-${calculatorType || 'primary'}-gradient`}>
      <div className="question-header">
        <span className="question-number">
          Question {questionNumber} of {totalQuestions}
        </span>
        <ProgressBar 
          current={questionNumber} 
          total={totalQuestions}
          calculatorType={calculatorType} 
        />
      </div>
      
      <h2 className="question-text">{question}</h2>
      
      {englishHint && (
        <p className="english-hint">{englishHint}</p>
      )}
      
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
```

**File**: `src/components/shared/ResultDisplay.jsx`

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

/**
 * Component for displaying calculator results
 * @param {number} score - Compatibility/result score (0-100)
 * @param {string} message - Result message
 * @param {string} calculatorType - Type of calculator
 * @param {Function} onRestartClick - Function to restart the calculator
 * @param {Function} onShareClick - Function to share the result
 */
const ResultDisplay = ({ 
  score, 
  message, 
  calculatorType = 'love',
  onRestartClick,
  onShareClick 
}) => {
  // Different score display based on calculator type
  const renderScoreDisplay = () => {
    switch (calculatorType) {
      case 'love':
        return (
          <motion.div 
            className="love-score-heart"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            <span>{score}%</span>
          </motion.div>
        );
      case 'friendship':
        return (
          <motion.div 
            className="friendship-score-circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            <span>{score}%</span>
          </motion.div>
        );
      // Other calculator types...
      default:
        return (
          <motion.div 
            className="default-score"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <span>{score}%</span>
          </motion.div>
        );
    }
  };

  return (
    <div className={`result-container ${calculatorType}-theme`}>
      {renderScoreDisplay()}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="result-title"
      >
        Your Result
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="result-message"
      >
        {message}
      </motion.p>
      
      <div className="result-actions">
        <Button 
          onClick={onRestartClick}
          calculatorTheme={calculatorType}
          variant="secondary"
        >
          Try Again
        </Button>
        
        <Button 
          onClick={onShareClick}
          calculatorTheme={calculatorType}
        >
          Share Result
        </Button>
      </div>
    </div>
  );
};

export default ResultDisplay;
```
```

---

## 🎯 **PHASE 3: UI COMPONENTS (Days 8-14)**

### Step 3.1: Layout Components
**File**: `src/components/layout/Header.jsx`
**Reference**: Lines 49-74 in `COPILOT_STYLING_PROMPTS.md`

```jsx
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import { SunIcon, MoonIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const { isDark, setIsDark } = useTheme()

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🧮</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Calculator Hub
            </h1>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-400" />
              )}
            </motion.button>

            {/* Audio Toggle */}
            <motion.button
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SpeakerWaveIcon className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
```

### Step 3.2: Calculator Card Component
**File**: `src/components/calculator/CalculatorCard.jsx`
**Reference**: Lines 75-102 in `COPILOT_STYLING_PROMPTS.md`

```jsx
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const CalculatorCard = ({ calculator, index }) => {
  const navigate = useNavigate()

  const handleStartTest = () => {
    navigate(`/calculator/${calculator.id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 20px 40px ${calculator.shadowColor}`,
      }}
      className="calculator-card group"
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${calculator.gradient} opacity-10 rounded-xl`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="text-4xl mb-4 group-hover:animate-bounce">
          {calculator.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-white">
          {calculator.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
          {calculator.description}
        </p>
        
        {/* Start Button */}
        <motion.button
          onClick={handleStartTest}
          className={`w-full ${calculator.buttonClass} text-white font-medium`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Test
        </motion.button>
      </div>
    </motion.div>
  )
}

export default CalculatorCard
```

### Step 3.3: Question Card Component
**File**: `src/components/calculator/QuestionCard.jsx`
**Reference**: Lines 134-167 in `COPILOT_STYLING_PROMPTS.md`

```jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const QuestionCard = ({ question, onAnswer, userName, calculatorTheme }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    // Add slight delay for animation
    setTimeout(() => {
      onAnswer(option)
      setSelectedOption(null)
    }, 300)
  }

  // Replace {name} placeholder in question
  const questionText = question.question.replace('{name}', userName || 'friend')

  return (
    <motion.div
      key={question.id}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="card max-w-2xl mx-auto"
    >
      {/* Question */}
      <div className="mb-8">
        <motion.h2 
          className="text-2xl font-bold mb-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {questionText}
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {question.englishHint}
        </motion.p>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={option.id}
            onClick={() => handleOptionSelect(option)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02, x: 10 }}
            whileTap={{ scale: 0.98 }}
            className={`
              w-full p-4 text-left rounded-lg border transition-all duration-200
              ${selectedOption?.id === option.id
                ? `bg-${calculatorTheme}-600 border-${calculatorTheme}-500 text-white`
                : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
              }
            `}
          >
            <span className="font-medium">{option.id.toUpperCase()})</span>
            <span className="ml-2">{option.text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default QuestionCard
```

### Step 3.4: Progress Bar Component
**File**: `src/components/calculator/ProgressBar.jsx`
**Reference**: Lines 168-189 in `COPILOT_STYLING_PROMPTS.md`

```jsx
import { motion } from 'framer-motion'

const ProgressBar = ({ progress, currentQuestion, totalQuestions, calculatorTheme }) => {
  const progressColors = {
    love: 'bg-love-gradient',
    friendship: 'bg-friendship-gradient',
    career: 'bg-career-gradient',
    personality: 'bg-personality-gradient'
  }

  return (
    <div className="mb-8">
      {/* Progress Info */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <motion.span 
          className="text-sm font-medium text-white"
          key={progress}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${progressColors[calculatorTheme]}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
```

---

## 🎯 **PHASE 4: PAGES & ROUTING (Days 15-18)**

### Step 4.1: App.jsx Setup
**File**: `src/App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Result from './pages/Result'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator/:type" element={<Calculator />} />
            <Route path="/result/:type" element={<Result />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
```

### Step 4.2: Home Page
**File**: `src/pages/Home.jsx`
**Reference**: Lines 10-48 in `VISUAL_DESIGN_GUIDE.md`

```jsx
import { motion } from 'framer-motion'
import CalculatorCard from '../components/calculator/CalculatorCard'

const calculators = [
  {
    id: 'love',
    name: 'Love Calculator',
    icon: '💕',
    description: 'Find your compatibility and discover your relationship style',
    gradient: 'bg-love-gradient',
    buttonClass: 'btn-love',
    shadowColor: 'rgba(236, 72, 153, 0.3)'
  },
  {
    id: 'friendship',
    name: 'Friendship Calculator', 
    icon: '👫',
    description: 'Test your friendship level and see how good a friend you are',
    gradient: 'bg-friendship-gradient',
    buttonClass: 'btn-friendship',
    shadowColor: 'rgba(20, 184, 166, 0.3)'
  },
  {
    id: 'career',
    name: 'Career Calculator',
    icon: '💼', 
    description: 'Discover your work personality and career strengths',
    gradient: 'bg-career-gradient',
    buttonClass: 'btn-career',
    shadowColor: 'rgba(168, 85, 247, 0.3)'
  },
  {
    id: 'personality',
    name: 'Personality Calculator',
    icon: '🧠',
    description: 'Uncover your true self and personality traits',
    gradient: 'bg-personality-gradient', 
    buttonClass: 'btn-personality',
    shadowColor: 'rgba(245, 158, 11, 0.3)'
  }
]

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Calculator Hub
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Discover Your Personality
          </p>
        </motion.div>

        {/* Welcome Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-300 mb-2">
            Hey! Ready to dive into some fun personality tests?
          </p>
          <p className="text-gray-400">
            Choose your adventure below 👇
          </p>
        </motion.div>

        {/* Calculator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calculator, index) => (
            <CalculatorCard 
              key={calculator.id}
              calculator={calculator}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
```

### Step 4.3: Calculator Page
**File**: `src/pages/Calculator.jsx`
**Reference**: Lines 83-129 in `VISUAL_DESIGN_GUIDE.md`

```jsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCalculator } from '../hooks/useCalculator'
import { useTheme } from '../contexts/ThemeContext'
import QuestionCard from '../components/calculator/QuestionCard'
import ProgressBar from '../components/calculator/ProgressBar'
import Modal from '../components/ui/Modal'

const Calculator = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const { getThemeClasses } = useTheme()
  const [showNameModal, setShowNameModal] = useState(true)
  const [tempUserName, setTempUserName] = useState('')

  const {
    currentQuestion,
    currentQuestionIndex,
    userName,
    setUserName,
    progress,
    isCompleted,
    score,
    answerQuestion,
    goToPreviousQuestion,
    totalQuestions
  } = useCalculator(type)

  const theme = getThemeClasses(type)

  // Handle name submission
  const handleNameSubmit = () => {
    if (tempUserName.trim()) {
      setUserName(tempUserName.trim())
      setShowNameModal(false)
    }
  }

  // Redirect to result when completed
  useEffect(() => {
    if (isCompleted) {
      navigate(`/result/${type}`, { 
        state: { score, userName, calculatorType: type }
      })
    }
  }, [isCompleted, navigate, type, score, userName])

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  return (
    <div className={`min-h-screen ${theme.background} py-8`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </button>
          
          <h1 className={`text-xl font-bold capitalize ${theme.text}`}>
            {type} Calculator
          </h1>
          
          <div className="text-sm text-gray-400">
            {currentQuestionIndex + 1}/{totalQuestions}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <ProgressBar 
          progress={progress}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          calculatorTheme={type}
        />

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          onAnswer={answerQuestion}
          userName={userName}
          calculatorTheme={type}
        />

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between mt-8"
        >
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="btn-primary bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="text-sm text-gray-400">
            Swipe or click to continue
          </div>
        </motion.div>
      </div>

      {/* Name Collection Modal */}
      <Modal isOpen={showNameModal} onClose={() => {}}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">What's your name?</h2>
          <p className="text-gray-400 mb-6">
            We'll personalize the questions for you!
          </p>
          <input
            type="text"
            value={tempUserName}
            onChange={(e) => setTempUserName(e.target.value)}
            placeholder="Enter your name..."
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4 focus:border-blue-500 focus:outline-none"
            onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
          />
          <button
            onClick={handleNameSubmit}
            disabled={!tempUserName.trim()}
            className={`w-full ${theme.button} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            Start Test
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Calculator
```

---

## 🎯 **PHASE 5: FINAL TOUCHES (Days 19-21)**

### Step 5.1: Result Page
**File**: `src/pages/Result.jsx`
**Reference**: Lines 131-148 in `VISUAL_DESIGN_GUIDE.md`

### Step 5.2: Scoring Logic
**File**: `src/utils/scoring.js`
**Reference**: Lines 100-150 in `CALCULATOR_PROJECTS_DETAILED.md`

### Step 5.3: Audio Integration
**File**: `src/contexts/AudioContext.jsx`

### Step 5.4: Mobile Optimizations
- Touch gestures for question navigation
- Improved mobile animations
- Better mobile modal handling

---

## 🚀 **DAILY IMPLEMENTATION SCHEDULE**

### **Week 1: Foundation**
- **Day 1**: Project setup + Tailwind config
- **Day 2**: Folder structure + base components
- **Day 3**: Theme context + basic styling
- **Day 4**: Questions data structure
- **Day 5**: Calculator hook logic
- **Day 6**: Home page layout
- **Day 7**: Testing & debugging foundation

### **Week 2: Core Features**
- **Day 8**: Header + navigation
- **Day 9**: Calculator cards with animations
- **Day 10**: Question card component
- **Day 11**: Progress bar + transitions
- **Day 12**: Calculator page logic
- **Day 13**: Name modal + user flow
- **Day 14**: Testing & refinements

### **Week 3: Polish & Deploy**
- **Day 15**: Result page + scoring
- **Day 16**: Audio integration
- **Day 17**: Mobile optimizations
- **Day 18**: Animations polish
- **Day 19**: Testing & bug fixes
- **Day 20**: Performance optimization
- **Day 21**: Deployment

---

## 🎯 **Key Learning Focus Areas**

### **React Concepts to Master:**
1. **useState & useEffect**: Question flow, progress tracking
2. **useContext**: Theme switching, global state
3. **Custom Hooks**: Calculator logic, localStorage
4. **React Router**: Navigation between calculators
5. **Conditional Rendering**: Modals, different calculator themes

### **Tailwind CSS Skills:**
1. **Responsive Design**: `sm:`, `md:`, `lg:` breakpoints
2. **Dark Mode**: `dark:` variants
3. **Custom Colors**: Calculator-specific color schemes
4. **Animations**: Custom keyframes, transition classes
5. **Component Classes**: Reusable button and card styles

### **Framer Motion Features:**
1. **Basic Animations**: `initial`, `animate`, `exit`
2. **Page Transitions**: Router-based animations
3. **Gesture Handling**: Hover, tap, drag animations
4. **Stagger Effects**: Sequential card animations
5. **Layout Animations**: Smooth layout changes

This guide will take you from zero to a fully functional, beautiful calculator app! Each step builds on the previous one, ensuring you understand the logic behind every feature. 🚀✨
