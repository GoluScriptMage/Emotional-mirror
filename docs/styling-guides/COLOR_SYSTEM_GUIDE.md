# 🎨 Color System & Theme Implementation Guide

## 🌈 Color Philosophy

The calculator app uses a **dark-first** design approach with calculator-specific accent colors to create personality and emotional connection with each test type.

### Color Psychology Mapping:
- **Love Calculator**: Pink/Rose → Romance, passion, warmth
- **Friendship Calculator**: Teal/Cyan → Trust, loyalty, calm
- **Career Calculator**: Purple/Violet → Ambition, wisdom, professionalism  
- **Personality Calculator**: Orange/Amber → Energy, creativity, confidence

---

## 🎯 Core Color Variables

### Base Dark Theme Colors:
```css
/* Background Colors */
--bg-primary: #0f0f0f        /* Main app background */
--bg-secondary: #1a1a1a      /* Card backgrounds */
--bg-tertiary: #2a2a2a       /* Elevated elements */

/* Text Colors */
--text-primary: #ffffff      /* Main headings, important text */
--text-secondary: #d1d5db    /* Body text, descriptions */
--text-muted: #9ca3af        /* Placeholder, subtle text */

/* Border Colors */
--border-primary: #374151    /* Card borders, dividers */
--border-focus: #6366f1      /* Focus states, active elements */
```

### Calculator-Specific Gradients:
```css
/* Love Calculator */
--love-gradient: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)
--love-light: #fdf2f8
--love-dark: #831843

/* Friendship Calculator */
--friendship-gradient: linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)
--friendship-light: #f0fdfa
--friendship-dark: #134e4a

/* Career Calculator */
--career-gradient: linear-gradient(135deg, #9333ea 0%, #8b5cf6 100%)
--career-light: #faf5ff
--career-dark: #581c87

/* Personality Calculator */
--personality-gradient: linear-gradient(135deg, #f59e0b 0%, #f97316 100%)
--personality-light: #fffbeb
--personality-dark: #92400e
```

---

## 🛠️ Tailwind CSS Implementation

### 1. Tailwind Config Setup
Add to your `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
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
        // Calculator-specific colors
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
      }
    }
  }
}
```

### 2. CSS Classes for Each Calculator

```css
/* Love Calculator Theme */
.theme-love {
  @apply bg-love-gradient text-white;
}
.theme-love .card {
  @apply bg-love-900/20 border-love-600/30;
}
.theme-love .button-primary {
  @apply bg-love-600 hover:bg-love-700 text-white;
}

/* Friendship Calculator Theme */
.theme-friendship {
  @apply bg-friendship-gradient text-white;
}
.theme-friendship .card {
  @apply bg-friendship-900/20 border-friendship-600/30;
}
.theme-friendship .button-primary {
  @apply bg-friendship-600 hover:bg-friendship-700 text-white;
}

/* Career Calculator Theme */
.theme-career {
  @apply bg-career-gradient text-white;
}
.theme-career .card {
  @apply bg-career-900/20 border-career-600/30;
}
.theme-career .button-primary {
  @apply bg-career-600 hover:bg-career-700 text-white;
}

/* Personality Calculator Theme */
.theme-personality {
  @apply bg-personality-gradient text-white;
}
.theme-personality .card {
  @apply bg-personality-900/20 border-personality-600/30;
}
.theme-personality .button-primary {
  @apply bg-personality-600 hover:bg-personality-700 text-white;
}
```

---

## 🎨 Component Color Usage Examples

### 1. Calculator Cards (Home Page)

```jsx
const calculators = [
  {
    id: 'love',
    name: 'Love Calculator',
    gradient: 'bg-love-gradient',
    textColor: 'text-love-100',
    borderColor: 'border-love-500/30'
  },
  {
    id: 'friendship', 
    name: 'Friendship Calculator',
    gradient: 'bg-friendship-gradient',
    textColor: 'text-friendship-100',
    borderColor: 'border-friendship-500/30'
  }
  // ... other calculators
]

// Usage in component:
<div className={`${calculator.gradient} ${calculator.textColor} p-6 rounded-xl`}>
  <h3 className="text-xl font-bold">{calculator.name}</h3>
</div>
```

### 2. Question Pages (Dynamic Theming)

```jsx
const QuestionPage = ({ calculatorType }) => {
  const getThemeClasses = (type) => {
    const themes = {
      love: {
        background: 'bg-gray-900',
        card: 'bg-gray-800 border-love-500/20',
        accent: 'bg-love-gradient',
        text: 'text-love-300',
        button: 'bg-love-600 hover:bg-love-700'
      },
      friendship: {
        background: 'bg-gray-900',
        card: 'bg-gray-800 border-friendship-500/20',
        accent: 'bg-friendship-gradient',
        text: 'text-friendship-300',
        button: 'bg-friendship-600 hover:bg-friendship-700'
      }
      // ... other themes
    }
    return themes[type] || themes.love
  }

  const theme = getThemeClasses(calculatorType)

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <div className={`${theme.card} p-6 rounded-xl`}>
        <h2 className={theme.text}>Question Title</h2>
        <button className={`${theme.button} px-6 py-3 rounded-lg`}>
          Next Question
        </button>
      </div>
    </div>
  )
}
```

### 3. Progress Bar (Calculator-Specific Colors)

```jsx
const ProgressBar = ({ progress, calculatorType }) => {
  const progressColors = {
    love: 'bg-love-gradient',
    friendship: 'bg-friendship-gradient', 
    career: 'bg-career-gradient',
    personality: 'bg-personality-gradient'
  }

  return (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className={`h-2 rounded-full transition-all duration-500 ${progressColors[calculatorType]}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
```

---

## 🌙 Theme Switching Implementation

### 1. Theme Context Setup

```jsx
// contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true) // Default to dark
  const [calculatorTheme, setCalculatorTheme] = useState('love')

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme')
    const savedCalculatorTheme = localStorage.getItem('calculatorTheme')
    
    if (savedTheme) setIsDark(savedTheme === 'dark')
    if (savedCalculatorTheme) setCalculatorTheme(savedCalculatorTheme)
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    // Save calculator theme
    localStorage.setItem('calculatorTheme', calculatorTheme)
  }, [calculatorTheme])

  return (
    <ThemeContext.Provider value={{
      isDark,
      setIsDark,
      calculatorTheme,
      setCalculatorTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

### 2. Theme Toggle Component

```jsx
// components/ThemeToggle.jsx
import { useTheme } from '../contexts/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme()

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 text-yellow-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-400" />
      )}
    </button>
  )
}
```

---

## 🎯 Responsive Color Adjustments

### Mobile Optimizations:
```css
/* Increase contrast for mobile */
@media (max-width: 640px) {
  .calculator-card {
    @apply shadow-2xl; /* Stronger shadows */
  }
  
  .text-accent {
    @apply font-semibold; /* Bolder text for readability */
  }
}
```

### High Contrast Mode:
```css
/* For accessibility */
@media (prefers-contrast: high) {
  :root {
    --bg-primary: #000000;
    --text-primary: #ffffff;
    --border-primary: #ffffff;
  }
}
```

---

## 🎨 Color Animation Examples

### 1. Gradient Animation
```css
.animated-gradient {
  background: linear-gradient(45deg, #ec4899, #f43f5e, #06b6d4, #8b5cf6);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 2. Color Pulse Effect
```css
.pulse-love {
  animation: pulseLove 2s ease-in-out infinite;
}

@keyframes pulseLove {
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7);
  }
  50% { 
    box-shadow: 0 0 0 20px rgba(236, 72, 153, 0);
  }
}
```

---

## 🚀 Implementation Checklist

### Phase 1: Basic Colors
- [ ] Set up Tailwind config with custom colors
- [ ] Create CSS variables for theme switching
- [ ] Implement dark mode toggle
- [ ] Test color contrast ratios

### Phase 2: Calculator-Specific Themes
- [ ] Create theme context for calculator types
- [ ] Implement dynamic theme switching
- [ ] Add calculator-specific gradients
- [ ] Test theme persistence

### Phase 3: Animations & Polish
- [ ] Add color transition animations
- [ ] Implement gradient animations
- [ ] Add pulse/glow effects
- [ ] Test performance on mobile

### Phase 4: Accessibility
- [ ] Test with screen readers
- [ ] Verify color contrast ratios
- [ ] Add high contrast mode support
- [ ] Implement reduced motion preferences

This color system creates a cohesive, engaging, and accessible design that enhances the user experience while maintaining technical excellence! 🎨✨
