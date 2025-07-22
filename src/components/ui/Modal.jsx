import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import Card from './Card';

/**
 * Enhanced Modal component with stunning visual effects and animations
 *
 * @param {boolean} isOpen - Whether modal is open
 * @param {function} onClose - Function to call when modal is closed
 * @param {string} size - Modal size (sm, md, lg, xl, full)
 * @param {string} calculatorTheme - Calculator type (love, friendship, career, personality, default)
 * @param {string} title - Modal title
 * @param {ReactNode} footer - Modal footer content
 * @param {boolean} closeOnOverlayClick - Whether to close modal when overlay is clicked
 * @param {boolean} closeOnEsc - Whether to close modal when Esc key is pressed
 * @param {string} position - Modal position (center, top, bottom)
 * @param {boolean} preventScroll - Whether to prevent background scrolling
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Modal content
 */
const Modal = ({
  isOpen = false,
  onClose = () => {},
  size = 'md',
  calculatorTheme = 'default',
  title = '',
  footer = null,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  position = 'center',
  preventScroll = true,
  className = '',
  children,
  ...props
}) => {
  const modalRef = useRef(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (preventScroll) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, preventScroll]);


  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (closeOnEsc && e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEsc]);

  // Size classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  // Position classes
  const positionClasses = {
    center: 'items-center justify-center',
    top: 'items-start justify-center pt-20',
    bottom: 'items-end justify-center pb-20',
  };

  // Get the color palette based on calculator theme
  const getThemeColors = (theme) => {
    const colors = {
      default: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-gray-200 dark:border-gray-700',
        shadow: 'shadow-indigo-500/10',
        text: 'text-gray-800 dark:text-gray-100',
        accent: 'from-indigo-500 to-purple-500',
        buttonBg: 'bg-indigo-500 hover:bg-indigo-600',
        buttonText: 'text-white',
        overlay: 'bg-black/60 backdrop-blur-sm',
      },
      love: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-pink-200 dark:border-pink-800/50',
        shadow: 'shadow-pink-500/10',
        text: 'text-gray-800 dark:text-gray-100',
        accent: 'from-pink-500 to-rose-500',
        buttonBg: 'bg-pink-500 hover:bg-pink-600',
        buttonText: 'text-white',
        overlay: 'bg-pink-950/60 backdrop-blur-sm',
      },
      friendship: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-teal-200 dark:border-teal-800/50',
        shadow: 'shadow-teal-500/10',
        text: 'text-gray-800 dark:text-gray-100',
        accent: 'from-teal-500 to-cyan-500',
        buttonBg: 'bg-teal-500 hover:bg-teal-600',
        buttonText: 'text-white',
        overlay: 'bg-teal-950/60 backdrop-blur-sm',
      },
      career: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-purple-200 dark:border-purple-800/50',
        shadow: 'shadow-purple-500/10',
        text: 'text-gray-800 dark:text-gray-100',
        accent: 'from-purple-500 to-violet-500',
        buttonBg: 'bg-purple-500 hover:bg-purple-600',
        buttonText: 'text-white',
        overlay: 'bg-purple-950/60 backdrop-blur-sm',
      },
      personality: {
        bg: 'bg-white dark:bg-gray-800',
        border: 'border-amber-200 dark:border-amber-800/50',
        shadow: 'shadow-amber-500/10',
        text: 'text-gray-800 dark:text-gray-100',
        accent: 'from-amber-500 to-orange-500',
        buttonBg: 'bg-amber-500 hover:bg-amber-600',
        buttonText: 'text-white',
        overlay: 'bg-amber-950/60 backdrop-blur-sm',
      },
    };

    return colors[theme] || colors.default;
  };

  // Get current theme colors
  const themeColors = getThemeColors(calculatorTheme);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (
      closeOnOverlayClick &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      onClose();
    }
  };

  // Enhanced animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
        mass: 1,
        duration: 0.25,
        filter: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95,
      filter: 'blur(8px)',
      transition: { 
        duration: 0.2, 
        ease: [0.22, 1, 0.36, 1],
      },
    },
    // Subtle floating animation for modal
    animate: {
      y: [0, -3, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          className={`fixed inset-0 z-50 flex ${positionClasses[position]} overflow-y-auto`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          onClick={handleOverlayClick}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 ${themeColors.overlay} transition-opacity`}
          ></div>

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className={`relative z-50 w-full ${sizeClasses[size]} px-3 py-6 my-6 ${className}`}
            initial="hidden"
            animate={["visible", "animate"]}
            exit="exit"
            variants={modalVariants}
          >
            <Card
              variant="glass"
              calculatorTheme={calculatorTheme}
              className="overflow-hidden"
              bordered={false}
              shadow={true}
            >
              {/* Header */}
              {title && (
                <div className={`px-4 py-3 border-b ${themeColors.border}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {title}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="px-4 py-3 text-gray-900 dark:text-gray-100">
                {children}
              </div>

              {/* Footer */}
              {footer && (
                <div className={`px-4 py-3 border-t ${themeColors.border}`}>
                  {footer}
                </div>
              )}
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
    'full',
  ]),
  calculatorTheme: PropTypes.oneOf([
    'default',
    'love',
    'friendship',
    'career',
    'personality',
  ]),
  title: PropTypes.node,
  footer: PropTypes.node,
  closeOnOverlayClick: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  position: PropTypes.oneOf(['center', 'top', 'bottom']),
  preventScroll: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
