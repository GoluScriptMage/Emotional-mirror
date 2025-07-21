# 📚 React Calculator Development Guidelines

## 🧰 Required Knowledge & Technologies

### Core Technologies

- **React.js (18+)**

  - Functional components
  - React Hooks (useState, useEffect, useContext, useReducer)
  - React Router for navigation
  - Context API for state management

- **JavaScript/ES6+**

  - Arrow functions
  - Destructuring
  - Spread/rest operators
  - Array methods (map, filter, reduce)
  - Async/await and Promises

- **Tailwind CSS**
  - Utility-first approach
  - Custom configuration
  - Component extraction
  - Responsive design principles

### Project-Specific Knowledge

- **Calculator Logic**

  - Scoring algorithms
  - Compatibility calculations
  - Result categorization

- **Form Handling**

  - Multi-step forms
  - Form validation
  - Data persistence

- **Animations**
  - CSS transitions/animations
  - Framer Motion basics
  - Loading states

## 🚀 Development Best Practices

### Component Structure

- **Component Organization**

  - One component per file
  - Use named exports for components
  - Group related components in subdirectories
  - Follow component name = file name convention

- **Component Design**
  - Keep components focused on a single responsibility
  - Use composition over inheritance
  - Extract reusable UI elements to separate components
  - Implement prop validation with PropTypes or TypeScript

### Code Quality

- **Naming Conventions**

  - Use camelCase for variables and functions
  - Use PascalCase for components and classes
  - Use descriptive, intention-revealing names
  - Prefix boolean variables with "is", "has", or "should"

- **Code Style**

  - Consistent indentation (2 spaces recommended)
  - Limit line length to 80-100 characters
  - Add meaningful comments for complex logic
  - Use JSDoc for documenting functions and components

- **Performance Optimization**
  - Memoize expensive calculations with useMemo
  - Prevent unnecessary re-renders with React.memo
  - Optimize event handlers with useCallback
  - Implement code splitting for large components

### State Management

- **State Organization**

  - Keep local state for UI-specific concerns
  - Use Context API for shared state
  - Structure state objects logically
  - Normalize complex data structures

- **Data Flow**
  - Unidirectional data flow (parent to child)
  - Avoid prop drilling with Context API
  - Use callbacks for child-to-parent communication
  - Implement custom hooks for reusable state logic

### Testing

- **Testing Strategy**

  - Write unit tests for utility functions
  - Write component tests for UI behavior
  - Test user interactions and state changes
  - Implement snapshot tests for UI components

- **Test Coverage**
  - Aim for 70%+ code coverage
  - Prioritize testing critical user flows
  - Test edge cases and error handling
  - Mock external dependencies

## 🌐 SEO Optimization

### Meta Tags

- **Essential Meta Tags**

  - Implement title tags for each page/calculator
  - Add meta descriptions that accurately describe content
  - Use canonical URLs to prevent duplicate content
  - Include Open Graph and Twitter Card meta tags for social sharing

- **Implementation Example**

  ```jsx
  import { Helmet } from "react-helmet";

  function LoveCalculator() {
    return (
      <>
        <Helmet>
          <title>Love Calculator | React Calculator Hub</title>
          <meta
            name="description"
            content="Test your love compatibility with our fun, interactive Love Calculator. Get personalized insights and compatibility scores."
          />
          <meta
            property="og:title"
            content="Love Calculator | React Calculator Hub"
          />
          <meta
            property="og:description"
            content="Test your love compatibility with our fun, interactive Love Calculator."
          />
          <meta
            property="og:image"
            content="/images/love-calculator-preview.jpg"
          />
          <link rel="canonical" href="https://reactcalculator.com/love" />
        </Helmet>
        {/* Component content */}
      </>
    );
  }
  ```

### Content Optimization

- **Content Guidelines**
  - Use descriptive headings (H1, H2, H3) with keywords-+
  - Keep URLs short and human-readable
  - Implement proper redirects for moved content

### Performance

- **Core Web Vitals**

  - Optimize Largest Contentful Paint (LCP) < 2.5s
  - Improve First Input Delay (FID) < 100ms
  - Ensure Cumulative Layout Shift (CLS) < 0.1
  - Implement code splitting and lazy loading

- **Mobile Optimization**
  - Ensure responsive design for all device sizes
  - Optimize touch targets for mobile users
  - Test on multiple devices and browsers
  - Implement progressive enhancement

### Technical SEO

- **Indexing**

  - Create and submit a sitemap.xml
  - Implement robots.txt file
  - Use structured data (JSON-LD) for rich results
  - Monitor indexing status in Google Search Console

- **Performance**
  - Optimize and compress images
  - Minify CSS, JavaScript, and HTML
  - Enable browser caching
  - Use a Content Delivery Network (CDN)

## 🔄 Development Workflow

### Version Control

- **Git Practices**

  - Use feature branches for new development
  - Write clear, descriptive commit messages
  - Pull and rebase before pushing changes
  - Use pull requests for code review

- **Branch Strategy**
  - `main`: Production-ready code
  - `develop`: Integration branch for features
  - `feature/*`: Individual feature branches
  - `hotfix/*`: Emergency fixes for production

### Code Review

- **Review Checklist**

  - Does the code meet requirements?
  - Is the code maintainable and readable?
  - Are there potential performance issues?
  - Are there security concerns?
  - Is the code tested adequately?

- **Feedback Guidelines**
  - Be specific and constructive
  - Focus on the code, not the person
  - Provide examples for improvement
  - Acknowledge good practices

### Deployment

- **Deployment Process**

  - Run linting and tests before deployment
  - Build production assets with optimization
  - Deploy to staging for final verification
  - Implement continuous integration/deployment

- **Post-Deployment**
  - Monitor application performance
  - Check for errors in production
  - Verify SEO elements are working
  - Test critical user flows

## 📱 Responsive Design Guidelines

### Breakpoints

- **Mobile First Approach**

  - Default styles for mobile (< 640px)
  - `sm`: 640px (small devices)
  - `md`: 768px (tablets)
  - `lg`: 1024px (laptops)
  - `xl`: 1280px (desktops)
  - `2xl`: 1536px (large screens)

- **Implementation with Tailwind**
  ```jsx
  <div
    className="
    w-full          /* Mobile: full width */
    sm:w-2/3        /* Tablet: 2/3 width */
    lg:w-1/2        /* Desktop: 1/2 width */
    p-4             /* Mobile: small padding */
    md:p-6          /* Tablet+: larger padding */
  "
  >
    Content here
  </div>
  ```

### Layout Guidelines

- **Flexible Layouts**

  - Use CSS Grid and Flexbox for layouts
  - Avoid fixed widths and heights
  - Implement percentage-based sizing
  - Test on various screen sizes and orientations

- **Typography**
  - Use relative units (rem, em) for font sizes
  - Ensure minimum font size of 16px
  - Adjust line height for readability
  - Test font legibility on all devices

## 🎨 Design System Implementation

### Theme Consistency

- **Color Usage**

  - Use defined color variables from `globals.css`
  - Maintain consistent color meaning across UI
  - Ensure sufficient contrast for accessibility
  - Apply calculator-specific colors appropriately

- **Typography Hierarchy**
  - Maintain consistent heading levels
  - Use defined font families for appropriate elements
  - Follow type scale for size relationships
  - Implement consistent spacing between text elements

### Component Guidelines

- **Button Styles**

  - Use appropriate button variants based on action
  - Maintain consistent sizing within contexts
  - Ensure hover and focus states are visible
  - Include loading states for async actions

- **Form Elements**
  - Implement consistent field styling
  - Provide clear validation feedback
  - Ensure form elements are accessible
  - Maintain appropriate spacing between fields

## 🌙 Dark Mode Implementation

### Dark Mode Strategy

- **Class-based Approach**

  - Use Tailwind's `dark:` variant
  - Toggle dark class on the html element
  - Store user preference in localStorage
  - Respect user's system preference initially

- **Color Considerations**
  - Avoid pure black backgrounds (use #0f0f0f)
  - Reduce contrast slightly for text
  - Adjust shadows for dark backgrounds
  - Test for sufficient contrast in both modes

## ♿ Accessibility Requirements

### WCAG Compliance

- **Minimum Requirements**

  - Achieve WCAG 2.1 AA compliance
  - Ensure keyboard navigation works
  - Implement proper focus management
  - Provide appropriate text alternatives

- **Semantic HTML**

  - Use semantic elements (`button`, `nav`, etc.)
  - Implement proper heading hierarchy
  - Use lists for list content
  - Ensure form elements have labels

- **ARIA Usage**
  - Add ARIA labels where necessary
  - Implement ARIA roles appropriately
  - Use ARIA states for dynamic content
  - Test with screen readers

## 📊 Analytics Integration

### Event Tracking

- **Key Events to Track**

  - Calculator selections
  - Question answers
  - Results viewing
  - Social sharing
  - Error occurrences

- **Implementation Approach**

  ```jsx
  function trackEvent(category, action, label = null, value = null) {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }

  // Usage
  <button
    onClick={() => {
      handleStartCalculator("love");
      trackEvent("Calculator", "Start", "Love Calculator");
    }}
  >
    Start Love Calculator
  </button>;
  ```

### User Journey Analysis

- **Funnel Tracking**

  - Define key conversion steps
  - Track completion rates for each step
  - Identify drop-off points
  - Optimize problematic steps

- **User Behavior**
  - Track time spent on each question
  - Monitor answer distribution
  - Analyze result sharing patterns
  - Identify popular calculators and questions

## 🔒 Security Considerations

### Data Protection

- **User Data Handling**

  - Minimize personal data collection
  - Don't store sensitive information
  - Implement data expiration policies
  - Provide clear privacy policy

- **Form Security**
  - Validate all user inputs
  - Sanitize data before processing
  - Implement CSRF protection
  - Limit submission rate (anti-spam)

### Code Security

- **Dependency Management**
  - Regularly update dependencies
  - Use npm audit to check for vulnerabilities
  - Implement security headers
  - Avoid exposing sensitive information in client-side code

## 📈 Performance Optimization

### Load Time Optimization

- **Initial Load**

  - Implement code splitting
  - Lazy load non-critical components
  - Optimize bundle size
  - Implement critical CSS

- **Image Optimization**
  - Use modern formats (WebP)
  - Implement responsive images
  - Lazy load off-screen images
  - Apply appropriate compression

### Runtime Performance

- **Rendering Optimization**
  - Avoid unnecessary re-renders
  - Virtualize long lists
  - Debounce expensive operations
  - Monitor and fix component render bottlenecks

## 📱 Mobile-Specific Considerations

### Touch Optimization

- **Touch Targets**

  - Ensure minimum 44x44px touch targets
  - Add sufficient spacing between interactive elements
  - Implement swipe gestures where appropriate
  - Test on actual mobile devices

- **Mobile UX**
  - Design for thumb zones
  - Optimize for portrait and landscape
  - Consider connection limitations
  - Test on various device sizes and browsers

## 🧪 Testing Checklist

### Test Types

- **Unit Tests**

  - Test utility functions
  - Test isolated component logic
  - Test state management

- **Integration Tests**

  - Test component interactions
  - Test form submissions
  - Test calculator logic end-to-end

- **E2E Tests**
  - Test complete user flows
  - Test across browsers
  - Test responsive behavior

### Accessibility Testing

- **Manual Testing**

  - Keyboard navigation testing
  - Screen reader testing
  - Color contrast verification
  - Font size and zoom testing

- **Automated Testing**
  - Use axe-core for automated accessibility tests
  - Implement accessibility linting rules
  - Include accessibility checks in CI pipeline

## 📱 Progressive Web App Features

### PWA Implementation

- **Minimum Requirements**

  - Create a manifest.json file
  - Implement a service worker
  - Add offline support
  - Enable "Add to Home Screen"

- **Advanced Features**
  - Implement push notifications
  - Add background sync
  - Enable app shortcuts
  - Optimize for installation

---

This guide serves as a comprehensive reference for developing the React Calculator project. Following these guidelines will ensure a high-quality, performant, and accessible application that ranks well in search engines and provides an excellent user experience across all devices.
