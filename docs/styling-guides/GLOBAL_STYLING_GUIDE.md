# 🎨 React Calculator - Global Styling Guide

## 📋 Table of Contents
1. [Introduction](#introduction)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Component Styling](#component-styling)
6. [Dark Mode](#dark-mode)
7. [Responsive Design](#responsive-design)
8. [Animations](#animations)
9. [Tailwind CSS Usage](#tailwind-css-usage)
10. [Best Practices](#best-practices)

---

## 📑 Introduction <a name="introduction"></a>

This guide provides a comprehensive overview of the styling system for the React Calculator app. It uses Tailwind CSS with custom configurations to create a consistent, modern, and responsive interface.

### 🎯 Design Philosophy

- **Dark-first design**: The app uses a dark theme as its primary design language
- **Consistent visual hierarchy**: Clear information architecture with emphasis on important elements
- **Calculator-specific themes**: Each calculator has its own color identity
- **Responsive and accessible**: Works across all devices and respects accessibility requirements
- **Delightful interactions**: Subtle animations and transitions enhance user experience

---

## 🌈 Color System <a name="color-system"></a>

### Base Dark Theme Colors

```css
/* Background */
--bg-primary: #0f0f0f     /* Main app background */
--bg-secondary: #1a1a1a   /* Card backgrounds */
--bg-tertiary: #2a2a2a    /* Elevated elements */

/* Text */
--text-primary: #ffffff   /* Main headings, important text */
--text-secondary: #d1d5db /* Body text, descriptions */
--text-muted: #9ca3af     /* Placeholder, subtle text */

/* Border */
--border-primary: #374151 /* Card borders, dividers */
--border-focus: #6366f1   /* Focus states */
```

### Calculator-Specific Colors

Each calculator has its own color theme:

#### Love Calculator
- Primary: `#ff1493` (Deep pink)
- Secondary: `#ff69b4` (Hot pink)
- Gradient: `from-pink-600 to-rose-500`
- Text: `text-love-50` (Light), `text-love-500` (Dark)

#### Friendship Calculator
- Primary: `#20b2aa` (Light sea green)
- Secondary: `#40e0d0` (Turquoise)
- Gradient: `from-teal-600 to-cyan-500`
- Text: `text-friendship-50` (Light), `text-friendship-500` (Dark)

#### Career Calculator
- Primary: `#6a5acd` (Slate blue)
- Secondary: `#9370db` (Medium purple)
- Gradient: `from-purple-600 to-violet-500`
- Text: `text-career-50` (Light), `text-career-500` (Dark)

#### Personality Calculator
- Primary: `#ffa500` (Orange)
- Secondary: `#ff8c00` (Dark orange)
- Gradient: `from-orange-500 to-amber-500`
- Text: `text-personality-50` (Light), `text-personality-500` (Dark)

### How to Use Calculator Colors

```jsx
// For a Love Calculator button
<button className="bg-love-600 hover:bg-love-700 text-white">
  Start Love Calculator
</button>

// For a Friendship Calculator card
<div className="bg-friendship-gradient text-white p-6 rounded-xl">
  Friendship Calculator
</div>

// For a Career Calculator border
<div className="border border-career-500/20 hover:border-career-500/40">
  Career path options
</div>

// For a Personality Calculator text
<h3 className="text-personality-500 font-bold">
  Your Personality Results
</h3>
```

---

## ✍️ Typography <a name="typography"></a>

### Font Family

We use a combination of fonts for different elements:

```css
/* Main font - Poppins */
--font-primary: 'Poppins', sans-serif;

/* Secondary font - Montserrat */
--font-secondary: 'Montserrat', sans-serif;

/* Display font (for results and special elements) */
--font-display: 'Quicksand', sans-serif;
```

### How to Import Fonts

Add this to your `index.html` file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Font Sizes and Weights

```css
/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Tailwind Typography Classes

```jsx
// Main heading
<h1 className="font-poppins text-4xl font-bold text-white">
  Calculator Hub
</h1>

// Subheading
<h2 className="font-montserrat text-2xl font-semibold text-gray-200">
  Find Your Compatibility
</h2>

// Body text
<p className="font-poppins text-base text-gray-300">
  Answer these fun questions to discover your compatibility!
</p>

// Special display text (results)
<div className="font-quicksand text-5xl font-bold bg-love-gradient bg-clip-text text-transparent">
  85%
</div>
```

---

## 📐 Spacing System <a name="spacing-system"></a>

We use Tailwind's default spacing scale for consistency:

### Spacing Scale

```
0 = 0px
0.5 = 0.125rem (2px)
1 = 0.25rem (4px)
1.5 = 0.375rem (6px)
2 = 0.5rem (8px)
2.5 = 0.625rem (10px)
3 = 0.75rem (12px)
3.5 = 0.875rem (14px)
4 = 1rem (16px)
5 = 1.25rem (20px)
6 = 1.5rem (24px)
8 = 2rem (32px)
10 = 2.5rem (40px)
12 = 3rem (48px)
16 = 4rem (64px)
20 = 5rem (80px)
24 = 6rem (96px)
```

### Usage Examples

```jsx
// Margins
<div className="mt-4 mb-6 mx-auto">
  {/* 16px top margin, 24px bottom margin, horizontally centered */}
</div>

// Padding
<div className="p-6">
  {/* 24px padding on all sides */}
</div>

<div className="py-4 px-6">
  {/* 16px padding top/bottom, 24px padding left/right */}
</div>

// Spacing between items
<div className="space-y-4">
  {/* 16px vertical spacing between child elements */}
</div>

// Gap in grid/flex
<div className="grid grid-cols-2 gap-6">
  {/* 24px gap between grid items */}
</div>
```

---

## 🧩 Component Styling <a name="component-styling"></a>

### Buttons

```jsx
// Primary button with calculator theme
<Button 
  variant="primary"
  calculatorTheme="love"
  size="md"
>
  Start Test
</Button>

// Button variants
// - primary: Solid calculator-themed button
// - secondary: Gray button with calculator-themed border
// - outline: Outlined button with calculator theme
// - ghost: Transparent button with hover effect
// - danger: Red button for destructive actions

// Button sizes
// - sm: Small button (px-3 py-1.5)
// - md: Medium button (px-6 py-3)
// - lg: Large button (px-8 py-4)
```

### Cards

```jsx
// Basic card
<Card>
  <Card.Title>Card Title</Card.Title>
  <Card.Description>Card description here</Card.Description>
</Card>

// Card with calculator theme
<Card calculatorTheme="friendship" hover={true}>
  <Card.Header>
    <Card.Title>Friendship Calculator</Card.Title>
  </Card.Header>
  <Card.Body>
    Content goes here
  </Card.Body>
  <Card.Footer>
    <Button calculatorTheme="friendship">Start Test</Button>
  </Card.Footer>
</Card>

// Card variants
// - default: Standard card (p-6)
// - compact: Smaller padding (p-4)
// - large: Larger padding (p-8)
// - flat: No shadow, subtle border
```

### Modals

```jsx
// Basic modal
<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  size="md"
>
  <h2 className="text-xl font-bold mb-4">Modal Title</h2>
  <p className="text-gray-300">Modal content goes here</p>
  <div className="mt-6 flex justify-end">
    <Button onClick={() => setIsModalOpen(false)}>Close</Button>
  </div>
</Modal>

// Modal sizes
// - sm: Small modal (max-w-sm)
// - md: Medium modal (max-w-md)
// - lg: Large modal (max-w-lg)
// - xl: Extra large modal (max-w-xl)
// - 2xl: Double extra large modal (max-w-2xl)
```

### Forms

```jsx
// Input field
<div className="mb-4">
  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
    Your Name
  </label>
  <input
    type="text"
    id="name"
    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5
              text-gray-100 focus:ring-2 focus:ring-love-500 focus:border-transparent"
    placeholder="Enter your name"
  />
</div>

// Select field
<div className="mb-4">
  <label htmlFor="calculator" className="block text-sm font-medium text-gray-300 mb-1">
    Choose Calculator
  </label>
  <select
    id="calculator"
    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2.5
              text-gray-100 focus:ring-2 focus:ring-career-500 focus:border-transparent"
  >
    <option value="love">Love Calculator</option>
    <option value="friendship">Friendship Calculator</option>
    <option value="career">Career Calculator</option>
    <option value="personality">Personality Calculator</option>
  </select>
</div>
```

---

## 🌙 Dark Mode <a name="dark-mode"></a>

Our app uses Tailwind's dark mode with the `class` strategy.

### Setting Up Dark Mode

```js
// In tailwind.config.js
module.exports = {
  darkMode: 'class',
  // rest of your config
}
```

### Toggle Dark Mode

```jsx
// Simple dark mode toggle component
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          {/* Sun icon */}
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          {/* Moon icon */}
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
```

### Using Dark Mode Classes

```jsx
// Component that adapts to dark mode
<div className="bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text">
  <div className="bg-gray-100 dark:bg-dark-surface border dark:border-dark-border">
    <h2 className="text-gray-800 dark:text-white">This adapts to dark mode</h2>
    <p className="text-gray-600 dark:text-gray-300">This text changes color in dark mode</p>
  </div>
</div>
```

---

## 📱 Responsive Design <a name="responsive-design"></a>

Our design follows a mobile-first approach with responsive breakpoints.

### Breakpoint System

```
sm: 640px  (Mobile landscape)
md: 768px  (Tablets)
lg: 1024px (Desktops)
xl: 1280px (Large desktops)
2xl: 1536px (Extra large screens)
```

### Usage Examples

```jsx
// Element that changes based on screen size
<div className="
  w-full          /* Full width on mobile */
  md:w-1/2        /* Half width on tablets */
  lg:w-1/4        /* Quarter width on desktops */
  p-4             /* Small padding on mobile */
  md:p-6          /* Larger padding on tablets+ */
  text-base       /* Base font size on mobile */
  lg:text-lg      /* Larger font on desktops */
">
  Responsive content
</div>

// Grid that changes column count
<div className="
  grid
  grid-cols-1     /* 1 column on mobile */
  md:grid-cols-2  /* 2 columns on tablets */
  lg:grid-cols-4  /* 4 columns on desktops */
  gap-4           /* Small gap on mobile */
  md:gap-6        /* Larger gap on tablets+ */
">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

// Hiding/showing elements based on screen size
<div>
  <span className="block md:hidden">Visible only on mobile</span>
  <span className="hidden md:block lg:hidden">Visible only on tablets</span>
  <span className="hidden lg:block">Visible only on desktops</span>
</div>
```

---

## ✨ Animations <a name="animations"></a>

We use a combination of Tailwind CSS transitions and Framer Motion for animations.

### Basic Transitions

```jsx
// Hover transitions with Tailwind
<button className="
  bg-gray-700 
  hover:bg-gray-600 
  transition-colors 
  duration-200
">
  Hover me
</button>

// Scale transitions
<div className="
  transform 
  hover:scale-105 
  transition-transform 
  duration-200
">
  I grow on hover
</div>
```

### Framer Motion Animations

```jsx
// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  I fade in and slide up
</motion.div>

// Hover and tap animations
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-love-500 text-white px-4 py-2 rounded-lg"
>
  Interactive Button
</motion.button>

// Staggered list animation
<motion.ul>
  {items.map((item, i) => (
    <motion.li
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
    >
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### Custom Animations

```css
/* In your CSS file */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* In your JSX */
<div className="animate-pulse">
  I pulse infinitely
</div>
```

---

## 🛠️ Tailwind CSS Usage <a name="tailwind-css-usage"></a>

### Core Concepts

1. **Utility-First**: Build designs by applying utility classes directly in your HTML
2. **Mobile-First**: Default styles are for mobile, use responsive prefixes for larger screens
3. **Component Extraction**: For repeated UI patterns, extract them into components

### Commonly Used Utilities

#### Layout
- `container`: Set max-width based on screen size
- `flex`, `grid`: Flexbox and Grid layouts
- `justify-*`, `items-*`: Alignment control
- `space-*`: Spacing between children
- `p-*`, `m-*`: Padding and margin

#### Typography
- `text-*`: Font size (text-sm, text-lg, etc)
- `font-*`: Font weight (font-bold, font-medium)
- `text-color`: Text color (text-white, text-gray-300)
- `leading-*`: Line height
- `tracking-*`: Letter spacing

#### Appearance
- `bg-*`: Background colors and gradients
- `border-*`: Border width, color, and style
- `rounded-*`: Border radius
- `shadow-*`: Box shadows
- `opacity-*`: Opacity levels

### Tailwind Tips for Beginners

1. **Use the documentation**: Tailwind has excellent docs at [tailwindcss.com](https://tailwindcss.com/docs)
2. **Learn the shorthand**: `py-4` means padding-top and padding-bottom of 1rem
3. **Group related utilities**: Keep layout, typography, and appearance utilities grouped
4. **Responsive prefixes go first**: `md:w-1/2` not `w-1/2 md`
5. **Extract repeated patterns**: If you find yourself typing the same classes over and over, create a component

### Example of Well-Structured Tailwind Classes

```jsx
<button className="
  /* Layout */
  inline-flex items-center justify-center
  w-full md:w-auto
  px-6 py-3
  
  /* Typography */
  text-base font-medium
  text-white
  
  /* Appearance */
  bg-love-600
  hover:bg-love-700
  rounded-lg
  shadow-md
  
  /* Transitions */
  transition-all duration-200
  transform hover:scale-105
  active:scale-95
">
  Start Love Calculator
</button>
```

---

## 🔍 Best Practices <a name="best-practices"></a>

### Maintain Consistency

1. **Use the color system consistently**: Stick to the defined colors for each calculator
2. **Follow spacing patterns**: Use consistent spacing throughout the app
3. **Typography hierarchy**: Maintain clear heading and text patterns

### Performance Tips

1. **Avoid large CSS classes**: Keep your Tailwind class lists manageable
2. **Use Purge CSS**: Ensure unused styles are removed in production
3. **Lazy load components**: Split code for better performance
4. **Optimize animations**: Use `will-change` for complex animations

### Accessibility Guidelines

1. **Maintain contrast**: Ensure text has sufficient contrast (at least 4.5:1 for normal text)
2. **Provide focus states**: All interactive elements should have visible focus states
3. **Use semantic HTML**: Use the right HTML elements for the right purpose
4. **Include ARIA attributes**: Add aria-labels for screen readers
5. **Support keyboard navigation**: Ensure all interactions work with keyboard

### Common Styling Pitfalls to Avoid

1. **Inconsistent spacing**: Mixing different padding/margin values
2. **Hardcoded colors**: Using hex values instead of Tailwind color classes
3. **Non-responsive design**: Forgetting to add responsive variants
4. **Overriding styles**: Creating complex CSS overrides instead of using Tailwind
5. **Poor dark mode support**: Not testing the dark mode experience

---

## 🎯 Quick Reference

### Calculator Theme Colors
- **Love**: `love-500` to `love-900`, `bg-love-gradient`
- **Friendship**: `friendship-500` to `friendship-900`, `bg-friendship-gradient`
- **Career**: `career-500` to `career-900`, `bg-career-gradient`
- **Personality**: `personality-500` to `personality-900`, `bg-personality-gradient`

### Font Usage
- **Headings**: Poppins (font-poppins)
- **Body Text**: Montserrat (font-montserrat)
- **Special Display**: Quicksand (font-quicksand)

### Common Components
- **Buttons**: `<Button variant="primary" calculatorTheme="love">`
- **Cards**: `<Card calculatorTheme="career" hover={true}>`
- **Modals**: `<Modal isOpen={true} onClose={handleClose} size="md">`

---

## 🚀 Next Steps

1. **Create a component library**: Catalog all your UI components
2. **Setup Storybook**: Document components for easy reference
3. **Add theme switcher**: Allow users to switch between light/dark themes
4. **Implement animations**: Add micro-interactions for better UX
5. **Test on multiple devices**: Ensure responsive design works everywhere

Happy styling! 🎨✨
