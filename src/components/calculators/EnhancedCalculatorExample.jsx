import React, { useState } from 'react';
import Button from '../ui';
import Card from '../ui/Card';
import Modal from '../ui/Modal';

const EnhancedCalculatorExample = ({ calculatorType = 'love' }) => {
  // State management
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [resultScore, setResultScore] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // Example questions for demonstration
  const questions = [
    {
      question: "First Meeting Vibes",
      options: [
        { text: "Coffee date at CCD, simple aur sweet ☕", score: 8 },
        { text: "Movie + popcorn, classic combo 🍿", score: 7 },
        { text: "Long walk in park, baat-cheet karte hue 🌳", score: 9 },
        { text: "Mall mein shopping, practical hai na 🛍️", score: 5 }
      ]
    },
    {
      question: "Family Introduction Wala Scene",
      options: [
        { text: "Wait for 2 years minimum, dar lagta hai 😅", score: 4 },
        { text: "Introduce as 'just a friend' forever 🤐", score: 2 },
        { text: "Proudly introduce when ready", score: 8 },
        { text: "Let them figure out themselves, main kya karu 🤷", score: 3 }
      ]
    },
    // More questions could be added here
  ];
  
  // Calculate total questions
  const totalQuestions = questions.length;
  
  // Handle answer selection
  const handleAnswerSelect = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[step] = {
      questionIndex: step,
      optionIndex,
      score: questions[step].options[optionIndex].score
    };
    setAnswers(newAnswers);
    
    // If it's the last question, calculate result
    if (step === totalQuestions - 1) {
      // Calculate result after a short delay for better UX
      setTimeout(() => {
        calculateResult(newAnswers);
      }, 500);
    } else {
      // Move to next question
      setTimeout(() => {
        setStep(step + 1);
      }, 300);
    }
  };
  
  // Calculate result based on answers
  const calculateResult = (answers) => {
    const maxPossibleScore = questions.length * 9; // 9 is the max score per question
    const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
    const percentage = Math.round((totalScore / maxPossibleScore) * 100);
    setResultScore(percentage);
    setShowResults(true);
  };
  
  // Reset calculator
  const resetCalculator = () => {
    setStep(0);
    setAnswers([]);
    setName1('');
    setName2('');
    setShowResults(false);
    setResultScore(null);
  };
  
  // Show intro form
  const renderIntroForm = () => {
    return (
      <Card variant="gradient" animate>
        <Card.Header>
          <Card.Title className="text-2xl text-center">
            {calculatorType === 'love' && "❤️ Love Calculator ❤️"}
            {calculatorType === 'friendship' && "👫 Friendship Calculator 👫"}
            {calculatorType === 'career' && "💼 Career Calculator 💼"}
            {calculatorType === 'personality' && "🧠 Personality Calculator 🧠"}
          </Card.Title>
          <Card.Description className="text-center">
            {calculatorType === 'love' && "Discover your romantic compatibility"}
            {calculatorType === 'friendship' && "Test your friendship strength"}
            {calculatorType === 'career' && "Find your professional potential"}
            {calculatorType === 'personality' && "Reveal your true personality"}
          </Card.Description>
        </Card.Header>
        
        <Card.Body className="space-y-4 mt-6">
          <div>
            <label className="form-label">Your Name</label>
            <input 
              type="text"
              className={`form-input focus:ring-${calculatorType}-500`}
              placeholder="Enter your name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />
          </div>
          
          {calculatorType === 'love' && (
            <div>
              <label className="form-label">Your Partner's Name</label>
              <input 
                type="text"
                className={`form-input focus:ring-${calculatorType}-500`}
                placeholder="Enter your partner's name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
              />
            </div>
          )}
        </Card.Body>
        
        <Card.Footer className="flex justify-center">
          <Button 
            calculatorTheme={calculatorType}
            size="lg"
            onClick={() => setStep(1)}
            disabled={calculatorType === 'love' ? !name1 || !name2 : !name1}
            className="w-full"
          >
            Start Now
          </Button>
        </Card.Footer>
      </Card>
    );
  };
  
  // Show questions
  const renderQuestion = () => {
    const currentQuestion = questions[step];
    const selectedAnswer = answers[step]?.optionIndex;
    
    return (
      <div>
        <Card calculatorTheme={calculatorType}>
          {/* Simple progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
            <div 
              className={`h-2 rounded-full ${calculatorType === 'love' ? 'bg-love-gradient' : 'bg-friendship-gradient'}`}
              style={{ width: `${((step + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-6">
            {currentQuestion.question}
          </h3>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`
                  w-full p-4 rounded-lg text-left text-white
                  transition-all duration-200 border
                  ${selectedAnswer === index 
                    ? `border-${calculatorType}-500 bg-${calculatorType}-500/10` 
                    : 'bg-gray-700 hover:bg-gray-600 border-gray-600'}
                `}
              >
                {option.text}
              </button>
            ))}
          </div>
        </Card>
      </div>
    );
  };
  
  // Get result category based on score
  const getResultCategory = (score) => {
    if (score >= 90) return "Perfect Match! 💯";
    if (score >= 75) return "Great Match! 🔥";
    if (score >= 60) return "Good Potential! ✨";
    if (score >= 45) return "Maybe Friends? 🤔";
    if (score >= 30) return "Not Compatible 🙁";
    return "Run Away! 🏃‍♂️";
  };
  
  // Show results
  const renderResults = () => {
    return (
      <div>
        <Card variant="gradient" calculatorTheme={calculatorType}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Result</h2>
            
            {/* Score display */}
            <div className={`text-6xl font-bold mb-4 bg-gradient-to-r from-${calculatorType}-600 to-${calculatorType === 'love' ? 'rose' : 'cyan'}-500 bg-clip-text text-transparent`}>
              {resultScore}%
            </div>
            
            {/* Result category */}
            <div className="text-xl font-semibold mb-6">
              {getResultCategory(resultScore)}
            </div>
            
            {/* Names */}
            <div className="mb-8">
              <p className="text-gray-300">
                {calculatorType === 'love' 
                  ? `${name1} & ${name2}` 
                  : `${name1}'s result`}
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex space-x-4 justify-center">
              <Button 
                calculatorTheme={calculatorType}
                variant="outline"
                onClick={resetCalculator}
              >
                Try Again
              </Button>
              
              <Button 
                calculatorTheme={calculatorType}
                onClick={() => setShowModal(true)}
              >
                Share Result
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  };
  
  // Render appropriate view based on step
  const renderContent = () => {
    if (showResults) {
      return renderResults();
    } else if (step === 0) {
      return renderIntroForm();
    } else {
      return renderQuestion();
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {renderContent()}
      
      {/* Share Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Share Your Results"
        calculatorTheme={calculatorType}
        size="md"
      >
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Share your {calculatorType} calculator results with friends!
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button calculatorTheme={calculatorType} variant="outline" size="sm">
              <span>Facebook</span>
            </Button>
            <Button calculatorTheme={calculatorType} variant="outline" size="sm">
              <span>Twitter</span>
            </Button>
            <Button calculatorTheme={calculatorType} variant="outline" size="sm">
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EnhancedCalculatorExample;
