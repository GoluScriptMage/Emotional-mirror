import React, { useState } from 'react';
import Button from '../ui/Button_NEW';
import Card from '../ui/Card_NEW';
import Modal from '../ui/Modal_NEW';

/**
 * Example component showcasing the enhanced UI components with calculator theming
 */
const EnhancedCalculatorExample = () => {
  const [activeTheme, setActiveTheme] = useState('love');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showButtonModal, setShowButtonModal] = useState(false);

  // Themes available in the calculator app
  const themes = [
    { id: 'love', name: 'Love Calculator' },
    { id: 'friendship', name: 'Friendship Calculator' },
    { id: 'career', name: 'Career Compatibility' },
    { id: 'personality', name: 'Personality Analysis' }
  ];

  // Example content for the cards
  const cardContent = [
    {
      id: 1,
      title: 'Love Compatibility',
      description: 'Discover if you and your crush are meant to be together based on compatibility score.',
      buttonText: 'Start Love Test',
      theme: 'love'
    },
    {
      id: 2,
      title: 'Friend Compatibility',
      description: 'Find out how compatible you are with your friends and strengthen your friendships.',
      buttonText: 'Test Friendship',
      theme: 'friendship'
    },
    {
      id: 3,
      title: 'Career Path Analysis',
      description: 'Discover which career paths align best with your personality and skills.',
      buttonText: 'Analyze Career',
      theme: 'career'
    },
    {
      id: 4,
      title: 'Personality Test',
      description: 'Learn more about yourself with our comprehensive personality analysis.',
      buttonText: 'Discover Yourself',
      theme: 'personality'
    }
  ];

  // Handle theme change
  const handleThemeChange = (themeId) => {
    setActiveTheme(themeId);
  };

  // Handle card click
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Enhanced Calculator Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore different types of calculators with beautiful, interactive interfaces
          </p>
          
          {/* Theme Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {themes.map(theme => (
              <Button
                key={theme.id}
                variant={activeTheme === theme.id ? 'primary' : 'ghost'}
                calculatorTheme={theme.id}
                size="md"
                onClick={() => handleThemeChange(theme.id)}
              >
                {theme.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Button Showcase Section */}
        <div className="mb-12 p-6 bg-gray-800 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Button Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Love Theme</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button variant="primary" calculatorTheme="love" size="lg">Primary</Button>
                <Button variant="secondary" calculatorTheme="love" size="lg">Secondary</Button>
                <Button variant="outline" calculatorTheme="love" size="lg">Outline</Button>
                <Button variant="ghost" calculatorTheme="love" size="lg">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" calculatorTheme="love" size="sm">Small</Button>
                <Button variant="primary" calculatorTheme="love" size="md">Medium</Button>
                <Button variant="primary" calculatorTheme="love" size="lg">Large</Button>
                <Button variant="primary" calculatorTheme="love" size="xl">Extra Large</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Friendship Theme</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button variant="primary" calculatorTheme="friendship" size="lg">Primary</Button>
                <Button variant="secondary" calculatorTheme="friendship" size="lg">Secondary</Button>
                <Button variant="outline" calculatorTheme="friendship" size="lg">Outline</Button>
                <Button variant="ghost" calculatorTheme="friendship" size="lg">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" calculatorTheme="friendship" leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }>With Icon</Button>
                <Button variant="primary" calculatorTheme="friendship" loading={true}>Loading</Button>
                <Button variant="primary" calculatorTheme="friendship" disabled={true}>Disabled</Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Career Theme</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button variant="primary" calculatorTheme="career" size="lg">Primary</Button>
                <Button variant="secondary" calculatorTheme="career" size="lg">Secondary</Button>
                <Button variant="outline" calculatorTheme="career" size="lg">Outline</Button>
                <Button variant="ghost" calculatorTheme="career" size="lg">Ghost</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Personality Theme</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <Button variant="primary" calculatorTheme="personality" size="lg">Primary</Button>
                <Button variant="secondary" calculatorTheme="personality" size="lg">Secondary</Button>
                <Button variant="outline" calculatorTheme="personality" size="lg">Outline</Button>
                <Button variant="ghost" calculatorTheme="personality" size="lg">Ghost</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button
              variant="primary"
              calculatorTheme={activeTheme}
              size="lg"
              fullWidth
            >
              Explore All Calculators
            </Button>
          </div>
        </div>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardContent.map(card => (
            <Card
              key={card.id}
              variant={card.theme === activeTheme ? "elevated" : "default"}
              calculatorTheme={card.theme}
              hoverable
              shadow
              onClick={() => handleCardClick(card)}
              className="h-full"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{card.description}</p>
                <Button
                  variant="primary"
                  calculatorTheme={card.theme}
                  size="md"
                  fullWidth
                >
                  {card.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Calculator Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card variant="glass" calculatorTheme={activeTheme} className="text-center">
              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Results</h3>
                <p className="text-gray-600 dark:text-gray-300">Get instant compatibility scores with our advanced algorithms.</p>
              </div>
            </Card>
            
            {/* Feature 2 */}
            <Card variant="glass" calculatorTheme={activeTheme} className="text-center">
              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
                <p className="text-gray-600 dark:text-gray-300">Your data is never stored or shared with third parties.</p>
              </div>
            </Card>
            
            {/* Feature 3 */}
            <Card variant="glass" calculatorTheme={activeTheme} className="text-center">
              <div className="p-4">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
                <p className="text-gray-600 dark:text-gray-300">Get comprehensive analysis with actionable insights.</p>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card
            variant="elevated"
            calculatorTheme={activeTheme}
            className="max-w-3xl mx-auto"
          >
            <div className="py-8 px-4">
              <h2 className="text-2xl font-bold mb-4">Ready to discover more?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try our advanced calculators and get personalized insights today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  calculatorTheme={activeTheme}
                  size="lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  calculatorTheme={activeTheme}
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Interactive Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-10">
        <button 
          onClick={() => setShowButtonModal(true)}
          className={`p-4 rounded-full bg-gradient-to-r ${
            activeTheme === 'love' ? 'from-pink-600 to-rose-500' :
            activeTheme === 'friendship' ? 'from-teal-600 to-cyan-500' :
            activeTheme === 'career' ? 'from-purple-600 to-violet-500' :
            'from-orange-500 to-amber-500'
          } text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {/* Button Modal */}
      <Modal
        isOpen={showButtonModal}
        onClose={() => setShowButtonModal(false)}
        calculatorTheme={activeTheme}
        title="Button Customization"
        size="md"
        footer={
          <div className="flex justify-end gap-3">
            <Button
              variant="ghost"
              calculatorTheme={activeTheme}
              onClick={() => setShowButtonModal(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              calculatorTheme={activeTheme}
            >
              Apply Changes
            </Button>
          </div>
        }
      >
        <div className="py-2">
          <p className="mb-4">Choose a theme and style for your buttons:</p>
          
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Select Theme</label>
              <div className="flex gap-2">
                {themes.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => setActiveTheme(theme.id)}
                    className={`w-8 h-8 rounded-full ${
                      theme.id === 'love' ? 'bg-pink-500' :
                      theme.id === 'friendship' ? 'bg-teal-500' :
                      theme.id === 'career' ? 'bg-purple-500' :
                      'bg-amber-500'
                    } ${activeTheme === theme.id ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''}`}
                  ></button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium">Preview</label>
              <div className="flex gap-2">
                <Button variant="primary" calculatorTheme={activeTheme} size="md">Primary</Button>
                <Button variant="secondary" calculatorTheme={activeTheme} size="md">Secondary</Button>
                <Button variant="outline" calculatorTheme={activeTheme} size="md">Outline</Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Detail Modal */}
      {selectedCard && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          calculatorTheme={selectedCard.theme}
          title={selectedCard.title}
          size="lg"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="ghost"
                calculatorTheme={selectedCard.theme}
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                calculatorTheme={selectedCard.theme}
              >
                Start Calculator
              </Button>
            </div>
          }
        >
          <div className="py-4">
            <p className="text-lg mb-6">{selectedCard.description}</p>
            
            <h4 className="font-semibold mb-3">How it works:</h4>
            <ol className="list-decimal pl-5 mb-6 space-y-2">
              <li>Enter the required information for calculation</li>
              <li>Our algorithm processes your data in real-time</li>
              <li>Review your comprehensive results and insights</li>
              <li>Share your results or save them for later</li>
            </ol>
            
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EnhancedCalculatorExample;
