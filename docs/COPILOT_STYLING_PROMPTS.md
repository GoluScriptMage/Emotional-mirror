# 🤖 Copilot Prompts for Calculator App Styling

## 🎯 Master Prompt Template

**Use this template for each component you want to style:**

```
Create a responsive React component for [COMPONENT_NAME] using Tailwind CSS with the following requirements:

DESIGN CONTEXT:
- Dark theme calculator app with 4 personality calculators
- Target audience: Indian users (ages 18-30)
- Modern, fun, engaging personality
- Mobile-first responsive design

COLOR SCHEME:
- Background: bg-gray-900 (dark theme)
- Cards: bg-gray-800 with subtle borders
- Text: text-white (primary), text-gray-300 (secondary)
- Calculator-specific colors:
  * Love: bg-gradient-to-r from-pink-600 to-rose-500
  * Friendship: bg-gradient-to-r from-teal-600 to-cyan-500
  * Career: bg-gradient-to-r from-purple-600 to-violet-500
  * Personality: bg-gradient-to-r from-orange-500 to-amber-500

RESPONSIVE REQUIREMENTS:
- Mobile (sm): Stack vertically, full width, larger touch targets
- Tablet (md): 2-column grid where applicable
- Desktop (lg): 4-column grid, max-width container
- Smooth transitions and hover effects
- Touch-friendly (min 44px touch targets)

COMPONENT-SPECIFIC REQUIREMENTS:
[Add specific requirements for each component]

ACCESSIBILITY:
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios
- Focus states visible

Please provide the complete JSX component with Tailwind classes.
```

---

## 🏠 Home Page Component Prompts

### Header Component Prompt:
```
Create a responsive Header component using Tailwind CSS with:

COMPONENT: Header with logo, theme toggle, and audio controls

SPECIFIC REQUIREMENTS:
- Logo: "🧮 Calculator Hub" with gradient text
- Theme toggle: Sun/moon icons with smooth transition
- Audio controls: Volume slider and mute button
- Mobile: Collapse to hamburger menu
- Sticky header with backdrop blur effect
- Smooth animations on state changes

LAYOUT:
- Desktop: Logo left, controls right, centered content
- Mobile: Logo center, controls in dropdown menu
- Height: h-16 (64px) with proper padding

INTERACTIONS:
- Theme toggle: Smooth transition with localStorage save
- Audio controls: Volume slider with real-time feedback
- Hover effects: Subtle scale and glow
- Active states: Clear visual feedback
```

### Calculator Cards Grid Prompt:
```
Create a CalculatorCardsGrid component using Tailwind CSS with:

COMPONENT: 4 calculator cards in responsive grid

SPECIFIC REQUIREMENTS:
- 4 cards: Love, Friendship, Career, Personality
- Each card has: Icon, title, description, "Start Test" button
- Gradient backgrounds specific to each calculator type
- Hover effects: Lift animation, glow effect
- Click animation: Subtle scale down then scale up
- Loading state: Skeleton or shimmer effect

LAYOUT:
- Mobile (sm): 1 column, full width
- Tablet (md): 2x2 grid
- Desktop (lg): 1x4 horizontal grid
- Gap: gap-6 between cards
- Card height: Minimum h-48, consistent across all

ANIMATIONS:
- Entrance: Stagger animation (cards appear one by one)
- Hover: transform scale-105, add glow shadow
- Click: Brief scale-95 then back to normal
- Button: Gradient background with hover shift
```

### Welcome Message Prompt:
```
Create a WelcomeMessage component using Tailwind CSS with:

COMPONENT: Animated welcome message box

SPECIFIC REQUIREMENTS:
- Greeting message with user's name (if available)
- Subtitle encouraging exploration
- Animated typing effect for main text
- Background: Semi-transparent card with border
- Icon animations: Rotating or bouncing emojis
- Call-to-action: Subtle arrow pointing to cards

LAYOUT:
- Full width with max-w-4xl centered
- Padding: p-6 on mobile, p-8 on desktop
- Rounded corners: rounded-xl
- Shadow: Soft glow effect

ANIMATIONS:
- Text typing effect: 2s duration
- Icon bounce: Infinite subtle animation
- Background: Subtle pulse or shimmer
- Fade-in from top: 0.5s delay after page load
```

---

## 📱 Question Page Component Prompts

### Question Card Prompt:
```
Create a QuestionCard component using Tailwind CSS with:

COMPONENT: Interactive question display with 4 options

SPECIFIC REQUIREMENTS:
- Question text: Large, readable font with proper line height
- Options: 4 buttons in 2x2 grid (mobile: 1 column)
- Selected state: Different background and border
- Hover state: Subtle lift and color change
- Disabled state: Grayed out, no interaction
- Progress indicator: Visual progress bar at top

LAYOUT:
- Question area: min-h-32 with centered text
- Options grid: gap-4 between options
- Option buttons: min-h-16, rounded-lg
- Full width on mobile, max-w-2xl on desktop

INTERACTIONS:
- Option selection: Smooth color transition
- Ripple effect on click
- Sound trigger on selection (if audio enabled)
- Keyboard navigation: Arrow keys and Enter
- Touch feedback: Brief scale animation

ANIMATIONS:
- Slide-in from right when new question loads
- Option hover: scale-102 and shadow increase
- Selection: Background gradient animation
- Loading: Shimmer effect while question loads
```

### Progress Bar Prompt:
```
Create a ProgressBar component using Tailwind CSS with:

COMPONENT: Animated progress indicator

SPECIFIC REQUIREMENTS:
- Visual progress: Filled portion vs remaining
- Percentage text: Current progress as number
- Question counter: "2 of 6" format
- Smooth animation when progress updates
- Calculator-specific colors
- Time remaining (optional): Countdown timer

LAYOUT:
- Full width with proper padding
- Height: h-2 for bar, additional space for text
- Text above bar: Progress info
- Text below bar: Question counter

ANIMATIONS:
- Progress fill: Smooth transition over 0.5s
- Percentage update: Number counting animation
- Glow effect: Subtle pulse on active progress
- Completion: Celebration animation when 100%
```

### Navigation Controls Prompt:
```
Create NavigationControls component using Tailwind CSS with:

COMPONENT: Previous/Next buttons with audio/theme controls

SPECIFIC REQUIREMENTS:
- Previous button: Disabled on first question
- Next button: Enabled only when question answered
- Audio toggle: Music note icon with visual state
- Theme toggle: Sun/moon with smooth transition
- Back to home: Clear exit option
- Submit button: Special styling for final question

LAYOUT:
- Bottom fixed position on mobile
- Inline position on desktop
- Button spacing: gap-4 between elements
- Icon size: Consistent across all buttons

INTERACTIONS:
- Disabled state: Opacity-50, no hover effects
- Enabled state: Full opacity, hover effects
- Loading state: Spinner or pulse animation
- Success state: Brief checkmark animation
```

---

## 🎯 Result Page Component Prompts

### Result Display Prompt:
```
Create a ResultDisplay component using Tailwind CSS with:

COMPONENT: Animated result reveal with score and description

SPECIFIC REQUIREMENTS:
- Large score: 85% with calculator-specific color
- Result category: "Relationship Goals 😍" with emoji
- Detailed breakdown: Strengths and areas to improve
- Share buttons: Social media sharing options
- Action buttons: Try again, other calculators
- Confetti animation: Celebration effect on load

LAYOUT:
- Centered card with max-w-2xl
- Score area: Large prominent display
- Description: Readable paragraphs with proper spacing
- Button grid: Responsive layout for action buttons

ANIMATIONS:
- Score counter: Animated counting from 0 to final score
- Card entrance: Slide up with spring animation
- Confetti: Particle animation for high scores
- Button hover: Individual animations for each action
- Share success: Brief success message animation
```

### Share Component Prompt:
```
Create a ShareResult component using Tailwind CSS with:

COMPONENT: Social sharing with custom message generation

SPECIFIC REQUIREMENTS:
- Platform buttons: WhatsApp, Instagram, Twitter, Facebook
- Custom message: Pre-filled text with result
- Copy link: URL copying with success feedback
- QR code: Shareable QR code generation
- Screenshot: Capture result as image option

LAYOUT:
- Modal or inline display options
- Platform icons: Recognizable brand colors
- Grid layout: 2x2 on mobile, 1x4 on desktop
- Close button: Clear exit option

INTERACTIONS:
- Platform selection: Opens sharing interface
- Copy success: Toast notification or checkmark
- QR generation: Smooth loading animation
- Screenshot: Brief flash effect during capture
```

---

## 🎵 Audio Components Prompts

### Audio Controls Prompt:
```
Create AudioControls component using Tailwind CSS with:

COMPONENT: Music and sound effect controls

SPECIFIC REQUIREMENTS:
- Master volume: Slider with visual feedback
- Background music: Toggle with current track info
- Sound effects: Separate toggle for UI sounds
- Track info: Now playing display (optional)
- Visual equalizer: Animated bars when music plays

LAYOUT:
- Compact design for header integration
- Expandable panel for detailed controls
- Mobile: Collapsible drawer
- Desktop: Always visible mini controls

INTERACTIONS:
- Volume slider: Real-time audio adjustment
- Toggle animations: Smooth state transitions
- Visual feedback: EQ bars, pulse effects
- Mute state: Clear visual indication
- Loading: Audio loading states
```

---

## 🔧 Utility Component Prompts

### Modal Prompt:
```
Create a Modal component using Tailwind CSS with:

COMPONENT: Reusable modal for forms and confirmations

SPECIFIC REQUIREMENTS:
- Backdrop: Semi-transparent overlay with blur
- Content area: Centered card with proper padding
- Close options: X button and click outside to close
- Animation: Smooth enter/exit transitions
- Responsive: Full screen on mobile, centered on desktop
- Focus trap: Keyboard navigation contained within modal

INTERACTIONS:
- Open animation: Scale and fade in
- Close animation: Scale down and fade out
- Backdrop click: Close modal with animation
- Escape key: Close modal
- Loading state: Prevent closing during operations
```

### Form Components Prompt:
```
Create form components (Input, Button, Select) using Tailwind CSS with:

COMPONENT: Consistent form elements

SPECIFIC REQUIREMENTS:
- Input fields: Dark theme with focus states
- Buttons: Primary, secondary, and danger variants
- Validation: Error states with messages
- Loading states: Spinners and disabled appearance
- Consistent sizing: Same height across all elements

STYLING:
- Dark backgrounds with light borders
- Focus rings: Calculator-specific colors
- Error states: Red borders and error text
- Success states: Green borders and checkmarks
- Placeholder text: Subtle gray color
```

---

## 🎨 Animation & Transition Prompts

### Page Transitions Prompt:
```
Create page transition animations using Tailwind CSS and Framer Motion:

COMPONENT: Smooth transitions between routes

SPECIFIC REQUIREMENTS:
- Route changes: Slide animations based on navigation direction
- Component mounting: Stagger animations for multiple elements
- Loading states: Skeleton screens and spinners
- Error states: Shake animations for failed actions
- Success states: Bounce or scale animations

TIMING:
- Fast transitions: 0.2s for hover states
- Medium transitions: 0.3s for component changes
- Slow transitions: 0.5s for page changes
- Easing: Use ease-in-out for natural feel
```

---

## 📱 Mobile-Specific Prompts

### Mobile Navigation Prompt:
```
Create MobileNavigation component using Tailwind CSS with:

COMPONENT: Mobile-optimized navigation

SPECIFIC REQUIREMENTS:
- Hamburger menu: Three-line icon with animation to X
- Slide-out drawer: Full-height navigation panel
- Touch gestures: Swipe to open/close support
- Large touch targets: Minimum 44px for all buttons
- Safe area handling: Respect device notches and home indicators

LAYOUT:
- Fixed position header
- Full-screen overlay when open
- Smooth slide animations
- Backdrop blur effect
- Bottom safe area padding
```

---

## 🎯 Usage Instructions

### How to Use These Prompts:

1. **Copy the master template** and customize for your specific component
2. **Add component-specific requirements** from the detailed prompts above
3. **Paste into your Copilot chat** and let it generate the component
4. **Iterate and refine** by asking for specific adjustments
5. **Test responsiveness** and ask for mobile/desktop optimizations

### Example Usage:
```
Hey Copilot, [PASTE HEADER COMPONENT PROMPT]

Additional requirements:
- Make the logo text gradient from pink to orange
- Add a subtle animation to the theme toggle
- Ensure the audio controls have tooltips
- Make sure it works perfectly on iPhone and desktop
```

### Follow-up Prompts:
```
"Make this more responsive for mobile"
"Add hover animations to the buttons"
"Improve the color contrast for accessibility"
"Add loading states for when data is fetching"
"Make the animations more subtle and professional"
```

These prompts will help you quickly generate high-quality, responsive components while maintaining consistency across your app! 🚀
