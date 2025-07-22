# Button.jsx Explanation

This document explains the `Button.jsx` file line by line, with comments to help junior developers understand the code.

---

### **Imports**

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { motion as m } from 'framer-motion';
```

- **React**: Required to create React components.
- **PropTypes**: Used for type-checking props passed to the component.
- **Framer Motion**: Provides animation capabilities for the button.

---

### **Component Documentation**

```jsx
/**
 * Enhanced Button component with stunning visual effects and animations
 *
 * @param {string} variant - Button style variant (primary, secondary, outline, ghost, text)
 * @param {string} size - Button size (xs, sm, md, lg, xl)
 * @param {string} calculatorTheme - Calculator type (love, friendship, career, personality, default)
 * @param {boolean} disabled - Whether button is disabled
 * @param {boolean} loading - Whether button is in loading state
 * @param {boolean} fullWidth - Whether button takes full width
 * @param {boolean} iconOnly - Whether button contains only an icon
 * @param {ReactNode} leftIcon - Icon to show before text
 * @param {ReactNode} rightIcon - Icon to show after text
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Button content
 * @param {function} onClick - Click handler
 */
```

- This block documents the props the `Button` component accepts.
- It helps developers understand the purpose of each prop.

---

### **Component Declaration**

```jsx
const Button = ({
  variant = 'primary',
  size = 'md',
  calculatorTheme = 'default',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconOnly = false,
  leftIcon = null,
  rightIcon = null,
  className = '',
  children,
  onClick,
  ...props
}) => {
```

- **Props Destructuring**: Extracts props passed to the component.
- **Default Values**: Sets default values for props to ensure the component works even if some props are not provided.

---

### **Size Classes**

```jsx
const sizeClasses = {
  xs: iconOnly ? 'p-1.5 text-sm' : 'px-2.5 py-1 text-xs',
  sm: iconOnly ? 'p-2 text-sm' : 'px-3 py-1.5 text-sm',
  md: iconOnly ? 'p-2.5 text-base' : 'px-4 py-2 text-base',
  lg: iconOnly ? 'p-3 text-lg' : 'px-6 py-3 text-lg',
  xl: iconOnly ? 'p-4 text-xl' : 'px-8 py-4 text-xl',
};
```

- **Purpose**: Maps button sizes to Tailwind CSS classes.
- **Dynamic Classes**: Adjusts padding and text size based on the `iconOnly` prop.

---

### **Theme Colors**

```jsx
const getThemeColors = (theme) => {
  const colors = {
    default: {
      primary: {
        bg: 'bg-indigo-600',
        hover: 'hover:bg-indigo-700',
        active: 'active:bg-indigo-800',
        text: 'text-white',
        border: 'border-none',
        ring: 'focus:ring-indigo-500',
        shadow: 'shadow-indigo-500/20',
        glow: 'shadow-lg shadow-indigo-500/25',
      },
      // ...other variants
    },
    love: {
      primary: {
        bg: 'bg-gradient-to-r from-pink-500 to-rose-500',
        hover: 'hover:from-pink-600 hover:to-rose-600',
        active: 'active:from-pink-700 active:to-rose-700',
        text: 'text-white',
        border: 'border-none',
        ring: 'focus:ring-pink-500',
        shadow: 'shadow-pink-500/30',
        glow: 'shadow-lg shadow-pink-500/40',
      },
      // ...other variants
    },
    // ...other themes
  };

  return colors[theme] || colors.default;
};
```

- **Purpose**: Defines color palettes for different themes.
- **Dynamic Colors**: Returns the appropriate color palette based on the `calculatorTheme` prop.

---

### **Button Classes**

```jsx
const buttonClasses = `
  inline-flex items-center justify-center
  font-medium rounded-lg
  transition-all duration-150
  ${variant === 'outline' ? 'border' : 'border-0'}
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
  ${sizeClasses[size]}
  ${variantColors.bg}
  ${variantColors.text}
  ${variant === 'outline' ? variantColors.border : 'border-none'}
  ${variantColors.ring}
  ${!disabled ? variantColors.hover : ''}
  ${!disabled ? variantColors.active : ''}
  ${!disabled && variant === 'primary' ? variantColors.shadow : ''}
  ${stateClasses}
  ${widthClasses}
  ${className}
`;
```

- **Purpose**: Combines all styles into a single string.
- **Dynamic Styling**: Adjusts classes based on props like `variant`, `size`, and `disabled`.

---

### **Animation Variants**

```jsx
const buttonAnimation = {
  hover: !disabled
    ? {
        scale: 1.01,
        y: variant === 'primary' ? -1 : 0,
        boxShadow: variant === 'primary' ? variantColors.glow : '',
      }
    : {},
  tap: !disabled
    ? {
        scale: 0.98,
      }
    : {},
  initial: {
    scale: 1,
    y: 0,
  },
};
```

- **Purpose**: Defines hover and tap animations using Framer Motion.
- **Dynamic Animations**: Adjusts animations based on the `disabled` and `variant` props.

---

### **Click Handler**

```jsx
const handleClick = (e) => {
  if (!disabled && !loading && onClick) {
    onClick(e);
  }
};
```

- **Purpose**: Prevents clicks when the button is disabled or loading.
- **Callback**: Calls the `onClick` function if conditions are met.

---

### **Loading Spinner**

```jsx
const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
```

- **Purpose**: Displays a spinner when the `loading` prop is true.
- **Visual Feedback**: Indicates that an action is in progress.

---

### **Return Statement**

```jsx
return (
  <m.button
    className={buttonClasses}
    style={{
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
    }}
    onClick={handleClick}
    disabled={disabled || loading}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
    variants={buttonAnimation}
    transition={{
      type: 'spring',
      stiffness: 500,
      damping: 17,
      duration: 0.15,
    }}
    {...props}
  >
    {loading ? (
      <>
        <LoadingSpinner />
        <span>{children || 'Loading...'}</span>
      </>
    ) : (
      <>
        {leftIcon && (
          <span className={`${children ? 'mr-2' : ''}`}>{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {rightIcon && (
          <span className={`${children ? 'ml-2' : ''}`}>{rightIcon}</span>
        )}
      </>
    )}
  </m.button>
);
```

- **Purpose**: Renders the button with all styles, animations, and content.
- **Conditional Rendering**: Displays the spinner or button content based on the `loading` prop.

---

### **Prop Types**

```jsx
Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'ghost',
    'text',
    'danger',
    'success',
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  calculatorTheme: PropTypes.oneOf([
    'default',
    'love',
    'friendship',
    'career',
    'personality',
  ]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconOnly: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
```

- **Purpose**: Validates the types of props passed to the component.
- **Error Prevention**: Ensures props are used correctly.

---

### **Export**

```jsx
export default Button;
```

- **Purpose**: Makes the `Button` component available for use in other files.

---

### **Examples**

#### Example 1: Primary Button

```jsx
<Button
  variant="primary"
  size="md"
  calculatorTheme="love"
  onClick={() => alert('Clicked!')}
>
  Submit
</Button>
```

- **Purpose**: A simple primary button with the "love" theme.

#### Example 2: Icon-Only Button

```jsx
<Button
  variant="ghost"
  size="sm"
  iconOnly
  leftIcon={<i className="fas fa-heart"></i>}
  onClick={() => alert('Heart!')}
/>
```

- **Purpose**: A compact button with only an icon.

#### Example 3: Loading Button

```jsx
<Button variant="secondary" size="lg" loading>
  Loading...
</Button>
```

- **Purpose**: A button in the loading state.

#### Example 4: Full-Width Button

```jsx
<Button variant="outline" size="xl" fullWidth>
  Full Width
</Button>
```

- **Purpose**: A button that spans the full width of its container.
