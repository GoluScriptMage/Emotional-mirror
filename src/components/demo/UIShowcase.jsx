import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Modal } from '../ui';

/**
 * Showcases all the enhanced UI components with different variants and themes
 */
const UIShowcase = () => {
  const [activeModal, setActiveModal] = useState(null);
  
  // Available calculator themes
  const themes = ['default', 'love', 'friendship', 'career', 'personality'];
  
  // Available button variants
  const buttonVariants = ['primary', 'secondary', 'outline', 'ghost', 'text'];
  
  // Available card variants
  const cardVariants = ['default', 'elevated', 'outlined', 'glass'];
  
  // Available modal sizes
  const modalSizes = ['sm', 'md', 'lg', 'xl', 'full'];

  // Background animation for the showcase
  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  // Animation for each showcase section
  const sectionVariants = {
    initial: {
      y: 20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Open a modal with specific size and theme
  const openModal = (size, theme) => {
    setActiveModal({ size, theme });
  };

  // Close the active modal
  const closeModal = () => {
    setActiveModal(null);
  };

  // Simple icons for demonstration
  const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
  );
  
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg>
  );
  
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  );
  
  const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 8 8a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 8 5z"/>
    </svg>
  );
  
  const BrainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M5.56 3.982a1.5 1.5 0 0 0-2.5-.864c-.771.566-1.061 1.428-1.06 2.382 0 .246.034.5.103.75-.211-.186-.427-.388-.644-.6a1.5 1.5 0 0 0-2.12 2.122C.87 8.368 2.21 9.964 3.65 11.04c1.006.749 2.02 1.358 2.888 1.713.445.183.872.329 1.208.425.337.096.558.147.6.153.165.029.338.044.52.044h.052a1.5 1.5 0 0 0 1.481-1.451c0-.004-.002-.009-.002-.013l.012-.429c.01-.384.107-1.181.107-1.862a1.5 1.5 0 0 0-1.5-1.5h-.878a.5.5 0 0 1-.494-.437l-.063-.267a.5.5 0 0 1 .235-.539l.45-.25a1.5 1.5 0 0 0-.762-2.793l-.35-.1-.354-.1a1.5 1.5 0 0 0-1.978 1.137 1.69 1.69 0 0 0 .015.38 1.79 1.79 0 0 0 .097.371c.05.143.037.219.04.231-.063-.232-.126-.45-.183-.647-.263-.905-.704-1.681-1.295-2.019Z"/>
      <path d="M7.385 5.392A1.5 1.5 0 0 0 5.5 3.5h-.9a.5.5 0 0 1-.5-.5c0-.339.038-.75.116-1.078.29-1.24.786-1.71 1.284-1.853C6.066.017 6.696.067 7.388.38c.726.327 1.22.897 1.595 1.521.292.483.532 1.008.707 1.51.06.173.123.356.192.55a.5.5 0 0 1 .014.357l-.125.391a.5.5 0 0 1-.95.026l-.173.543a1.5 1.5 0 0 0 .378 1.385l.16.158c.43.423.534 1.087.33 1.634-.41.107-.09.207-.15.301h-.052c-.256 0-.531-.025-.812-.076-.583-.105-1.306-.39-2.007-.866-1.21-.902-2.515-2.377-3.725-4.112a1.5 1.5 0 0 0-2.358.12c-.585.938-.756 2.358-.285 3.639.157.429.34.818.535 1.167.485.866 1.143 1.688 1.932 2.289.216.165.439.32.663.461-.04.008-.08.015-.12.023-.261.051-.534.096-.813.134-.496.067-.988.11-1.45.11a1.5 1.5 0 0 0 0 3c.763 0 1.567-.086 2.368-.232.996-.182 1.954-.457 2.7-.81.616-.29 1.086-.673 1.382-1.145a.5.5 0 0 1 .898.67c-.472.756-1.192 1.333-2.009 1.729-.95.466-2.059.78-3.14.977-.85.154-1.739.254-2.597.254a1.5 1.5 0 0 0 0 3c1.002 0 2.071-.124 3.09-.307 1.35-.242 2.647-.63 3.787-1.214 1.9-.973 3.083-2.562 3.113-4.293.034-1.848-1.024-3.213-2.6-4.296a1.5 1.5 0 0 0-.338-2.355l-.282-.141a.5.5 0 0 1-.151-.548l.071-.18Z"/>
      <path d="M6.49 5.862c-.206-1.057-.586-1.94-1.02-2.548-.255-.36-.504-.634-.725-.79-.22-.155-.366-.19-.466-.19-.213 0-.323.072-.43.184-.361.373-.776 1.342-.776 2.942 0 .097-.003.194-.006.29-.146-.057-.304-.124-.467-.2-.595-.28-1.173-.642-1.632-1.028-.46-.385-.756-.739-.887-1.006-.17-.354-.075-.565.077-.683.132-.103.319-.103.475-.038.74.32 1.358.507 1.822.573.471.067.823.019 1.016-.121.207-.15.339-.369.435-.622.05-.139.091-.282.122-.42a1.5 1.5 0 0 0-2.831-.994c-.05.119-.086.243-.109.368-.435-.17-1.023-.347-1.719-.641-1.03-.437-2.25-.93-1.715-2.451C-1.026-.177.28.044 1.501.37c.908.245 1.756.39 2.449.39.694 0 1.219-.146 1.551-.425.235-.198.358-.467.358-.806a1.5 1.5 0 0 0-3 0v.033a4.77 4.77 0 0 1-1.75-.278A78.405 78.405 0 0 0 6.51 5.862Z"/>
    </svg>
  );

  // Get icon based on theme
  const getThemeIcon = (theme) => {
    switch(theme) {
      case 'love': return <HeartIcon />;
      case 'friendship': return <CheckIcon />;
      case 'career': return <RocketIcon />;
      case 'personality': return <BrainIcon />;
      default: return <StarIcon />;
    }
  };

  return (
    <motion.div 
      className="p-8 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        UI Components Showcase
      </h1>
      
      {/* Buttons Showcase */}
      <motion.section 
        className="mb-16" 
        variants={sectionVariants}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Button Component</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {themes.map(theme => (
            <div key={theme} className="space-y-4">
              <h3 className="text-lg font-medium capitalize text-center">{theme} Theme</h3>
              
              <div className="space-y-4 flex flex-col items-center">
                {buttonVariants.map(variant => (
                  <Button 
                    key={`${theme}-${variant}`}
                    variant={variant}
                    calculatorTheme={theme}
                    onClick={() => console.log(`Clicked ${variant} button with ${theme} theme`)}
                  >
                    {variant} Button
                  </Button>
                ))}
                
                {/* Buttons with Icons */}
                <div className="w-full pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-medium mb-3 text-center">With Icons</h4>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <Button
                      variant="primary"
                      calculatorTheme={theme}
                      size="sm"
                      leftIcon={getThemeIcon(theme)}
                    >
                      Left Icon
                    </Button>
                    <Button
                      variant="primary"
                      calculatorTheme={theme}
                      size="sm"
                      rightIcon={getThemeIcon(theme)}
                    >
                      Right Icon
                    </Button>
                    <Button
                      variant="primary"
                      calculatorTheme={theme}
                      size="sm"
                      iconOnly
                    >
                      {getThemeIcon(theme)}
                    </Button>
                  </div>
                </div>
                
                {/* Animated Border Demo */}
                <div className="w-full pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-medium mb-3 text-center">Hover for Animated Border</h4>
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      calculatorTheme={theme}
                    >
                      Hover Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
      
      {/* Cards Showcase */}
      <motion.section 
        className="mb-16" 
        variants={sectionVariants}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Card Component</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardVariants.map((variant, index) => (
            <Card
              key={variant}
              variant={variant}
              calculatorTheme={themes[index % themes.length]}
              className="p-6 h-64"
            >
              <h3 className="text-xl font-semibold mb-3 capitalize">{variant} Card</h3>
              <p className="mb-4 text-sm opacity-80">
                This is a {variant} card with the {themes[index % themes.length]} theme. 
                Cards feature floating animations and interactive decorative elements.
              </p>
              <Button
                variant="primary"
                size="sm"
                calculatorTheme={themes[index % themes.length]}
              >
                Card Action
              </Button>
            </Card>
          ))}
        </div>
      </motion.section>
      
      {/* Modals Showcase */}
      <motion.section 
        className="mb-16" 
        variants={sectionVariants}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Modal Component</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {modalSizes.map((size, index) => (
            <div key={size} className="flex flex-col items-center">
              <Button
                variant="primary"
                calculatorTheme={themes[index % themes.length]}
                onClick={() => openModal(size, themes[index % themes.length])}
              >
                Open {size.toUpperCase()} Modal
              </Button>
            </div>
          ))}
        </div>
      </motion.section>
      
      {/* Mobile Optimizations Showcase */}
      <motion.section 
        className="mb-16" 
        variants={sectionVariants}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Mobile-Optimized Interactions</h2>
        
        <div className="bg-gray-800 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-medium mb-4">Enhanced for Touch Devices</h3>
          <p className="mb-4 text-gray-300">
            All buttons feature improved mobile interactions with haptic feedback,
            optimized animations, and accessibility enhancements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {themes.slice(0, 4).map(theme => (
              <Button 
                key={`mobile-${theme}`}
                variant="primary" 
                calculatorTheme={theme}
                leftIcon={getThemeIcon(theme)}
              >
                Tap Me
              </Button>
            ))}
          </div>
          
          <div className="text-sm text-gray-400 mt-2">
            <p>✓ Haptic feedback (vibration) on supported devices</p>
            <p>✓ Optimized spring physics for touch interactions</p>
            <p>✓ Respects reduced motion preferences</p>
            <p>✓ Enhanced icon animations</p>
          </div>
        </div>
      </motion.section>
      
      {/* Active Modal */}
      {activeModal && (
        <Modal
          size={activeModal.size}
          calculatorTheme={activeModal.theme}
          onClose={closeModal}
          title={`${activeModal.size.toUpperCase()} Modal - ${activeModal.theme} Theme`}
        >
          <div className="p-4">
            <p className="mb-6">
              This is a {activeModal.size} modal with the {activeModal.theme} calculator theme. 
              Modals feature smooth animations, backdrop blur effects, and subtle floating animations.
            </p>
            
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                calculatorTheme={activeModal.theme}
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                calculatorTheme={activeModal.theme}
                onClick={closeModal}
                leftIcon={getThemeIcon(activeModal.theme)}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </motion.div>
  );
};

export default UIShowcase;

