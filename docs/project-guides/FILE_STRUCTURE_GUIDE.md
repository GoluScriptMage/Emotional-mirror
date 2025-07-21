# React Calculator - Project File Structure

This document provides an overview of the recommended file structure for the React Calculator project. Following this structure will help maintain organization and scalability as the project grows.

## Root Structure

```
react-calculator/
├── docs/                 # Documentation files
│   ├── guidelines/       # Development guidelines
│   ├── project-guides/   # Project-specific documentation
│   └── styling-guides/   # Styling documentation
├── public/               # Static assets
├── src/                  # Source code
└── README.md             # Project overview
```

## Documentation Structure

```
docs/
├── guidelines/
│   ├── DEVELOPMENT_GUIDELINES.md  # General development practices
│   ├── SEO_GUIDELINES.md          # SEO best practices
│   └── README.md                  # Guidelines index
├── project-guides/
│   ├── CALCULATOR_PROJECTS_DETAILED.md      # Calculator types info
│   ├── PROJECT_FILES_GUIDE.md               # File structure docs
│   └── STEP_BY_STEP_IMPLEMENTATION_GUIDE.md # Implementation steps
├── styling-guides/
│   ├── COLOR_SYSTEM_GUIDE.md                # Color palette docs
│   ├── VISUAL_DESIGN_GUIDE.md               # Visual design principles
│   ├── GLOBAL_STYLING_GUIDE.md              # Global styles
│   └── TAILWIND_IMPLEMENTATION_GUIDE.md     # Tailwind usage
└── MIGRATION_GUIDE.md                       # Structure migration guide
```

## Source Code Structure

```
src/
├── assets/               # Images, fonts, and other static files
│   ├── images/           # Image assets
│   └── fonts/            # Font files
├── components/           # React components
│   ├── calculators/      # Calculator-specific components
│   │   ├── love/         # Love calculator components
│   │   ├── friendship/   # Friendship calculator components
│   │   ├── career/       # Career calculator components
│   │   └── personality/  # Personality calculator components
│   ├── layout/           # Layout components
│   │   ├── Header.jsx    # App header
│   │   ├── Footer.jsx    # App footer
│   │   └── Layout.jsx    # Main layout wrapper
│   ├── shared/           # Shared components
│   │   ├── QuestionCard.jsx  # Question display component
│   │   └── ResultDisplay.jsx # Results display component
│   └── ui/               # Reusable UI components
│       ├── Button.jsx    # Button component
│       ├── Card.jsx      # Card component
│       └── Modal.jsx     # Modal component
├── context/              # React Context providers
│   ├── CalculatorContext.jsx  # Calculator state management
│   └── ThemeContext.jsx       # Theme management
├── data/                 # Data files
│   ├── questions.js      # Question data processing
│   └── questions.json    # Raw question data
├── hooks/                # Custom React hooks
│   ├── useCalculator.js  # Calculator logic hook
│   └── useLocalStorage.js # Local storage hook
├── pages/                # Page components
│   ├── Home.jsx          # Home page
│   ├── CalculatorPage.jsx # Calculator page template
│   └── About.jsx         # About page
├── styles/               # Global styles
│   ├── globals.css       # Global CSS
│   └── tailwind.css      # Tailwind imports
├── utils/                # Utility functions
│   ├── scoring.js        # Scoring algorithms
│   └── helpers.js        # Helper functions
├── App.jsx               # Main App component
├── index.jsx             # Entry point
└── routes.jsx            # Route definitions
```

## Component Structure

Each component should follow a consistent structure:

```jsx
// Import statements
import React from 'react';
import PropTypes from 'prop-types';

// Component definition
function ComponentName({ prop1, prop2 }) {
  // Component logic
  
  // Return JSX
  return (
    <div className="component-name">
      {/* Component content */}
    </div>
  );
}

// PropTypes
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

// Default props
ComponentName.defaultProps = {
  prop2: 0,
};

// Export
export default ComponentName;
```

## Calculator-Specific Components

Each calculator type should have its own set of components:

```
calculators/love/
├── LoveCalculator.jsx      # Main calculator component
├── LoveQuestions.jsx       # Love-specific questions
└── LoveResults.jsx         # Love-specific results
```

## Context Implementation

Context providers should be implemented at the appropriate level:

```jsx
// ThemeContext.jsx example
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

## Data Structure

Question data should follow this structure in `questions.json`:

```json
{
  "love": {
    "title": "Love Calculator",
    "description": "Calculate compatibility between you and your partner",
    "questions": [
      {
        "id": "love_q1",
        "text": "How often do you think about the other person?",
        "options": [
          { "id": "a", "text": "All the time", "points": 10 },
          { "id": "b", "text": "Several times a day", "points": 8 },
          { "id": "c", "text": "A few times a day", "points": 6 },
          { "id": "d", "text": "Occasionally", "points": 4 },
          { "id": "e", "text": "Rarely", "points": 2 }
        ]
      },
      // More questions...
    ]
  },
  // Other calculator types...
}
```

## Styling Approach

Tailwind CSS should be used for styling with custom theme configuration:

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'love-primary': '#ff6b6b',
        'friendship-primary': '#48dbfb',
        'career-primary': '#1dd1a1',
        'personality-primary': '#feca57',
        // More custom colors...
      },
      // Other theme extensions...
    },
  },
  plugins: [],
};
```

## Import Order Convention

Follow this order for imports:

1. React and React-related packages
2. Third-party libraries
3. Components
4. Hooks
5. Utilities
6. Assets
7. Styles

Example:

```jsx
// React and related
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Third-party
import classNames from 'classnames';

// Components
import Button from '../ui/Button';

// Hooks
import { useCalculator } from '../../hooks/useCalculator';

// Utilities
import { calculateScore } from '../../utils/scoring';

// Assets
import loveIcon from '../../assets/images/love-icon.svg';

// Styles (if not using Tailwind inline)
import './styles.css';
```

This file structure provides a solid foundation for organizing your React Calculator project. Adjust as needed based on specific project requirements.
