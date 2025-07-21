# Calculator Hub - Project Files Guide

This document provides an overview of the key files in the Calculator Hub project and their purposes.

## Component Files

### UI Components

- **src/components/ui/Button.jsx**: Reusable button component with support for different themes, sizes, and variants. Uses Framer Motion for hover and tap animations.

- **src/components/ui/Card.jsx**: Versatile card component with different styles, themes, and animation effects. Supports variants like default, compact, large, and flat.

- **src/components/ui/Modal.jsx**: Dialog component with animation effects for showing and hiding. Handles keyboard events (Escape to close) and prevents body scrolling when open.

### Shared Components

- **src/components/shared/ProgressBar.jsx**: Displays progress through a questionnaire with calculator-specific theming.

- **src/components/shared/QuestionCard.jsx**: Renders questions and answer options with support for personalization and hints.

- **src/components/shared/ResultDisplay.jsx**: Shows calculator results with appropriate visuals based on calculator type.

### Calculator Components

- **src/components/calculators/LoveCalculator.jsx**: Implementation of the love compatibility calculator. Manages question flow and score calculation.

- **src/components/calculators/EnhancedCalculator.jsx**: Advanced calculator implementation with personality trait analysis based on "missing flavors" question set.

### Layout Components

- **src/components/layout/Layout.jsx**: Provides consistent page structure with header and content areas.

## Data Files

- **src/data/questions.js**: Main question module with utility functions for personalization, question retrieval, and personality trait analysis.

- **src/data/questions_missing_flavors.json**: Enhanced question data for all calculator types (love, friendship, career, personality). Includes scoreTag properties for personality trait analysis.

## Utility Files

- **src/utils/scoring.js**: Enhanced functions for calculating compatibility scores, generating result messages, and analyzing personality traits from scoreTag properties.

## Hook Files

- **src/hooks/useLocalStorage.js**: Custom hook for persisting data in browser local storage.

## Implementation Notes

1. The project uses React with functional components and hooks.
2. Styling is done with Tailwind CSS.
3. Animations are implemented with Framer Motion.
4. Calculator themes (love, friendship, career, personality) have consistent color schemes throughout the UI.
5. Questions support personalization with the user's name via {name} placeholders.
6. The enhanced calculator implementation provides deeper personality insights through tag-based analysis.
7. All questions now use the "missing flavors" format which includes scoreTag properties for better personality insights.
