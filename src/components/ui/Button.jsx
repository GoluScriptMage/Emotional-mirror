import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
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
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  // Get the color palette based on calculator theme
  const getThemeColors = (theme) => {
    const colors = {
      default: {
        primary: {
          bg: 'bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600',
          hover: 'hover:from-indigo-700 hover:via-blue-600 hover:to-indigo-700',
          active: 'active:from-indigo-800 active:via-blue-700 active:to-indigo-800',
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
          bg: 'bg-gradient-to-r from-pink-500 via-rose-400 to-rose-500',
          hover: 'hover:from-pink-600 hover:via-rose-500 hover:to-rose-600',
          active: 'active:from-pink-700 active:via-rose-600 active:to-rose-700',
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
          bg: 'bg-gradient-to-r from-teal-500 via-cyan-400 to-cyan-500',
          hover: 'hover:from-teal-600 hover:via-cyan-500 hover:to-cyan-600',
          active: 'active:from-teal-700 active:via-cyan-600 active:to-cyan-700',
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
          bg: 'bg-gradient-to-r from-purple-500 via-violet-400 to-violet-500',
          hover: 'hover:from-purple-600 hover:via-violet-500 hover:to-violet-600',
          active: 'active:from-purple-700 active:via-violet-600 active:to-violet-700',
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
          bg: 'bg-gradient-to-r from-amber-500 via-orange-400 to-orange-500',
          hover: 'hover:from-amber-600 hover:via-orange-500 hover:to-orange-600',
          active: 'active:from-amber-700 active:via-orange-600 active:to-orange-700',
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

  let variantColors;

  // Handle special variants
  if (variant === 'danger' || variant === 'success') {
    variantColors = specialVariants[variant];
  } else {
    // Get current theme colors
    const themeColors = getThemeColors(calculatorTheme);
    variantColors = themeColors[variant] || themeColors.primary;
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
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
  active:scale-[0.97] active:translate-y-[1px] active:shadow-none
  touch-manipulation tap-highlight-transparent
  ${iconOnly ? 'aspect-square' : ''}
  ${sizeClasses[size]}
  ${variantColors.bg}
  ${variantColors.text}
  ${variant === 'outline' ? variantColors.border : 'border-none'}
  ${variantColors.ring}
  ${!disabled ? variantColors.hover : ''}
  ${!disabled ? variantColors.active : ''}
  ${!disabled && (variant === 'primary' || variant === 'secondary') ? variantColors.shadow : ''}
  ${
    !disabled && variant === 'primary'
      ? 'transform-gpu hover:-translate-y-1'
      : variant === 'secondary' 
        ? 'transform-gpu hover:-translate-y-0.5'
        : ''
  }
  ${stateClasses}
  ${widthClasses}
  ${className}
`;

  // Enhanced animation variants with responsive animations that work well on both desktop and mobile
  const buttonAnimation = {
    initial: {
      scale: 1,
      y: 0,
      backgroundPosition: '0% 50%',
      boxShadow: variant === 'primary' ? variantColors.shadow : '',
    },
    hover: !disabled && !prefersReducedMotion
      ? {
          scale: variant === 'primary' || variant === 'secondary' ? 1.05 : 1.02,
          y: variant === 'primary' ? -3 : variant === 'secondary' ? -2 : 0,
          boxShadow: variant === 'primary' ? variantColors.glow : '',
          backgroundPosition: '100% 50%',
          transition: {
            y: { type: 'spring', stiffness: 400, damping: 20 },
            scale: { type: 'spring', stiffness: 400, damping: 20 },
            backgroundPosition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }
        }
      : {},
    tap: !disabled && !prefersReducedMotion
      ? {
          scale: iconOnly ? 0.9 : 0.97, // More pronounced scale effect for icon-only buttons
          y: 1, // Slight downward movement for tactile feedback
          backgroundPosition: '50% 50%',
          boxShadow: 'none', // Remove shadow on tap for better pressed effect
          transition: {
            type: 'spring',
            stiffness: 300, // Higher stiffness for quicker response
            damping: 10, // Lower damping for more responsive bounce
            velocity: 10, // Higher velocity for more responsive feel on mobile
            restDelta: 0.001, // Small rest delta for smoother animation completion
            restSpeed: 0.001, // Small rest speed for smoother animation completion
            duration: 0.15 // Shorter duration for mobile taps
          }
        }
      : {},
    // Pulse animation for primary buttons to draw attention
    animate: variant === 'primary' && !disabled && !prefersReducedMotion
      ? {
          scale: [1, 1.02, 1],
          boxShadow: [
            variantColors.shadow,
            variantColors.glow, 
            variantColors.shadow
          ],
          transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 4
          }
        }
      : {}
  };


  // Handle click with haptic feedback
  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      // Add haptic feedback for mobile devices if supported
      if (navigator.vibrate && window.matchMedia('(max-width: 768px)').matches) {
        // Use a short, subtle vibration for button presses (15ms)
        navigator.vibrate(15);
      }
      
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

  // Get pulse color based on calculator theme
  const getPulseColor = (theme) => {
    switch(theme) {
      case 'love': return '236, 72, 153'; // Pink
      case 'friendship': return '20, 184, 166'; // Teal
      case 'career': return '147, 51, 234'; // Purple
      case 'personality': return '245, 158, 11'; // Amber
      default: return '79, 70, 229'; // Indigo
    }
  };

  // Create advanced animation effects for buttons

  // Create advanced animation effects for buttons
  const buttonEffects = !disabled ? {
    position: 'relative',
    isolation: 'isolate',
    // Reflection sweep effect for all variant types
    '&::before': variant === 'primary' || variant === 'secondary' ? {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
      transform: 'translateX(-100%) skewX(-15deg)',
      zIndex: 1,
      transition: 'transform 0.6s ease',
    } : {},
    '&:hover::before': variant === 'primary' || variant === 'secondary' ? {
      transform: 'translateX(100%) skewX(-15deg)',
    } : {},
    // Animated border effect for primary buttons - Enhanced for better visibility
    '&::after': variant === 'primary' ? {
      content: '""',
      position: 'absolute',
      inset: '-4px', // Slightly larger distance for more visibility
      background: `linear-gradient(45deg, 
        ${calculatorTheme === 'love' ? 'rgba(244, 114, 182, 0.7)' : 
          calculatorTheme === 'friendship' ? 'rgba(20, 184, 166, 0.7)' :
          calculatorTheme === 'career' ? 'rgba(139, 92, 246, 0.7)' :
          calculatorTheme === 'personality' ? 'rgba(251, 191, 36, 0.7)' :
          'rgba(99, 102, 241, 0.7)'},
        transparent,
        ${calculatorTheme === 'love' ? 'rgba(236, 72, 153, 0.7)' : 
          calculatorTheme === 'friendship' ? 'rgba(6, 148, 162, 0.7)' :
          calculatorTheme === 'career' ? 'rgba(124, 58, 237, 0.7)' :
          calculatorTheme === 'personality' ? 'rgba(245, 158, 11, 0.7)' :
          'rgba(79, 70, 229, 0.7)'}
      )`,
      backgroundSize: '300% 300%',
      filter: 'blur(8px) opacity(0)',
      borderRadius: 'inherit',
      zIndex: -1,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: 'none',
    } : {},
    '&:hover::after': variant === 'primary' ? {
      filter: 'blur(8px) opacity(0.9)',
      transform: 'scale(1.07)',
      animation: 'borderGradientSpin 4s linear infinite',
    } : {},
    '@keyframes borderGradientSpin': variant === 'primary' ? {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' }
    } : {},
    // Special pulse animation for primary buttons
    animation: variant === 'primary' ? 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
    '@keyframes pulse': variant === 'primary' ? {
      '0%, 100%': {
        boxShadow: `0 0 0 0 rgba(${getPulseColor(calculatorTheme)}, 0.4)`
      },
      '50%': {
        boxShadow: `0 0 0 8px rgba(${getPulseColor(calculatorTheme)}, 0)`
      }
    } : {},
  } : {};

  return (
    <m.button
      className={buttonClasses}
      style={{
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        backgroundSize: '200% auto',
        transition: 'background-position 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        ...buttonEffects
      }}
      onClick={handleClick}
      disabled={disabled || loading}
      initial="initial"
      animate={variant === 'primary' && !prefersReducedMotion ? "animate" : "initial"}
      whileHover={prefersReducedMotion ? "initial" : "hover"}
      whileTap={prefersReducedMotion ? "initial" : "tap"}
      whileFocus="hover" // Apply hover styles on focus for better keyboard accessibility
      variants={buttonAnimation}
      transition={{
        type: 'spring',
        stiffness: variant === 'primary' ? 700 : 600, // Increased stiffness for more responsive feel
        damping: variant === 'primary' ? 15 : 20,
        velocity: 10, // Added velocity for better mobile responsiveness
        duration: 0.2,
      }}
      css={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        touchAction: 'manipulation',
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
            <m.span 
              className={`${children ? 'mr-2' : ''} inline-flex items-center`}
              animate={variant === 'primary' && !prefersReducedMotion ? { x: [0, -2, 0] } : undefined}
              transition={{
                repeat: variant === 'primary' && !prefersReducedMotion ? Infinity : 0,
                repeatType: "reverse",
                duration: 1.5,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            >
              {leftIcon}
            </m.span>
          )}
          {children && <span>{children}</span>}
          {rightIcon && (
            <m.span 
              className={`${children ? 'ml-2' : ''} inline-flex items-center`}
              animate={variant === 'primary' && !prefersReducedMotion ? { x: [0, 2, 0] } : undefined}
              transition={{
                repeat: variant === 'primary' && !prefersReducedMotion ? Infinity : 0,
                repeatType: "reverse",
                duration: 1.5,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            >
              {rightIcon}
            </m.span>
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
