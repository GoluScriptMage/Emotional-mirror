# Calculator Hub - Actual Implementation Guide

## Project Structure

The current implementation of the Calculator Hub project has the following structure:

```
src/
├── components/           # React components
│   ├── calculators/      # Calculator-specific components
│   │   ├── EnhancedCalculator.jsx
│   │   └── LoveCalculator.jsx
│   ├── layout/           # Layout components
│   │   └── Layout.jsx
│   ├── shared/           # Shared components
│   │   ├── ProgressBar.jsx
│   │   ├── QuestionCard.jsx
│   │   └── ResultDisplay.jsx
│   └── ui/               # Reusable UI components
│       ├── Button.jsx
│       ├── Card.jsx
│       └── Modal.jsx
├── data/                 # Data files
│   ├── questions.js
│   ├── questions.json
│   └── questions_missing_flavors.json
├── hooks/                # Custom React hooks
│   └── useLocalStorage.js
└── utils/                # Utility functions
    └── scoring.js
```

## Component Implementation Details

### UI Components

#### Button Component (`src/components/ui/Button.jsx`)

The Button component is implemented with Framer Motion and supports different calculator themes:

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

  // Get theme classes
  const getButtonClasses = () => {
    const variant_classes = themeClasses[calculatorTheme]?.[variant] || 'bg-gray-600 hover:bg-gray-500 text-white'
    
    return `
      ${baseClasses}
      ${sizeClasses[size]}
      ${variant_classes}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `.trim()
  }

  return (
    <motion.button
      whileHover={!disabled && { scale: 1.02 }}
      whileTap={!disabled && { scale: 0.98 }}
      className={getButtonClasses()}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </motion.button>
  )
}

export default Button
```

#### Card Component (`src/components/ui/Card.jsx`)

The Card component provides a versatile container with different styles and animations:

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

  // Create motion card component
  const MotionCard = (
    <motion.div
      className={cardClasses}
      whileHover={hover || onClick ? { scale: 1.05 } : {}}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  )

  return MotionCard
}

export default Card
```

#### Modal Component (`src/components/ui/Modal.jsx`)

The Modal component is a reusable dialog with Framer Motion animations:

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

  const handleBackdropClick = (e) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  // Add escape key listener
  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className={`bg-gray-800 rounded-xl shadow-2xl border border-gray-700 w-full ${sizeClasses[size]} ${className}`}
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
```

### Shared Components

#### ProgressBar Component (`src/components/shared/ProgressBar.jsx`)

```jsx
import React from 'react';

/**
 * A progress bar component for tracking question progress
 * @param {Object} props - Component props
 * @param {number} props.current - Current question number
 * @param {number} props.total - Total number of questions
 * @param {string} [props.calculatorType] - Type of calculator (love, friendship, career, personality)
 */
const ProgressBar = ({ current, total, calculatorType = 'love' }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`h-full bg-${calculatorType}-500`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
```

#### QuestionCard Component (`src/components/shared/QuestionCard.jsx`)

```jsx
import React from 'react';
import { personalizeText } from '../../data/questions';
import ProgressBar from './ProgressBar';

/**
 * A reusable component for displaying calculator questions
 * @param {Object} props - Component props
 * @param {string} props.question - Question text
 * @param {Array} props.options - Answer options
 * @param {number|null} props.selectedAnswer - Index of selected answer
 * @param {Function} props.onAnswerSelect - Function to call when answer is selected
 * @param {number} props.questionNumber - Current question number
 * @param {number} props.totalQuestions - Total number of questions
 * @param {string} [props.calculatorType] - Type of calculator
 * @param {string} [props.englishHint] - English translation/hint for the question
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
        <ProgressBar current={questionNumber} total={totalQuestions} calculatorType={calculatorType} />
      </div>

      <h3 className="question-text">{question}</h3>
      {englishHint && <p className="english-hint">{englishHint}</p>}

      <div className="options-grid">
        {options.map((option, index) => (
          <button
            key={option.id || index}
            className={`option-button ${
              selectedAnswer === index ? "selected" : ""
            }`}
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

### Calculator Components

#### LoveCalculator Component (`src/components/calculators/LoveCalculator.jsx`)

```jsx
import React, { useState } from 'react';
import { getQuestions } from '../../data/questions';
import QuestionCard from '../shared/QuestionCard';
import ResultDisplay from '../shared/ResultDisplay';
import { calculateCompatibility } from '../../utils/scoring';

/**
 * Love Calculator Component
 * @param {Object} props - Component props
 * @param {string} props.userName - User's name
 * @param {string} props.targetGender - Gender preference
 */
const LoveCalculator = ({ userName = 'friend', targetGender = 'anyone' }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState(null);
  
  const questions = getQuestions('love', userName, targetGender);
  
  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = {
      questionId: questions[questionIndex].id,
      optionId: questions[questionIndex].options[optionIndex].id,
      score: questions[questionIndex].options[optionIndex].points
    };
    setAnswers(newAnswers);
    
    // Move to next question or show results
    if (questionIndex < questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      calculateResults(newAnswers);
    }
  };
  
  const calculateResults = (answers) => {
    const result = calculateCompatibility(answers, 'love');
    setResult(result);
    setIsComplete(true);
  };
  
  const resetCalculator = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setResult(null);
  };
  
  return (
    <div className="love-calculator">
      {!isComplete ? (
        <QuestionCard
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedAnswer={answers[currentQuestion] ? answers[currentQuestion].optionIndex : null}
          onAnswerSelect={(optionIndex) => handleAnswerSelect(currentQuestion, optionIndex)}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          calculatorType="love"
          englishHint={questions[currentQuestion].englishHint}
        />
      ) : (
        <ResultDisplay
          score={result.score}
          message={result.message}
          calculatorType="love"
          onRestartClick={resetCalculator}
          onShareClick={() => {
            // Share functionality
            alert(`You scored ${result.score}% on the Love Calculator!`);
          }}
        />
      )}
    </div>
  );
};

export default LoveCalculator;
```

#### EnhancedCalculator Component (`src/components/calculators/EnhancedCalculator.jsx`)

```jsx
import React, { useState, useEffect } from 'react';
import { getQuestions } from '../data/questions_enhanced';
import { calculateScore, getEnhancedResultMessage, analyzeScoreTags } from '../utils/scoring_enhanced';

/**
 * Enhanced Calculator Component
 * 
 * This component demonstrates how to use the enhanced questions and scoring system
 * that includes the "missing flavors" questions and personality trait analysis.
 */
function EnhancedCalculator({ calculatorType, userName = 'friend' }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load questions when component mounts or calculator type changes
  useEffect(() => {
    // Get questions for this calculator type
    const loadedQuestions = getQuestions(calculatorType, userName);
    setQuestions(loadedQuestions);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setLoading(false);
  }, [calculatorType, userName]);

  // Handle answer selection
  const handleAnswer = (questionId, optionId, points) => {
    const newAnswers = [...answers, { questionId, optionId, points }];
    setAnswers(newAnswers);

    // Move to next question or show result if done
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      showResult(newAnswers);
    }
  };

  // Calculate and display result
  const showResult = (finalAnswers) => {
    // Calculate overall score
    const score = calculateScore(finalAnswers);
    
    // Analyze personality traits based on score tags
    const personalityTraits = analyzeScoreTags(finalAnswers, questions);
    
    // Get enhanced result message with personality insights
    const message = getEnhancedResultMessage(score, personalityTraits, calculatorType);
    
    setResult({ score, message, personalityTraits });
  };

  // Reset the calculator
  const resetCalculator = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className={`enhanced-calculator ${calculatorType}-theme`}>
      {!result ? (
        <div className="question-container">
          <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          
          <div className="progress-bar">
            <div 
              className="progress" 
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          
          <div className="question-card">
            <h3>{questions[currentQuestion].question.replace('{name}', userName)}</h3>
            <p className="hint">{questions[currentQuestion].englishHint}</p>
            
            <div className="options">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(
                    questions[currentQuestion].id,
                    option.id,
                    option.points
                  )}
                  className="option-button"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h2>Your Result</h2>
          <div className="score">{result.score}%</div>
          <p className="result-message">{result.message}</p>
          
          <div className="personality-traits">
            <h3>Your Personality Insights</h3>
            <ul>
              {Object.entries(result.personalityTraits).map(([trait, value]) => (
                <li key={trait}>
                  <span className="trait-name">{trait}:</span>
                  <span className="trait-value">{value.toFixed(1)}</span>
                  <div className="trait-bar">
                    <div className="trait-fill" style={{ width: `${value * 10}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <button onClick={resetCalculator} className="reset-button">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default EnhancedCalculator;
```

## Data Structure

### Questions Data (`src/data/questions.js` and `src/data/questions_missing_flavors.json`)

The questions data is structured as follows:

```json
{
  "love": [
    {
      "id": "love_numb_1",
      "question": "Someone says \"I miss you 😔\" but {name} just stares at the screen. What's going through your mind?",
      "englishHint": "What do you think when someone misses you but you feel nothing?",
      "options": [
        { "id": "a", "text": "\"I don't feel anything, should I pretend?\" 🎭", "points": 1 },
        { "id": "b", "text": "\"Do I even miss people anymore?\" 🤔", "points": 2 },
        { "id": "c", "text": "\"Cute... but I need space.\" 🧊", "points": 3 },
        { "id": "d", "text": "\"I wanna reply, but I just... don't.\" 📱", "points": 2 }
      ],
      "scoreTag": "Emotional Numbness"
    },
    // more questions...
  ],
  // other calculator types...
}
```

## Utility Functions

### Scoring Utility (`src/utils/scoring.js`)

```javascript
/**
 * Calculate the compatibility score based on answers
 * @param {Array} answers - Array of user answers
 * @param {string} calculatorType - Type of calculator (love, friendship, career, personality)
 * @returns {Object} - Score object with numeric score and message
 */
export function calculateCompatibility(answers, calculatorType) {
  // Calculate raw score (sum of points)
  const totalPoints = answers.reduce((sum, answer) => sum + answer.score, 0);
  
  // Calculate maximum possible points
  const maxPoints = answers.length * 5; // Assuming max 5 points per question
  
  // Calculate percentage score
  const percentageScore = Math.round((totalPoints / maxPoints) * 100);
  
  // Get appropriate message based on score and calculator type
  const message = getResultMessage(percentageScore, calculatorType);
  
  return {
    score: percentageScore,
    message
  };
}

/**
 * Get appropriate result message based on score and calculator type
 * @param {number} score - Percentage score (0-100)
 * @param {string} calculatorType - Type of calculator
 * @returns {string} - Result message
 */
function getResultMessage(score, calculatorType) {
  const messages = {
    love: [
      { threshold: 20, message: "There's very little compatibility here. You might want to look elsewhere." },
      { threshold: 40, message: "There's some potential, but you'll need to work through significant differences." },
      { threshold: 60, message: "You have decent compatibility! With effort, this could be a fulfilling relationship." },
      { threshold: 80, message: "Great compatibility! You're likely to have a harmonious relationship." },
      { threshold: 101, message: "Wow! This is a match made in heaven. You're highly compatible!" }
    ],
    // Other calculator types...
  };
  
  // Get messages for the specified calculator type
  const typeMessages = messages[calculatorType] || messages.love;
  
  // Find the appropriate message based on score
  for (const { threshold, message } of typeMessages) {
    if (score < threshold) {
      return message;
    }
  }
  
  // Fallback message
  return "Something went wrong with your score calculation.";
}
```

## Implementation Considerations

1. **Framer Motion Integration**: The project uses Framer Motion for animations, particularly in UI components.

2. **Theme Support**: Each calculator has its own theme (love, friendship, career, personality) with specific colors and styles.

3. **Responsive Design**: The components are designed to work on various screen sizes using Tailwind CSS utilities.

4. **Shared Components**: The ProgressBar, QuestionCard, and ResultDisplay components are shared across different calculators.

5. **Enhanced Calculator Logic**: The EnhancedCalculator component demonstrates a more advanced implementation with personality trait analysis.

## Next Steps for Implementation

1. **Complete ResultDisplay Component**: Implement the missing ResultDisplay component.

2. **Add Remaining Calculator Types**: Complete the friendship, career, and personality calculator implementations.

3. **Create Layout Component**: Implement the Layout component for consistent page structure.

4. **Add Routing**: Set up React Router for navigation between calculator types.

5. **Implement Local Storage**: Use the useLocalStorage hook to save user progress and results.

6. **Add Animation Polish**: Enhance transitions between questions and results.
