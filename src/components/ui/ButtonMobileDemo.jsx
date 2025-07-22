import React from 'react';
import { Button } from './index';

/**
 * Demo component to showcase the mobile-optimized button animations
 * This can be used for testing and demonstration purposes
 */
const ButtonMobileDemo = () => {
  // Available calculator themes
  const themes = ['love', 'friendship', 'career', 'personality', 'default'];

  return (
    <div className="p-4 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white mb-2">Mobile-Optimized Button Animations</h1>
      <p className="text-gray-300 mb-4">
        Enhanced for touch devices with haptic feedback, responsive animations, and accessibility features
      </p>
      
      {/* Primary buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <h3 className="w-full text-lg font-semibold text-white mb-2">Primary Buttons</h3>
        {themes.map(theme => (
          <Button 
            key={theme} 
            variant="primary" 
            calculatorTheme={theme}
            onClick={() => {
              // Demo haptic feedback when supported
              if (navigator.vibrate) {
                navigator.vibrate(15);
              }
            }}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Button>
        ))}
      </div>

      {/* Secondary buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <h3 className="w-full text-lg font-semibold text-white mb-2">Secondary Buttons</h3>
        {themes.map(theme => (
          <Button 
            key={theme} 
            variant="secondary" 
            calculatorTheme={theme}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Button>
        ))}
      </div>

      {/* Icon examples */}
      <div className="flex flex-wrap gap-4 mb-6">
        <h3 className="w-full text-lg font-semibold text-white mb-2">With Icons</h3>
        {themes.slice(0, 3).map(theme => (
          <Button 
            key={`icon-${theme}`}
            variant="primary" 
            calculatorTheme={theme}
            leftIcon={<span className="text-lg">⭐</span>}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Button>
        ))}
        
        <Button 
          variant="secondary"
          calculatorTheme="friendship"
          rightIcon={<span className="text-lg">→</span>}
        >
          Next Step
        </Button>
        
        <Button 
          variant="primary"
          calculatorTheme="career"
          iconOnly
        >
          <span className="text-lg">✓</span>
        </Button>
      </div>

      {/* Size variations */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <h3 className="w-full text-lg font-semibold text-white mb-2">Size Variations</h3>
        <Button size="xs" variant="primary" calculatorTheme="love">X-Small</Button>
        <Button size="sm" variant="primary" calculatorTheme="friendship">Small</Button>
        <Button size="md" variant="primary" calculatorTheme="career">Medium</Button>
        <Button size="lg" variant="primary" calculatorTheme="personality">Large</Button>
        <Button size="xl" variant="primary" calculatorTheme="default">X-Large</Button>
      </div>

      {/* Accessibility section */}
      <div className="p-4 bg-gray-800 rounded-lg mb-6">
        <h3 className="font-semibold text-white">Accessibility Features:</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2">
          <li>Respects user's reduced motion preferences</li>
          <li>Keyboard focus styles match hover styles for consistency</li>
          <li>Alternative feedback methods when animations are disabled</li>
          <li>Haptic feedback on supported devices provides additional sensory confirmation</li>
          <li>High contrast between button and text colors</li>
        </ul>
      </div>

      {/* Mobile optimization note */}
      <div className="p-4 bg-gray-800 rounded-lg">
        <h3 className="font-semibold text-white">Mobile Optimizations:</h3>
        <ul className="list-disc pl-5 text-gray-300 mt-2">
          <li>Enhanced tap animations for better mobile feedback</li>
          <li>Disabled tap highlight color for cleaner look</li>
          <li>Improved touch response with touch-action manipulation</li>
          <li>Icon animations optimized for touch interactions</li>
          <li>Animated CSS fallbacks for devices without JavaScript</li>
          <li>Subtle tactile feedback through haptic vibration (15ms)</li>
          <li>Enhanced spring physics for more responsive feel on touch</li>
          <li>Optimized animation timings for mobile interactions</li>
        </ul>
      </div>
      
      <div className="text-center text-sm text-gray-400 mt-4">
        <p>Tap on buttons to experience the enhanced mobile interactions</p>
        <p className="mt-2">Some features like haptic feedback require device support</p>
      </div>
    </div>
  );
};

export default ButtonMobileDemo;
