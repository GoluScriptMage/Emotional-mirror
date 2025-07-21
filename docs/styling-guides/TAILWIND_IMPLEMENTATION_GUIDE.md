# 🚀 Tailwind CSS Implementation Guide

## Setup Instructions

Follow these steps to implement the Tailwind CSS styling in your React Calculator project:

### 1. Install Required Packages

```bash
# Install Tailwind CSS and dependencies
npm install -D tailwindcss postcss autoprefixer
npm install @tailwindcss/forms

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### 2. Update Your Main Component

Make sure to import the global CSS file in your main component (typically `main.jsx` or `index.jsx`):

```jsx
import './styles/globals.css';
// Other imports...

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### 3. Font Setup

The project uses these Google Fonts:
- Poppins (primary font)
- Montserrat (secondary font)
- Quicksand (display font)

They're already imported in the CSS file, but make sure the following line exists in your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 4. Using Calculator Themes

Each calculator has its own theme. Use the appropriate classes based on which calculator is active:

```jsx
// For Love Calculator
<button className="btn btn-md btn-love">Start Love Calculator</button>
<div className="card theme-love">Love Calculator Card</div>

// For Friendship Calculator
<button className="btn btn-md btn-friendship">Start Friendship Calculator</button>
<div className="card theme-friendship">Friendship Calculator Card</div>

// For Career Calculator
<button className="btn btn-md btn-career">Start Career Calculator</button>
<div className="card theme-career">Career Calculator Card</div>

// For Personality Calculator
<button className="btn btn-md btn-personality">Start Personality Calculator</button>
<div className="card theme-personality">Personality Calculator Card</div>
```

### 5. Common Component Classes

Here are some common component classes to use:

#### Buttons
```jsx
// Basic button
<button className="btn btn-md bg-gray-700 hover:bg-gray-600">Default Button</button>

// Calculator-themed button
<button className="btn btn-md btn-love">Love Button</button>

// Sizes
<button className="btn btn-sm">Small</button>
<button className="btn btn-md">Medium</button>
<button className="btn btn-lg">Large</button>
```

#### Cards
```jsx
// Basic card
<div className="card p-6">
  <div className="card-title">Card Title</div>
  <div className="card-description">Card description text</div>
</div>

// Themed card
<div className="card p-6 theme-friendship">
  <div className="card-title">Friendship Card</div>
  <div className="card-description">Friendship card description</div>
</div>
```

#### Form Elements
```jsx
// Input field
<label className="form-label">Your Name</label>
<input type="text" className="form-input" placeholder="Enter your name" />

// Select field
<label className="form-label">Choose Calculator</label>
<select className="form-select">
  <option value="love">Love Calculator</option>
  <option value="friendship">Friendship Calculator</option>
  <option value="career">Career Calculator</option>
  <option value="personality">Personality Calculator</option>
</select>
```

#### Progress Bar
```jsx
<div className="progress-container">
  <div 
    className="progress-bar progress-love" 
    style={{ width: `${progress}%` }}
  ></div>
</div>
```

#### Question Cards
```jsx
<div className="question-card">
  <div className="question-text">Your question text here?</div>
  
  <div className="option-grid">
    <button className="option-button theme-love">Option A</button>
    <button className="option-button theme-love selected">Option B</button>
    <button className="option-button theme-love">Option C</button>
    <button className="option-button theme-love">Option D</button>
  </div>
</div>
```

#### Results Display
```jsx
<div className="result-love">
  <div className="result-score">85%</div>
  <div className="result-title">Relationship Goals 😍</div>
  <div className="result-description">
    Your love compatibility is excellent! You have great communication and shared values.
  </div>
</div>
```

### 6. Using Utility Classes

#### Gradient Text
```jsx
<h2 className="text-gradient-love">Love Calculator</h2>
<h2 className="text-gradient-friendship">Friendship Calculator</h2>
<h2 className="text-gradient-career">Career Calculator</h2>
<h2 className="text-gradient-personality">Personality Calculator</h2>
```

#### Glow Effects
```jsx
<div className="glow-love">This has a pink glow</div>
<div className="glow-friendship">This has a teal glow</div>
<div className="glow-career">This has a purple glow</div>
<div className="glow-personality">This has an orange glow</div>
```

#### Animation Classes
```jsx
<div className="animate-pulse-slow">Pulsing element</div>
<div className="animate-float">Floating element</div>
<div className="animate-slide-in">Slides in when shown</div>
<div className="animate-fade-in">Fades in when shown</div>
<div className="animate-bounce-subtle">Subtly bounces</div>
```

### 7. Dark Mode

The app uses a dark theme by default, but if you want to support light mode as well:

```jsx
// Toggle dark mode
const [isDark, setIsDark] = useState(true);

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDark]);

// Then use dark: variants in your components
<div className="bg-white text-gray-900 dark:bg-dark-bg dark:text-white">
  Content that changes with theme
</div>
```

### 8. Responsive Design

Remember to use responsive classes for different screen sizes:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
  {/* Grid that changes columns based on screen size */}
</div>

<h1 className="text-2xl md:text-3xl lg:text-4xl">
  {/* Heading that grows with screen size */}
</h1>

<div className="p-4 md:p-6 lg:p-8">
  {/* Padding that increases with screen size */}
</div>
```

## Common Examples

### Home Page Calculator Cards

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Love Calculator Card */}
  <div className="card p-6 theme-love hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="card-title text-gradient-love">💕 Love Calculator</div>
    <div className="card-description">Find your compatibility</div>
    <div className="mt-4">
      <button className="btn btn-md btn-love w-full">Start Test</button>
    </div>
  </div>
  
  {/* Friendship Calculator Card */}
  <div className="card p-6 theme-friendship hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="card-title text-gradient-friendship">👫 Friendship Calculator</div>
    <div className="card-description">Test your friendship</div>
    <div className="mt-4">
      <button className="btn btn-md btn-friendship w-full">Start Test</button>
    </div>
  </div>
  
  {/* Other calculator cards... */}
</div>
```

### Question Page Layout

```jsx
<div className="max-w-2xl mx-auto px-4 py-8">
  {/* Progress */}
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span>Question {currentQuestion} of {totalQuestions}</span>
      <span>{Math.round((currentQuestion / totalQuestions) * 100)}%</span>
    </div>
    <div className="progress-container">
      <div 
        className="progress-bar progress-love" 
        style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
      ></div>
    </div>
  </div>
  
  {/* Question Card */}
  <div className="question-card">
    <div className="question-text">
      When it comes to family introduction, you...
    </div>
    
    <div className="option-grid">
      <button 
        className={`option-button theme-love ${selectedOption === 0 ? 'selected' : ''}`}
        onClick={() => setSelectedOption(0)}
      >
        Wait for 2 years minimum, dar lagta hai 😅
      </button>
      
      {/* Other options... */}
    </div>
  </div>
  
  {/* Navigation */}
  <div className="flex justify-between mt-6">
    <button 
      className="btn btn-md bg-gray-700 hover:bg-gray-600"
      disabled={currentQuestion === 1}
    >
      Previous
    </button>
    
    <button 
      className="btn btn-md btn-love"
      disabled={selectedOption === null}
    >
      {currentQuestion === totalQuestions ? 'See Results' : 'Next'}
    </button>
  </div>
</div>
```

### Results Page

```jsx
<div className="max-w-2xl mx-auto px-4 py-8">
  <div className="card p-8 theme-love">
    <div className="text-center mb-8">
      <div className="result-love">
        <div className="result-score animate-fade-in">85%</div>
        <div className="result-title animate-slide-in">Relationship Goals 😍</div>
      </div>
    </div>
    
    <div className="result-description">
      <p className="mb-4">
        Hey [Name], you're definitely relationship material! You handle family introductions 
        like a pro and your communication style shows maturity.
      </p>
      
      <h3 className="font-bold mb-2">Strengths:</h3>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Great communication</li>
        <li>Family-oriented approach</li>
        <li>Balanced social media presence</li>
      </ul>
      
      <h3 className="font-bold mb-2">Areas to work on:</h3>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Maybe be more spontaneous sometimes</li>
      </ul>
    </div>
    
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <button className="btn btn-md btn-love">Share Result</button>
      <button className="btn btn-md bg-gray-700 hover:bg-gray-600">Try Again</button>
      <button className="btn btn-md bg-gray-700 hover:bg-gray-600">Home</button>
    </div>
  </div>
</div>
```

## Tailwind Tips for Beginners

1. **Start with utility classes**: Build your UI with Tailwind's utility classes first
2. **Extract components**: When you see repeated patterns, create components
3. **Use responsive prefixes**: `sm:`, `md:`, `lg:`, `xl:` for different screen sizes
4. **Customize when needed**: Use the `tailwind.config.js` file for customization
5. **Inspect examples**: Look at the sample code above to understand patterns

Happy styling! 🎨✨
