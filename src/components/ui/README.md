# Enhanced UI Components for Calculator Project

This package contains a set of beautiful, modern UI components specifically designed for calculator applications with theme support.

## Components Included

- **Button**: A versatile button component with multiple variants, sizes, and theme support
- **Card**: An enhanced card component with decorative elements, glass morphism effects, and theme variants
- **Modal**: A responsive modal dialog with smooth animations and theme-specific styling

## Features

- **Theme Support**: All components support multiple calculator themes (love, friendship, career, personality)
- **Responsive Design**: Components are fully responsive and work across all device sizes
- **Animations**: Smooth transitions and micro-interactions powered by Framer Motion
- **Dark Mode**: Seamless dark mode support via Tailwind's dark mode system
- **Accessibility**: Built with accessibility in mind, including keyboard navigation
- **Customization**: Extensive prop options for customizing appearance and behavior

## How to Use

### Button Component

```jsx
import { Button } from './components/ui/EnhancedComponents';

// Basic usage
<Button variant="primary" calculatorTheme="love">
  Click Me
</Button>

// With all props
<Button
  variant="outline"              // primary, secondary, outline, ghost, text, danger, success
  calculatorTheme="friendship"   // default, love, friendship, career, personality
  size="md"                      // xs, sm, md, lg, xl
  disabled={false}
  loading={false}
  fullWidth={false}
  iconOnly={false}
  leftIcon={<IconComponent />}
  rightIcon={<IconComponent />}
  className="custom-class"
  onClick={handleClick}
>
  Button Text
</Button>
```

### Card Component

```jsx
import { Card } from './components/ui/EnhancedComponents';

// Basic usage
<Card calculatorTheme="career">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// With all props
<Card
  variant="glass"                // default, elevated, outlined, glass
  calculatorTheme="personality"  // default, love, friendship, career, personality
  size="md"                      // sm, md, lg, xl
  hoverable={true}
  bordered={false}
  shadow={true}
  fullWidth={false}
  className="custom-class"
  onClick={handleCardClick}
>
  <div>Card content</div>
</Card>
```

### Modal Component

```jsx
import { Modal } from './components/ui/EnhancedComponents';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        calculatorTheme="love"
        title="Modal Title"
        size="md"                  // sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, full
        footer={<FooterContent />}
        closeOnOverlayClick={true}
        closeOnEsc={true}
        position="center"          // center, top, bottom
      >
        <div>Modal content goes here</div>
      </Modal>
    </>
  );
}
```

## Example Usage

See the `EnhancedCalculatorExample.jsx` component for a complete example showcasing all components working together.

## Requirements

- React 16.8+ (for Hooks support)
- Tailwind CSS 3.0+
- Framer Motion 6.0+
