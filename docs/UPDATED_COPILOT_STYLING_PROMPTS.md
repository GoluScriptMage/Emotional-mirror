# 🎨 Updated Copilot Prompts for Calculator App Styling with Global CSS

## 🌟 Global CSS Integration

When generating components, make sure to reference our global CSS system with the following updated master prompt:

```
Create a responsive React component for [COMPONENT_NAME] using Tailwind CSS with the following requirements:

DESIGN CONTEXT:
- Dark theme calculator app with 4 personality calculators
- Target audience: Indian users (ages 18-30)
- Modern, fun, engaging personality
- Mobile-first responsive design
- Follow the global CSS system defined in our project

GLOBAL CSS INTEGRATION:
- Use our defined color variables (--bg-primary, --text-primary, etc.)
- Use our font families: Poppins (headings), Montserrat (body), Quicksand (results)
- Follow spacing system with consistent padding/margin values
- Use calculator-specific theme classes (theme-love, theme-friendship, etc.)
- Utilize shared component styles from our design system

COLOR SCHEME:
- Background: var(--bg-primary) / bg-gray-900 (dark theme)
- Cards: var(--bg-secondary) / bg-gray-800 with subtle borders
- Text: var(--text-primary) / text-white (primary), var(--text-secondary) / text-gray-300 (secondary)
- Calculator-specific colors:
  * Love: bg-love-gradient / bg-gradient-to-r from-pink-600 to-rose-500
  * Friendship: bg-friendship-gradient / bg-gradient-to-r from-teal-600 to-cyan-500
  * Career: bg-career-gradient / bg-gradient-to-r from-purple-600 to-violet-500
  * Personality: bg-personality-gradient / bg-gradient-to-r from-orange-500 to-amber-500

RESPONSIVE REQUIREMENTS:
- Mobile (sm): Stack vertically, full width, larger touch targets
- Tablet (md): 2-column grid where applicable
- Desktop (lg): 4-column grid, max-width container
- Smooth transitions and hover effects
- Touch-friendly (min 48px touch targets)

COMPONENT-SPECIFIC REQUIREMENTS:
[Add specific requirements for each component]

ACCESSIBILITY:
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios
- Focus states visible
- Support for reduced motion preferences

UI DESIGN CONSISTENCY:
- Follow the exact layouts in UI_DESIGN_BREAKDOWN.md
- Match precise spacing, colors, and dimensions for each device size
- Implement animations as specified in the design guide

Please provide the complete JSX component with Tailwind classes that integrate with our global CSS system.
```

## 🎯 Component-Specific Prompts with Global CSS Integration

### Question Card Component:

```
Create a responsive QuestionCard component using Tailwind CSS that integrates with our global CSS system:

COMPONENT: Question card for calculator tests

GLOBAL CSS INTEGRATION:
- Use calculator-specific theme class: ${calculatorTheme ? `theme-${calculatorTheme}` : 'theme-love'}
- Use our font variables: font-poppins for headings, font-montserrat for body text
- Follow our spacing system with consistent padding/margins
- Use shared component styles from our design system

SPECIFIC REQUIREMENTS:
- Dynamic question number display (e.g., "Question 2 of 6")
- Question text with support for emojis and Hindi/English mixed text
- Multiple choice options with proper spacing
- Selected state for options
- Previous/Next navigation buttons
- Progress indicator matching calculator theme

LAYOUT:
- Follow exact dimensions from UI_DESIGN_BREAKDOWN.md
- Desktop: max-w-3xl centered card with 32px padding
- Tablet: Maintain proportions with 24px padding
- Mobile: Full width with 16px padding
- Question option height: 60px (desktop), 52px (tablet), 48px (mobile)

INTERACTIONS:
- Option hover: Background opacity change with calculator theme color
- Option selected: Background gradient with calculator theme
- Next button: Disabled until option selected
- Animation: Subtle fade/slide transition between questions
```

### Results Card Component:

```
Create a responsive ResultsCard component using Tailwind CSS that integrates with our global CSS system:

COMPONENT: Results card showing calculator test results

GLOBAL CSS INTEGRATION:
- Use calculator-specific theme class: ${calculatorTheme ? `theme-${calculatorTheme}` : 'theme-love'}
- Use our font variables: font-quicksand for results score, font-poppins for descriptions
- Apply proper color variables based on calculator type
- Follow shared component styles from our design system

SPECIFIC REQUIREMENTS:
- Large circular score display (0-100%) with theme gradient
- Result label/title ("Relationship Goals 😍")
- Personalized message addressing user by name
- Strengths section with checkmark bullets
- Areas to work on section with thought bubble bullets
- Action buttons (Share, Try Another, Take Again)

LAYOUT:
- Follow exact dimensions from UI_DESIGN_BREAKDOWN.md
- Desktop: max-w-3xl centered card with 32px padding
- Tablet: Maintain proportions with 24px padding
- Mobile: Stack elements vertically with 16px padding
- Score circle: 150px diameter (desktop), scaling down for smaller screens

ANIMATIONS:
- Score counter animation (count up from 0 to result)
- Entrance animation for sections (staggered fade in)
- Confetti animation on high scores (optional)
- Button hover effects matching calculator theme
```

### Navigation Header Component:

```
Create a responsive Header component using Tailwind CSS that integrates with our global CSS system:

COMPONENT: Header with back button, calculator title, progress, and controls

GLOBAL CSS INTEGRATION:
- Use calculator-specific theme class: ${calculatorTheme ? `theme-${calculatorTheme}` : 'theme-love'}
- Apply our font variables and spacing system
- Use proper color variables based on calculator type
- Follow our component styling patterns

SPECIFIC REQUIREMENTS:
- Back button with arrow icon
- Calculator title with emoji (e.g., "💕 Love Calculator")
- Question progress indicator (e.g., "[2/6]")
- Theme toggle button
- Audio controls (optional dropdown)
- Progress bar below header

LAYOUT:
- Follow exact dimensions from UI_DESIGN_BREAKDOWN.md
- Desktop: Fully expanded with all controls visible
- Tablet: Slightly condensed with icons and text
- Mobile: Compact with minimal text, icon-focused

INTERACTIONS:
- Back button: Returns to previous screen with confirmation on data loss
- Progress bar: Smooth animation when question changes
- Theme toggle: Smooth transition with proper icon change
- Sticky positioning with backdrop blur on scroll
```

## 🧠 Advanced Component Integration

### Theme Provider Setup:

```
Create a ThemeProvider component that manages our global theme system:

COMPONENT: Theme context provider for global styling

REQUIREMENTS:
- Create React Context for theme management
- Support dark/light mode toggling
- Support calculator-specific themes (love, friendship, career, personality)
- Save preferences to localStorage
- Apply appropriate CSS classes to document root
- Support system preference detection
- Handle reduced motion preference

FUNCTIONALITY:
- Switch between calculator themes dynamically
- Toggle between dark/light modes
- Export useTheme hook for components to consume
- Apply theme classes automatically based on current route
- Smooth transitions between theme changes

IMPLEMENTATION:
- Use context API for global state
- Leverage CSS variables for theme properties
- Interface with our global CSS system
- Add proper TypeScript types if applicable
```

### Global Style Component:

```
Create a GlobalStyles component that sets up our base styling:

COMPONENT: Global style provider component

REQUIREMENTS:
- Import necessary web fonts (Poppins, Montserrat, Quicksand)
- Set up CSS variables for themes
- Apply base styles to common elements
- Handle dark/light mode transitions
- Set up responsive breakpoints
- Support reduced motion preferences

IMPLEMENTATION:
- Use CSS imports for fonts
- Define CSS variables in :root
- Set up global styles for common elements
- Create utility classes that match our design system
- Add proper media queries for responsive behavior
```

## 📱 Responsive Behavior Specific Instructions

### Desktop Optimization:

```
When optimizing for desktop (1024px+):
- Use 4-column layout for calculator cards
- Maximum container width: 1200px centered
- Show expanded navigation with full text labels
- Enable hover effects and animations
- Use larger font sizes: headings 36px, body 16px
- Use ample padding: cards with 32px padding
- Show additional UI elements like detailed footer
```

### Tablet Optimization:

```
When optimizing for tablet (768px-1023px):
- Use 2-column layout for calculator cards
- Condensed navigation with some text labels
- Slightly reduced font sizes: headings 30px, body 16px
- Reduced padding: cards with 24px padding
- Hide some secondary UI elements
- Optimize touch targets for touch devices
```

### Mobile Optimization:

```
When optimizing for mobile (320px-767px):
- Use single column layout with full width cards
- Minimal navigation with mostly icons
- Further reduced font sizes: headings 24px, body 14px
- Minimal padding: cards with 16px padding
- Hide all non-essential UI elements
- Optimize touch targets (min 48px height)
- Support swipe gestures where appropriate
```

## 🔍 Best Practices Reminders

1. **Maintain Visual Consistency**:
   - Always reference the UI_DESIGN_BREAKDOWN.md for exact dimensions
   - Match the color schemes precisely using our global CSS variables
   - Follow the specified typography system consistently

2. **Performance Optimization**:
   - Use CSS transitions instead of JavaScript animations when possible
   - Purge unused styles in production
   - Lazy load components and images
   - Use proper will-change properties for animations

3. **Accessibility Excellence**:
   - Ensure all interactive elements have proper ARIA attributes
   - Maintain contrast ratios meeting WCAG 2.1 AA standards
   - Support keyboard navigation throughout
   - Provide text alternatives for non-text content
   - Respect user preferences for motion and contrast

4. **Cross-Browser Compatibility**:
   - Test on Chrome, Firefox, Safari, and Edge
   - Use feature detection over browser detection
   - Include appropriate polyfills for older browsers
   - Test on both iOS and Android devices

5. **State Management**:
   - Use the theme context for global styling state
   - Handle loading, error, and success states gracefully
   - Provide visual feedback for all user interactions
   - Persist user preferences using localStorage

Following these updated prompts will ensure that all components integrate seamlessly with our global CSS system while maintaining design consistency across the entire application.
