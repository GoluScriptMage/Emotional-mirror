import React from 'react';
import EnhancedCalculatorExample from './components/ui/EnhancedCalculatorExample';
import Button from './components/ui/Button_NEW';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="flex justify-center gap-4 mb-6 animate-float">
        <Button
          variant="primary"
          calculatorTheme="love"
          size="md"
          className="transition-transform transform hover:scale-105"
          onClick={() => alert('Love Calculator Button Clicked')}
        >
          Love Calculator
        </Button>
        <Button
          variant="primary"
          calculatorTheme="friendship"
          size="md"
          className="transition-transform transform hover:scale-105"
          onClick={() => alert('Friendship Calculator Button Clicked')}
        >
          Friendship Calculator
        </Button>
      </div>
      <EnhancedCalculatorExample />
    </div>
  );
};

export default App;
