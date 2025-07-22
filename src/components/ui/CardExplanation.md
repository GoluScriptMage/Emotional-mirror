# Card.jsx Explanation

This document explains the `Card.jsx` file line by line, with detailed comments to help junior developers understand the code, including tricky CSS concepts.

---

### **Imports**

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { motion as m } from 'framer-motion';
```

- **React**: Required to create React components.
- **PropTypes**: Used for type-checking props passed to the component.
- **Framer Motion**: Provides animation capabilities for the card.

---

### **Component Documentation**

```jsx
/**
 * Enhanced Card component with decorative elements and glass effects
 *
 * @param {string} variant - Card style variant (default, glass, shadowed)
 * @param {string} calculatorTheme - Calculator type (love, friendship, career, personality, default)
 * @param {boolean} interactive - Whether the card is interactive (hover effects)
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Card content
 */
```

- This block documents the props the `Card` component accepts.
- It helps developers understand the purpose of each prop.

---

### **Component Declaration**

```jsx
const Card = ({
  variant = 'default',
  calculatorTheme = 'default',
  interactive = false,
  className = '',
  children,
  ...props
}) => {
```

- **Props Destructuring**: Extracts props passed to the component.
- **Default Values**: Sets default values for props to ensure the component works even if some props are not provided.

---

### **Theme Colors**

```jsx
const getThemeColors = (theme) => {
  const colors = {
    default: {
      bg: 'bg-white dark:bg-gray-800',
      text: 'text-gray-900 dark:text-gray-100',
      border: 'border-gray-300 dark:border-gray-700',
    },
    love: {
      bg: 'bg-pink-100 dark:bg-pink-900',
      text: 'text-pink-700 dark:text-pink-300',
      border: 'border-pink-300 dark:border-pink-700',
    },
    // ...other themes
  };

  return colors[theme] || colors.default;
};
```

- **Purpose**: Defines color palettes for different themes.
- **Dynamic Colors**: Returns the appropriate color palette based on the `calculatorTheme` prop.

---

### **Card Classes**

```jsx
const cardClasses = `
  rounded-lg shadow-md
  ${variant === 'glass' ? 'bg-opacity-50 backdrop-blur-md' : ''}
  ${variant === 'shadowed' ? 'shadow-lg' : ''}
  ${themeColors.bg}
  ${themeColors.text}
  ${themeColors.border}
  ${interactive ? 'hover:shadow-xl transition-shadow duration-200' : ''}
  ${className}
`;
```

- **Purpose**: Combines all styles into a single string.
- **Dynamic Styling**: Adjusts classes based on props like `variant`, `calculatorTheme`, and `interactive`.
- **Tricky CSS**:
  - **`bg-opacity-50`**: Makes the background semi-transparent.
  - **`backdrop-blur-md`**: Applies a blur effect to the background.
  - **`hover:shadow-xl`**: Adds a larger shadow on hover.

---

### **Return Statement**

```jsx
return (
  <m.div className={cardClasses} {...props}>
    {children}
  </m.div>
);
```

- **Purpose**: Renders the card with all styles and content.
- **Conditional Rendering**: Adjusts appearance based on props.

---

### **Prop Types**

```jsx
Card.propTypes = {
  variant: PropTypes.oneOf(['default', 'glass', 'shadowed']),
  calculatorTheme: PropTypes.oneOf([
    'default',
    'love',
    'friendship',
    'career',
    'personality',
  ]),
  interactive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
```

- **Purpose**: Validates the types of props passed to the component.
- **Error Prevention**: Ensures props are used correctly.

---

### **Export**

```jsx
export default Card;
```

- **Purpose**: Makes the `Card` component available for use in other files.

---

### **Examples**

#### Example 1: Default Card

```jsx
<Card variant="default" calculatorTheme="friendship">
  <p>This is a default card.</p>
</Card>
```

- **Purpose**: A simple card with the "friendship" theme.

#### Example 2: Glass Card

```jsx
<Card variant="glass" calculatorTheme="career" interactive>
  <p>This is a glass card with hover effects.</p>
</Card>
```

- **Purpose**: A card with a glass effect and interactive hover.

#### Example 3: Shadowed Card

```jsx
<Card variant="shadowed" calculatorTheme="personality">
  <p>This is a shadowed card.</p>
</Card>
```

- **Purpose**: A card with a prominent shadow.

#### Example 4: Custom Styled Card

```jsx
<Card
  variant="default"
  className="p-6 bg-gradient-to-r from-blue-500 to-green-500"
>
  <p>This is a custom styled card.</p>
</Card>
```

- **Purpose**: A card with custom styles using Tailwind classes.
