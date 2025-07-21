# React Calculator Hub - Project Structure Guide

## 📁 Updated Project Structure

```plaintext
calculator-hub/
├── docs/                           # Documentation
│   ├── project-guides/             # Implementation guides
│   │   ├── CALCULATOR_PROJECTS_DETAILED.md
│   │   ├── PROJECT_FILES_GUIDE.md
│   │   └── STEP_BY_STEP_IMPLEMENTATION_GUIDE.md
│   ├── styling-guides/             # Style documentation
│   │   ├── COLOR_SYSTEM_GUIDE.md
│   │   ├── GLOBAL_STYLING_GUIDE.md
│   │   ├── TAILWIND_IMPLEMENTATION_GUIDE.md
│   │   └── VISUAL_DESIGN_GUIDE.md
│   └── COPILOT_STYLING_PROMPTS.md
│
├── public/                         # Static assets
│   ├── index.html
│   └── favicon.ico
│
├── src/                            # Source code
│   ├── components/                 # React components
│   │   ├── layout/                 # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── calculators/            # Calculator components
│   │   │   ├── LoveCalculator.jsx
│   │   │   ├── FriendshipCalculator.jsx
│   │   │   ├── CareerCalculator.jsx
│   │   │   └── PersonalityCalculator.jsx
│   │   ├── shared/                 # Shared components
│   │   │   ├── QuestionCard.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── ResultDisplay.jsx
│   │   │   └── HomePage.jsx
│   │   └── ui/                     # UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Modal.jsx
│   │
│   ├── context/                    # React context
│   │   └── CalculatorContext.jsx   # Shared state management
│   │
│   ├── data/                       # Data files
│   │   ├── questions.js            # Questions utilities
│   │   ├── questions.json          # Original questions data
│   │   └── questions_updated.json  # Updated questions for target audience
│   │
│   ├── hooks/                      # Custom hooks
│   │   ├── useFormValidation.jsx
│   │   ├── useCalculatorLogic.jsx
│   │   └── useLocalStorage.jsx
│   │
│   ├── utils/                      # Utility functions
│   │   ├── scoring.js              # Original scoring logic
│   │   ├── scoring_updated.js      # Updated scoring for target audience
│   │   └── validationSchemas.js
│   │
│   ├── styles/                     # Styling
│   │   ├── globals.css
│   │   └── components.css
│   │
│   ├── App.jsx                     # Main app component
│   ├── AppRouter.jsx               # Routing logic
│   └── main.jsx                    # Entry point
│
├── package.json
├── tailwind.config.js
└── README.md
```

## 📝 Updated Files Explanation

### 1. New Question Format (`questions_updated.json`)

The questions have been completely redesigned to target our specific audience: non-employed people around 25 in tier 2 cities in India. The new questions:

- Are more relatable to everyday experiences of this demographic
- Include more humor, sarcasm, and pop culture references
- Have 8 questions per calculator instead of 6
- Use more colloquial language and Hinglish phrases
- Address common scenarios like dating apps, social media, job hunting, and financial constraints

### 2. Updated Scoring Logic (`scoring_updated.js`)

The scoring system has been updated to:

- Better align with the mindset of our target audience
- Provide more relatable result messages with Hinglish phrases
- Include fun facts relevant to the Indian context
- Offer more practical advice considering the socio-economic realities
- Add categories that better reflect the lives and aspirations of our users

### 3. New Documentation Structure

Documentation has been organized into:

- **Project Guides**: Technical implementation guides
- **Styling Guides**: Design system documentation
- **Root Documentation**: General project information

## 🚀 How to Use the Updated Files

1. **For questions**: Use `questions_updated.json` instead of the original `questions.json`
2. **For scoring**: Use `scoring_updated.js` instead of the original `scoring.js`  
3. **For documentation**: Refer to the reorganized docs folder with its categorized guides

## 🎯 Target Audience Considerations

The updated content focuses on making the calculator app more relevant to:

- Young adults in tier 2 Indian cities (not metros)
- Non-employed or early career individuals
- People familiar with dating apps, social media, and gig economy
- Those who face typical challenges like job hunting, financial constraints, and family expectations
- Users who appreciate humor, pop culture references, and relatable content

## 📱 Implementation Notes

When implementing the new questions and scoring system:

1. Update the data imports in your components to use the new files
2. Test thoroughly to ensure the new content resonates with the target audience
3. Consider A/B testing between the original and updated content
4. Collect feedback specifically on relatability and humor

## 🤝 Contributing

Feel free to further adjust the questions and scoring to better match our target audience. The goal is to create an engaging, fun, and relatable experience that feels authentic to young adults in tier 2 Indian cities.
