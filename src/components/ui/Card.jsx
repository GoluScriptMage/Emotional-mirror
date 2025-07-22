import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Enhanced Card component with stunning visual effects, animations, and theme support
 * 
 * @param {string} variant - Card style variant (default, elevated, outlined, glass)
 * @param {string} calculatorTheme - Calculator type (love, friendship, career, personality, default)
 * @param {string} size - Card size (sm, md, lg, xl)
 * @param {boolean} hoverable - Whether card has hover effects
 * @param {boolean} bordered - Whether card has border
 * @param {boolean} shadow - Whether card has shadow
 * @param {boolean} fullWidth - Whether card takes full width
 * @param {ReactNode} decorationElement - Decoration element to show on the card
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Card content
 * @param {function} onClick - Click handler
 */
const Card = ({
  variant = 'default',
  calculatorTheme = 'default',
  size = 'md',
  hoverable = false,
  bordered = false,
  shadow = true,
  fullWidth = false,
  decorationElement = null,
  className = '',
  children,
  onClick,
  ...props
}) => {
  // Padding classes for different card sizes
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8'
  };

  // Get the color palette based on calculator theme
  const getThemeColors = (theme) => {
    const colors = {
      default: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-gray-200 dark:border-gray-700',
        ring: 'ring-indigo-500/50',
        text: 'text-gray-900 dark:text-gray-100', // Updated text color for light theme
        accent: 'from-indigo-500 to-purple-500',
        shadow: 'shadow-indigo-500/10',
        decoration: 'bg-indigo-500'
      },
      love: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-pink-200 dark:border-pink-800/50',
        ring: 'ring-pink-500/50',
        text: 'text-gray-900 dark:text-gray-100', // Updated text color for light theme
        accent: 'from-pink-500 to-rose-500',
        shadow: 'shadow-pink-500/10',
        decoration: 'bg-pink-500'
      },
      friendship: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-teal-200 dark:border-teal-800/50',
        ring: 'ring-teal-500/50',
        text: 'text-gray-900 dark:text-gray-100', // Updated text color for light theme
        accent: 'from-teal-500 to-cyan-500',
        shadow: 'shadow-teal-500/10',
        decoration: 'bg-teal-500'
      },
      career: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-purple-200 dark:border-purple-800/50',
        ring: 'ring-purple-500/50',
        text: 'text-gray-900 dark:text-gray-100', // Updated text color for light theme
        accent: 'from-purple-500 to-violet-500',
        shadow: 'shadow-purple-500/10',
        decoration: 'bg-purple-500'
      },
      personality: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-amber-200 dark:border-amber-800/50',
        ring: 'ring-amber-500/50',
        text: 'text-gray-900 dark:text-gray-100', // Updated text color for light theme
        accent: 'from-amber-500 to-orange-500',
        shadow: 'shadow-amber-500/10',
        decoration: 'bg-amber-500'
      }
    };

    return colors[theme] || colors.default;
  };

  // Get current theme colors
  const themeColors = getThemeColors(calculatorTheme);
  
  // Variant-specific styling
  const getVariantClasses = (variant, colors) => {
    const variants = {
      default: {
        bg: colors.bg,
        border: bordered ? `border ${colors.border}` : 'border border-transparent',
        shadow: shadow ? `shadow-md ${colors.shadow}` : '',
        hoverEffects: hoverable 
          ? `hover:shadow-lg ${colors.shadow} transition-shadow duration-300` 
          : '',
        other: ''
      },
      elevated: {
        bg: colors.bg,
        border: 'border border-transparent',
        shadow: `shadow-lg ${colors.shadow}`,
        hoverEffects: hoverable 
          ? `hover:shadow-xl ${colors.shadow} transition-all duration-300 hover:-translate-y-1` 
          : '',
        other: ''
      },
      outlined: {
        bg: 'bg-gray-800 dark:bg-gray-900',
        border: `border-2 ${colors.border}`,
        shadow: '',
        hoverEffects: hoverable 
          ? `hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300` 
          : '',
        other: 'text-white'
      },
      glass: {
        bg: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg backdrop-saturate-150',
        border: bordered ? `border ${colors.border}` : 'border border-transparent',
        shadow: shadow ? `shadow-xl ${colors.shadow}` : '',
        hoverEffects: hoverable 
          ? `hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:shadow-2xl ${colors.shadow}` 
          : '',
        other: 'backdrop-filter'
      }
    };

    return variants[variant] || variants.default;
  };

  const variantClasses = getVariantClasses(variant, themeColors);

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Compose card classes
  const cardClasses = `
    relative overflow-hidden
    rounded-xl
    ${sizeClasses[size]}
    ${variantClasses.bg}
    ${variantClasses.border}
    ${variantClasses.shadow}
    ${variantClasses.hoverEffects}
    ${variantClasses.other}
    ${widthClasses}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
    no-scrollbar
  `;

  // Enhanced animation variants
  const cardAnimation = {
    hover: hoverable ? { 
      y: variant === 'elevated' ? -4 : 0,
      scale: 1.01,
      boxShadow: variant === 'glass' || variant === 'elevated' ? `0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px ${themeColors.shadow.replace('shadow-', '')}` : '',
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 15,
        boxShadow: { duration: 0.3, ease: 'easeOut' }
      }
    } : {},
    tap: onClick ? { 
      scale: 0.98,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 15 
      }
    } : {},
    initial: {
      scale: 1,
      y: 0
    },
    // Subtle floating animation for glass and elevated variants
    animate: (variant === 'glass' || variant === 'elevated') && hoverable ? {
      y: [0, -3, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          ease: "easeInOut"
        }
      }
    } : {}
  };

  // Handle click
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  // Enhanced decorative elements
  const renderDecorationElement = () => {
    if (decorationElement) {
      return decorationElement;
    }

    if (variant === 'elevated' || variant === 'glass') {
      return (
        <motion.div 
          className="absolute right-0 top-0 overflow-hidden" 
          initial={{ opacity: 0.2 }} 
          animate={hoverable ? { opacity: [0.2, 0.3, 0.2] } : { opacity: 0.2 }}
          transition={{
            opacity: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut"
            }
          }}
        >
          <motion.div 
            className={`w-24 h-24 transform rotate-45 translate-x-8 -translate-y-8 bg-gradient-to-r ${themeColors.accent}`}
            animate={hoverable ? { rotate: [45, 50, 45], scale: [1, 1.05, 1] } : {}}
            transition={{
              rotate: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
                ease: "easeInOut"
              },
              scale: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      );
    }

    return null;
  };

  return (
    <motion.div
      className={cardClasses}
      onClick={handleClick}
      initial="initial"
      animate={(variant === 'glass' || variant === 'elevated') && hoverable ? "animate" : "initial"}
      whileHover="hover"
      whileTap="tap"
      variants={cardAnimation}
      {...props}
    >
      {renderDecorationElement()}
      <div className={`relative z-10 ${variant === 'outlined' ? 'text-white' : themeColors.text}`}>
        {children}
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined', 'glass']),
  calculatorTheme: PropTypes.oneOf(['default', 'love', 'friendship', 'career', 'personality']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  hoverable: PropTypes.bool,
  bordered: PropTypes.bool,
  shadow: PropTypes.bool,
  fullWidth: PropTypes.bool,
  decorationElement: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Card;
