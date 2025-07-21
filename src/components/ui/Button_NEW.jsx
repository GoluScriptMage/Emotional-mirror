import React from 'react';
import PropTypes from 'prop-types';
import { motion as m } from 'framer-motion';

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
  // Size classes for different button sizes
  const sizeClasses = {
    xs: iconOnly ? 'p-1.5 text-sm' : 'px-2.5 py-1 text-xs',
    sm: iconOnly ? 'p-2 text-sm' : 'px-3 py-1.5 text-sm',
    md: iconOnly ? 'p-2.5 text-base' : 'px-4 py-2 text-base',
    lg: iconOnly ? 'p-3 text-lg' : 'px-6 py-3 text-lg',
    xl: iconOnly ? 'p-4 text-xl' : 'px-8 py-4 text-xl',
  };

  // Get the color palette based on calculator theme
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
        secondary: {
          bg: 'bg-indigo-100',
          hover: 'hover:bg-indigo-200',
          active: 'active:bg-indigo-300',
          text: 'text-indigo-800',
          border: 'border-none',
          ring: 'focus:ring-indigo-500',
          shadow: 'shadow-indigo-500/10',
          glow: 'shadow-md shadow-indigo-500/20',
        },
        outline: {
          bg: 'bg-transparent',
          hover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/10',
          active: 'active:bg-indigo-100 dark:active:bg-indigo-900/20',
          text: 'text-indigo-600 dark:text-indigo-300',
          border: 'border-none',
          ring: 'focus:ring-indigo-500',
          shadow: '',
          glow: '',
        },
        ghost: {
          bg: 'bg-transparent',
          hover: 'hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10',
          active: 'active:bg-indigo-100/50 dark:active:bg-indigo-900/20',
          text: 'text-indigo-600 dark:text-indigo-300',
          border: 'border-none',
          ring: 'focus:ring-indigo-500',
          shadow: '',
          glow: '',
        },
        text: {
          bg: 'bg-transparent',
          hover: 'hover:underline',
          active: 'active:bg-transparent',
          text: 'text-indigo-600 dark:text-indigo-300',
          border: 'border-none',
          ring: 'focus:ring-0',
          shadow: '',
          glow: '',
        },
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
        secondary: {
          bg: 'bg-white dark:bg-gray-800',
          hover: 'hover:bg-pink-50 dark:hover:bg-gray-700',
          active: 'active:bg-pink-100 dark:active:bg-gray-600',
          text: 'text-pink-700 dark:text-pink-300',
          border: 'border-none',
          ring: 'focus:ring-pink-500',
          shadow: 'shadow-pink-500/10',
          glow: 'shadow-md shadow-pink-500/20',
        },
        outline: {
          bg: 'bg-transparent',
          hover: 'hover:bg-pink-50 dark:hover:bg-pink-900/10',
          active: 'active:bg-pink-100 dark:active:bg-pink-900/20',
          text: 'text-pink-600 dark:text-pink-300',
          border: 'border-none',
          ring: 'focus:ring-pink-500',
          shadow: '',
          glow: '',
        },
        ghost: {
          bg: 'bg-transparent',
          hover: 'hover:bg-pink-50/50 dark:hover:bg-pink-900/10',
          active: 'active:bg-pink-100/50 dark:active:bg-pink-900/20',
          text: 'text-pink-600 dark:text-pink-300',
          border: 'border-none',
          ring: 'focus:ring-pink-500',
          shadow: '',
          glow: '',
        },
        text: {
          bg: 'bg-transparent',
          hover: 'hover:underline',
          active: 'active:bg-transparent',
          text: 'text-pink-600 dark:text-pink-300',
          border: 'border-none',
          ring: 'focus:ring-0',
          shadow: '',
          glow: '',
        },
      },
      friendship: {
        primary: {
          bg: 'bg-gradient-to-r from-teal-500 to-cyan-500',
          hover: 'hover:from-teal-600 hover:to-cyan-600',
          active: 'active:from-teal-700 active:to-cyan-700',
          text: 'text-white',
          border: 'border-none',
          ring: 'focus:ring-teal-500',
          shadow: 'shadow-teal-500/30',
          glow: 'shadow-lg shadow-teal-500/40',
        },
        secondary: {
          bg: 'bg-white dark:bg-gray-800',
          hover: 'hover:bg-teal-50 dark:hover:bg-gray-700',
          active: 'active:bg-teal-100 dark:active:bg-gray-600',
          text: 'text-teal-700 dark:text-teal-300',
          border: 'border-none',
          ring: 'focus:ring-teal-500',
          shadow: 'shadow-teal-500/10',
          glow: 'shadow-md shadow-teal-500/20',
        },
        outline: {
          bg: 'bg-transparent',
          hover: 'hover:bg-teal-50 dark:hover:bg-teal-900/10',
          active: 'active:bg-teal-100 dark:active:bg-teal-900/20',
          text: 'text-teal-600 dark:text-teal-300',
          border: 'border-none',
          ring: 'focus:ring-teal-500',
          shadow: '',
          glow: '',
        },
        ghost: {
          bg: 'bg-transparent',
          hover: 'hover:bg-teal-50/50 dark:hover:bg-teal-900/10',
          active: 'active:bg-teal-100/50 dark:active:bg-teal-900/20',
          text: 'text-teal-600 dark:text-teal-300',
          border: 'border-none',
          ring: 'focus:ring-teal-500',
          shadow: '',
          glow: '',
        },
        text: {
          bg: 'bg-transparent',
          hover: 'hover:underline',
          active: 'active:bg-transparent',
          text: 'text-teal-600 dark:text-teal-300',
          border: 'border-none',
          ring: 'focus:ring-0',
          shadow: '',
          glow: '',
        },
      },
      career: {
        primary: {
          bg: 'bg-gradient-to-r from-purple-500 to-violet-500',
          hover: 'hover:from-purple-600 hover:to-violet-600',
          active: 'active:from-purple-700 active:to-violet-700',
          text: 'text-white',
          border: 'border-none',
          ring: 'focus:ring-purple-500',
          shadow: 'shadow-purple-500/30',
          glow: 'shadow-lg shadow-purple-500/40',
        },
        secondary: {
          bg: 'bg-white dark:bg-gray-800',
          hover: 'hover:bg-purple-50 dark:hover:bg-gray-700',
          active: 'active:bg-purple-100 dark:active:bg-gray-600',
          text: 'text-purple-700 dark:text-purple-300',
          border: 'border-none',
          ring: 'focus:ring-purple-500',
          shadow: 'shadow-purple-500/10',
          glow: 'shadow-md shadow-purple-500/20',
        },
        outline: {
          bg: 'bg-transparent',
          hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/10',
          active: 'active:bg-purple-100 dark:active:bg-purple-900/20',
          text: 'text-purple-600 dark:text-purple-300',
          border: 'border-none',
          ring: 'focus:ring-purple-500',
          shadow: '',
          glow: '',
        },
        ghost: {
          bg: 'bg-transparent',
          hover: 'hover:bg-purple-50/50 dark:hover:bg-purple-900/10',
          active: 'active:bg-purple-100/50 dark:active:bg-purple-900/20',
          text: 'text-purple-600 dark:text-purple-300',
          border: 'border-none',
          ring: 'focus:ring-purple-500',
          shadow: '',
          glow: '',
        },
        text: {
          bg: 'bg-transparent',
          hover: 'hover:underline',
          active: 'active:bg-transparent',
          text: 'text-purple-600 dark:text-purple-300',
          border: 'border-none',
          ring: 'focus:ring-0',
          shadow: '',
          glow: '',
        },
      },
      personality: {
        primary: {
          bg: 'bg-gradient-to-r from-amber-500 to-orange-500',
          hover: 'hover:from-amber-600 hover:to-orange-600',
          active: 'active:from-amber-700 active:to-orange-700',
          text: 'text-white',
          border: 'border-none',
          ring: 'focus:ring-amber-500',
          shadow: 'shadow-amber-500/30',
          glow: 'shadow-lg shadow-amber-500/40',
        },
        secondary: {
          bg: 'bg-white dark:bg-gray-800',
          hover: 'hover:bg-amber-50 dark:hover:bg-gray-700',
          active: 'active:bg-amber-100 dark:active:bg-gray-600',
          text: 'text-amber-700 dark:text-amber-300',
          border: 'border-none',
          ring: 'focus:ring-amber-500',
          shadow: 'shadow-amber-500/10',
          glow: 'shadow-md shadow-amber-500/20',
        },
        outline: {
          bg: 'bg-transparent',
          hover: 'hover:bg-amber-50 dark:hover:bg-amber-900/10',
          active: 'active:bg-amber-100 dark:active:bg-amber-900/20',
          text: 'text-amber-600 dark:text-amber-300',
          border: 'border-none',
          ring: 'focus:ring-amber-500',
          shadow: '',
          glow: '',
        },
        ghost: {
          bg: 'bg-transparent',
          hover: 'hover:bg-amber-50/50 dark:hover:bg-amber-900/10',
          active: 'active:bg-amber-100/50 dark:active:bg-amber-900/20',
          text: 'text-amber-600 dark:text-amber-300',
          border: 'border-none',
          ring: 'focus:ring-amber-500',
          shadow: '',
          glow: '',
        },
        text: {
          bg: 'bg-transparent',
          hover: 'hover:underline',
          active: 'active:bg-transparent',
          text: 'text-amber-600 dark:text-amber-300',
          border: 'border-none',
          ring: 'focus:ring-0',
          shadow: '',
          glow: '',
        },
      },
    };

    return colors[theme] || colors.default;
  };

  // Get current theme colors
  const themeColors = getThemeColors(calculatorTheme);
  let variantColors = themeColors[variant] || themeColors.primary;

  // Additional variants for danger, success, etc.
  const specialVariants = {
    danger: {
      bg: 'bg-gradient-to-r from-red-500 to-rose-500',
      hover: 'hover:from-red-600 hover:to-rose-600',
      active: 'active:from-red-700 active:to-rose-700',
      text: 'text-white',
      border: 'border-none',
      ring: 'focus:ring-red-500',
      shadow: 'shadow-red-500/30',
      glow: 'shadow-lg shadow-red-500/40',
    },
    success: {
      bg: 'bg-gradient-to-r from-emerald-500 to-green-500',
      hover: 'hover:from-emerald-600 hover:to-green-600',
      active: 'active:from-emerald-700 active:to-green-700',
      text: 'text-white',
      border: 'border-none',
      ring: 'focus:ring-emerald-500',
      shadow: 'shadow-emerald-500/30',
      glow: 'shadow-lg shadow-emerald-500/40',
    },
  };

  // Handle special variants
  if (variant === 'danger' || variant === 'success') {
    variantColors = specialVariants[variant];
  }

  // State-specific classes
  const stateClasses = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Compose button classes
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
  ${
    !disabled && variant === 'primary'
      ? 'transform-gpu hover:-translate-y-0.5'
      : ''
  }
  ${stateClasses}
  ${widthClasses}
  ${className}
`;

  // Animation variants
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

  // Handle click
  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  // Loading spinner component
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

  return (
    <m.button
      className={buttonClasses}
      style={{
        border: 'none',
        outline: 'none',
        boxShadow: 'none', // Add this to ensure no shadow is acting like a border
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
};

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

export default Button;
