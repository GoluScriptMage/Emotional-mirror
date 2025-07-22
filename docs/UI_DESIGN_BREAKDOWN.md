# 🪞 Emotional Mirror - Comprehensive UI Design Breakdown

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Home Page](#home-page)
   - [Desktop Design](#home-page-desktop)
   - [Tablet Design](#home-page-tablet)
   - [Mobile Design](#home-page-mobile)
3. [Heart Reality](#heart-reality)
   - [Desktop Design](#heart-reality-desktop)
   - [Tablet Design](#heart-reality-tablet)
   - [Mobile Design](#heart-reality-mobile)
4. [Bond Insight](#bond-insight)
   - [Desktop Design](#bond-insight-desktop)
   - [Tablet Design](#bond-insight-tablet)
   - [Mobile Design](#bond-insight-mobile)
5. [Work Psyche](#work-psyche)
   - [Desktop Design](#work-psyche-desktop)
   - [Tablet Design](#work-psyche-tablet)
   - [Mobile Design](#work-psyche-mobile)
6. [Inner Echo](#inner-echo)
   - [Desktop Design](#inner-echo-desktop)
   - [Tablet Design](#inner-echo-tablet)
   - [Mobile Design](#inner-echo-mobile)
7. [Common Components](#common-components)
8. [Accessibility Considerations](#accessibility-considerations)

---

## 📑 Introduction <a name="introduction"></a>

This document provides detailed design specifications for each page and component of the Emotional Mirror application across desktop, tablet, and mobile devices. Each design includes:

- Visual layout with exact dimensions
- Color specifications
- Typography details
- Component positioning
- Interactive elements behavior

All designs follow our dark-first approach with reflection-specific accent colors.

---

## 🏠 Home Page <a name="home-page"></a>

### Desktop Design (1024px+) <a name="home-page-desktop"></a>

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                      � EMOTIONAL MIRROR                         │  │
│  │                    Reflect Your True Self                        │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  Welcome Message Box (Dark theme - #1a1a1a)                      │  │
│  │  "Ready to see what's really going on beneath the surface?"      │  │
│  │  "Choose your reflection below 👇"                               │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │ � HEART    │  │ 🫂 BOND     │  │ 🧠💼 WORK   │  │ 🎭 INNER    │  │
│  │ REALITY     │  │ INSIGHT     │  │ PSYCHE      │  │ ECHO        │  │
│  │             │  │             │  │             │  │              │  │
│  │ [GRADIENT:  │  │ [GRADIENT:  │  │ [GRADIENT:  │  │ [GRADIENT:   │  │
│  │  #ec4899 to │  │  #0d9488 to │  │  #9333ea to │  │  #f59e0b to  │  │
│  │  #f43f5e]   │  │  #06b6d4]   │  │  #8b5cf6]   │  │  #f97316]    │  │
│  │             │  │             │  │             │  │              │  │
│  │ Uncover your│  │ Explore your│  │ Examine your│  │ Discover your│  │
│  │ relationship│  │ friendship  │  │ relationship│  │ authentic    │  │
│  │ patterns    │  │ reality     │  │ with work   │  │ self         │  │
│  │             │  │             │  │             │  │              │  │
│  │ [Begin]     │  │ [Begin]     │  │ [Begin]     │  │ [Begin]      │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 🌙 Dark Mode │ 🔊 Sound On │ 📊 Your Reflections │ ⚙️ Settings │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Colors & Typography:**

- Background: #0f0f0f (Dark background)
- Title: Poppins, 36px (text-4xl), Bold, #ffffff
- Subtitle: Montserrat, 20px (text-xl), Medium, #d1d5db
- Welcome Box: Background #1a1a1a, Border #374151, Text #ffffff
- Reflection Cards:
  - Width: 270px each
  - Height: 320px each
  - Border Radius: 16px
  - Box Shadow: 0 10px 25px rgba(0, 0, 0, 0.2)
  - Transition: transform 0.3s ease, box-shadow 0.3s ease
  - Hover: transform: scale(1.05)

**Interactive Elements:**

- Reflection cards scale up slightly (1.05) on hover
- Begin buttons have hover states matching reflection themes
- Dark Mode toggle animates between sun/moon icons

### Tablet Design (768px - 1023px) <a name="home-page-tablet"></a>

```
┌────────────────────────────────────────────┐
│                                            │
│  ┌────────────────────────────────────┐    │
│  │        � EMOTIONAL MIRROR         │    │
│  │        Reflect Your True Self      │    │
│  └────────────────────────────────────┘    │
│                                            │
│  ┌────────────────────────────────────┐    │
│  │  Welcome Message Box               │    │
│  │  "Ready to see what's beneath?"    │    │
│  └────────────────────────────────────┘    │
│                                            │
│  ┌─────────────┐  ┌─────────────┐         │
│  │ � HEART    │  │ 🫂 BOND     │         │
│  │ REALITY     │  │ INSIGHT     │         │
│  │             │  │             │         │
│  │ [Begin]     │  │ [Begin]     │         │
│  └─────────────┘  └─────────────┘         │
│                                            │
│  ┌─────────────┐  ┌─────────────┐         │
│  │ 🧠💼 WORK   │  │ 🎭 INNER    │         │
│  │ PSYCHE      │  │ ECHO        │         │
│  │             │  │             │         │
│  │ [Begin]     │  │ [Begin]     │         │
│  └─────────────┘  └─────────────┘         │
│                                            │
│  ┌────────────────────────────────────┐    │
│  │ 🌙 Dark Mode │ 🔊 Sound On │ ⚙️    │    │
│  └────────────────────────────────────┘    │
│                                            │
└────────────────────────────────────────────┘
```

**Colors & Typography:**

- Same colors as desktop
- Title: 30px (text-3xl)
- Subtitle: 18px (text-lg)
- Reflection Cards:
  - Width: 320px each
  - Height: 280px each
  - Arranged in 2x2 grid with 24px gap

**Interactive Elements:**

- Same as desktop
- Touch areas increased to minimum 44px

### Mobile Design (320px - 767px) <a name="home-page-mobile"></a>

```
┌────────────────────────────┐
│                            │
│  ┌────────────────────┐    │
│  │  � EMOTIONAL     │    │
│  │      MIRROR       │    │
│  └────────────────────┘    │
│                            │
│  ┌────────────────────┐    │
│  │  Welcome Message   │    │
│  │  Box               │    │
│  └────────────────────┘    │
│                            │
│  ┌────────────────────┐    │
│  │  � HEART         │    │
│  │  REALITY          │    │
│  │                    │    │
│  │  [Begin]           │    │
│  └────────────────────┘    │
│                            │
│  ┌────────────────────┐    │
│  │  🫂 BOND          │    │
│  │  INSIGHT          │    │
│  │                    │    │
│  │  [Begin]           │    │
│  └────────────────────┘    │
│                            │
│  ┌────────────────────┐    │
│  │  🧠💼 WORK        │    │
│  │  PSYCHE           │    │
│  │                    │    │
│  │  [Begin]           │    │
│  └────────────────────┘    │
│                            │
│  ┌────────────────────┐    │
│  │  🎭 INNER         │    │
│  │  ECHO             │    │
│  │                    │    │
│  │  [Begin]           │    │
│  └────────────────────┘    │
│                            │
│  ┌────────────────────┐    │
│  │ 🌙 │ 🔊 │ ⚙️ │ 📊  │    │
│  └────────────────────┘    │
│                            │
└────────────────────────────┘
```

**Colors & Typography:**

- Same colors as desktop
- Title: 24px (text-2xl)
- Subtitle: 16px (text-base)
- Reflection Cards:
  - Width: 100% (minus 32px padding)
  - Height: 220px each
  - Stacked vertically with 16px gap

**Interactive Elements:**

- Touch areas increased to minimum 48px
- Begin buttons span full width of cards
- Focus states more prominent for touch accessibility

---
```

**Colors & Typography:**

- Same colors as desktop
- Title: 24px (text-2xl)
- Subtitle: 16px (text-base)
- Calculator Cards:
  - Width: 100% (minus 32px padding)
  - Height: 220px each
  - Stacked vertically with 16px gap

**Interactive Elements:**

- Touch areas increased to minimum 48px
- Start Test buttons span full width of cards
- Focus states more prominent for touch accessibility

---

## � Heart Reality <a name="heart-reality"></a>

### Desktop Design (1024px+) <a name="heart-reality-desktop"></a>

```
┌────────────────────────────────────────────────────────────────────────┐
│  [← Back] � Heart Reality    🔊 Audio  🌙 Theme  [2/6]                │
├────────────────────────────────────────────────────────────────────────┤
│  Progress Bar: ████████████░░░░░░ 66%                                 │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                                                                  │  │
│  │                     Question 2 of 6                             │  │
│  │                                                                  │  │
│  │  Hey [Name]! When it comes to family introduction...            │  │
│  │  Jab ghar walon se introduce karna ho, you...                   │  │
│  │                                                                  │  │
│  │  Hinglish Hint: Ghar waalon ko batana hai ya nahi,              │  │
│  │  family drama se bachte ho ya address karte ho? 👀💔            │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ A) Wait for 2 years minimum, dar lagta hai 😅           │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ B) Introduce as 'just a friend' forever 🤐               │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ C) Proudly introduce when ready                          │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ D) Let them figure out themselves, main kya karu 🤷      │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │                    [Previous] [Next]                            │  │
│  │                                                                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Colors & Typography:**

- Background: #0f0f0f (Dark background)
- Card Background: #1a1a1a with subtle pink gradient overlay
- Border: #ec4899 (Pink) at 20% opacity
- Title: Poppins, 30px (text-3xl), Bold, #ffffff
- Question: Montserrat, 18px (text-lg), Medium, #ffffff
- Hinglish Hint: Montserrat Italic, 16px, Medium, #f472b6
- Options: Poppins, 16px (text-base), Regular, #f8fafc
- Buttons:
  - Previous: Border #ec4899 at 60% opacity, Text #ffffff
  - Next: Background gradient from #ec4899 to #f43f5e, Text #ffffff
- Progress Bar:
  - Background: #334155
  - Fill: Linear gradient from #ec4899 to #f43f5e

**Interactive Elements:**

- Option hover: Background changes to #ec4899 at 20% opacity
- Option selected: Background gradient from #ec4899 to #f43f5e at 40% opacity, border solid #ec4899
- Next button disabled until an option is selected
- Previous button disabled on first question

### Tablet Design (768px - 1023px) <a name="heart-reality-tablet"></a>

```
┌──────────────────────────────────────────┐
│  [←] � Heart Reality  [2/6]            │
├──────────────────────────────────────────┤
│  Progress: ████████████░░░░░░ 66%       │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐  │
│  │                                    │  │
│  │           Question 2 of 6          │  │
│  │                                    │  │
│  │  Hey [Name]! When it comes to      │  │
│  │  family introduction...            │  │
│  │                                    │  │
│  │  Hinglish Hint: Ghar waalon ko     │  │
│  │  batana hai ya nahi? 👀💔          │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ A) Wait for 2 years...     │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ B) Introduce as 'just...   │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ C) Proudly introduce...    │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ D) Let them figure out...  │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │          [Previous] [Next]         │  │
│  │                                    │  │
│  └────────────────────────────────────┘  │
│                                          │
└──────────────────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop
- Title: 24px (text-2xl)
- Question: 16px (text-base)
- Options: 16px (text-base) with condensed padding

**Interactive Elements:**

- Same as desktop with larger touch targets

### Mobile Design (320px - 767px) <a name="heart-reality-mobile"></a>

```
┌────────────────────────────┐
│  [←] � Heart Real [2/6]  │
├────────────────────────────┤
│  ████████████░░░░░░ 66%   │
├────────────────────────────┤
│                            │
│  ┌────────────────────┐    │
│  │                    │    │
│  │   Question 2 of 6  │    │
│  │                    │    │
│  │  Hey [Name]! When  │    │
│  │  it comes to family│    │
│  │  introduction...   │    │
│  │                    │    │
│  │  Hinglish Hint:    │    │
│  │  Ghar waalon ko    │    │
│  │  batana hai? 👀💔  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ A) Wait for  │  │    │
│  │  │ 2 years...   │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ B) Introduce │  │    │
│  │  │ as 'just...  │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ C) Proudly   │  │    │
│  │  │ introduce... │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ D) Let them  │  │    │
│  │  │ figure out...│  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  [Prev]    [Next]  │    │
│  │                    │    │
│  └────────────────────┘    │
│                            │
└────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop
- Title: 20px (text-xl)
- Question: 16px (text-base)
- Options: 14px (text-sm) with reduced padding
- Vertical spacing reduced

**Interactive Elements:**

- Full width buttons with increased height (min 48px)
- Option labels may wrap to multiple lines
- Swipe gestures supported for previous/next navigation

---

## 🤝 Bond Insight <a name="bond-insight"></a>

### Desktop Design (1024px+) <a name="bond-insight-desktop"></a>

```
┌────────────────────────────────────────────────────────────────────────┐
│  [← Back] 🤝 Bond Insight  🔊 Audio  🌙 Theme  [3/5]                   │
├────────────────────────────────────────────────────────────────────────┤
│  Progress Bar: ██████████████████░░ 80%                               │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                                                                  │  │
│  │                     Question 3 of 5                             │  │
│  │                                                                  │  │
│  │  What would [Friend's Name] do if you were in trouble?          │  │
│  │                                                                  │  │
│  │  Hinglish Hint: Mushkil waqt mein, apka dost kaisa react        │  │
│  │  karta hai? Unki loyalty aur care kitni strong hai? 🤔🤝        │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ A) Drop everything and come to help 🦸‍♂️                │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ B) Offer advice but keep their distance 🤔               │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ C) Listen sympathetically but not get involved 👂        │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ D) Probably not even notice you're in trouble 🙈         │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │                    [Previous] [Next]                            │  │
│  │                                                                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Colors & Typography:**

- Background: #0f0f0f (Dark background)
- Card Background: #1a1a1a with subtle teal gradient overlay
- Border: #0d9488 (Teal) at 20% opacity
- Title: Poppins, 30px (text-3xl), Bold, #ffffff
- Question: Montserrat, 18px (text-lg), Medium, #ffffff
- Options: Poppins, 16px (text-base), Regular, #f8fafc
- Buttons:
  - Previous: Border #0d9488 at 60% opacity, Text #ffffff
  - Next: Background gradient from #0d9488 to #06b6d4, Text #ffffff
- Progress Bar:
  - Background: #334155
  - Fill: Linear gradient from #0d9488 to #06b6d4

**Interactive Elements:**

- Option hover: Background changes to #0d9488 at 20% opacity
- Option selected: Background gradient from #0d9488 to #06b6d4 at 40% opacity, border solid #0d9488
- Next button disabled until an option is selected
- Previous button disabled on first question

### Tablet Design (768px - 1023px) <a name="bond-insight-tablet"></a>

```
┌──────────────────────────────────────────┐
│  [←] 🤝 Bond Insight  [3/5]             │
├──────────────────────────────────────────┤
│  Progress: ██████████████████░░ 80%     │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐  │
│  │                                    │  │
│  │           Question 3 of 5          │  │
│  │                                    │  │
│  │  What would [Friend's Name]        │  │
│  │  do if you were in trouble?        │  │
│  │                                    │  │
│  │  Hinglish Hint: Mushkil waqt      │  │
│  │  mein, apka dost kya karta? 🤝    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ A) Drop everything...      │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ B) Offer advice but...     │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ C) Listen sympathetically...│    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ D) Probably not even...    │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │          [Previous] [Next]         │  │
│  │                                    │  │
│  └────────────────────────────────────┘  │
│                                          │
└──────────────────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop with friendship calculator colors
- Title: 24px (text-2xl)
- Question: 16px (text-base)
- Options: 16px (text-base) with condensed padding

**Interactive Elements:**

- Same as desktop with larger touch targets

### Mobile Design (320px - 767px) <a name="bond-insight-mobile"></a>

```
┌────────────────────────────┐
│  [←] 🤝 Bond Insgt [3/5]  │
├────────────────────────────┤
│  ██████████████████░░ 80% │
├────────────────────────────┤
│                            │
│  ┌────────────────────┐    │
│  │                    │    │
│  │   Question 3 of 5  │    │
│  │                    │    │
│  │  What would        │    │
│  │  [Friend's Name]   │    │
│  │  do if you were    │    │
│  │  in trouble?       │    │
│  │                    │    │
│  │  Hint: Mushkil     │    │
│  │  waqt mein? 🤝     │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ A) Drop      │  │    │
│  │  │ everything...│  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ B) Offer     │  │    │
│  │  │ advice but...│  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ C) Listen    │  │    │
│  │  │ sympathet... │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ D) Probably  │  │    │
│  │  │ not even...  │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  [Prev]    [Next]  │    │
│  │                    │    │
│  └────────────────────┘    │
│                            │
└────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop with friendship calculator colors
- Title: 20px (text-xl)
- Question: 16px (text-base)
- Options: 14px (text-sm) with reduced padding
- Vertical spacing reduced

**Interactive Elements:**

- Full width buttons with increased height (min 48px)
- Option labels may wrap to multiple lines
- Swipe gestures supported for previous/next navigation

---

## 💼 Work Psyche <a name="work-psyche"></a>

### Desktop Design (1024px+) <a name="work-psyche-desktop"></a>

```
┌────────────────────────────────────────────────────────────────────────┐
│  [← Back] 💼 Work Psyche    🔊 Audio  🌙 Theme  [4/8]                  │
├────────────────────────────────────────────────────────────────────────┤
│  Progress Bar: ██████████░░░░░░░░ 50%                                 │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                                                                  │  │
│  │                     Question 4 of 8                             │  │
│  │                                                                  │  │
│  │  In a challenging work situation, you typically:                 │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ A) Take charge and lead others through the crisis 📊     │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ B) Analyze the problem methodically before acting 🔍     │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ C) Brainstorm creative solutions outside the box 💡      │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ D) Support the team emotionally and boost morale 🤝      │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │                    [Previous] [Next]                            │  │
│  │                                                                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Colors & Typography:**

- Background: #0f0f0f (Dark background)
- Card Background: #1a1a1a with subtle purple gradient overlay
- Border: #9333ea (Purple) at 20% opacity
- Title: Poppins, 30px (text-3xl), Bold, #ffffff
- Question: Montserrat, 18px (text-lg), Medium, #ffffff
- Options: Poppins, 16px (text-base), Regular, #f8fafc
- Buttons:
  - Previous: Border #9333ea at 60% opacity, Text #ffffff
  - Next: Background gradient from #9333ea to #8b5cf6, Text #ffffff
- Progress Bar:
  - Background: #334155
  - Fill: Linear gradient from #9333ea to #8b5cf6

**Interactive Elements:**

- Option hover: Background changes to #9333ea at 20% opacity
- Option selected: Background gradient from #9333ea to #8b5cf6 at 40% opacity, border solid #9333ea
- Next button disabled until an option is selected
- Previous button disabled on first question

### Tablet Design (768px - 1023px) <a name="work-psyche-tablet"></a>

```
┌──────────────────────────────────────────┐
│  [←] 💼 Work Psyche  [4/8]              │
├──────────────────────────────────────────┤
│  Progress: ██████████░░░░░░░░ 50%       │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐  │
│  │                                    │  │
│  │           Question 4 of 8          │  │
│  │                                    │  │
│  │  In a challenging work             │  │
│  │  situation, you typically:         │  │
│  │                                    │  │
│  │  Hinglish Hint: Tough situation    │  │
│  │  mein aapka approach kya hai? 💼   │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ A) Take charge and lead... │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ B) Analyze the problem...  │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ C) Brainstorm creative...  │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ D) Support the team...     │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │          [Previous] [Next]         │  │
│  │                                    │  │
│  └────────────────────────────────────┘  │
│                                          │
└──────────────────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop with career calculator colors
- Title: 24px (text-2xl)
- Question: 16px (text-base)
- Options: 16px (text-base) with condensed padding

**Interactive Elements:**

- Same as desktop with larger touch targets

### Mobile Design (320px - 767px) <a name="work-psyche-mobile"></a>

```
┌────────────────────────────┐
│  [←] 💼 Work Psych [4/8]  │
├────────────────────────────┤
│  ██████████░░░░░░░░ 50%   │
├────────────────────────────┤
│                            │
│  ┌────────────────────┐    │
│  │                    │    │
│  │   Question 4 of 8  │    │
│  │                    │    │
│  │  In a challenging  │    │
│  │  work situation,   │    │
│  │  you typically:    │    │
│  │                    │    │
│  │  Hint: Tough time  │    │
│  │  mein kya karte? 💼│    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ A) Take      │  │    │
│  │  │ charge and...│  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ B) Analyze   │  │    │
│  │  │ the problem...│  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ C) Brainstorm│  │    │
│  │  │ creative...  │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ D) Support   │  │    │
│  │  │ the team...  │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  [Prev]    [Next]  │    │
│  │                    │    │
│  └────────────────────┘    │
│                            │
└────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop with career calculator colors
- Title: 20px (text-xl)
- Question: 16px (text-base)
- Options: 14px (text-sm) with reduced padding
- Vertical spacing reduced

**Interactive Elements:**

- Full width buttons with increased height (min 48px)
- Option labels may wrap to multiple lines
- Swipe gestures supported for previous/next navigation

---

## 🧠 Inner Echo <a name="inner-echo"></a>

### Desktop Design (1024px+) <a name="inner-echo-desktop"></a>

```
┌────────────────────────────────────────────────────────────────────────┐
│  [← Back] 🧠 Inner Echo  🔊 Audio  🌙 Theme  [5/10]                    │
├────────────────────────────────────────────────────────────────────────┤
│  Progress Bar: █████████████░░░░░░░ 60%                               │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                                                                  │  │
│  │                     Question 5 of 10                            │  │
│  │                                                                  │  │
│  │  At a social gathering, you are most likely to:                  │  │
│  │                                                                  │  │
│  │  Hinglish Hint: Party mein, aap kaise behave karte hain?        │  │
│  │  Extrovert ho ya introvert? 🤔🧠                                 │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ A) Talk to as many people as possible 🎭                 │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ B) Find one or two people for deeper conversation 🧩     │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ C) Wait for others to approach you first 🔍              │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  ┌───────────────────────────────────────────────────────────┐  │  │
│  │  │ D) Prefer to observe people from a distance 👁️           │  │  │
│  │  └───────────────────────────────────────────────────────────┘  │  │
│  │                                                                  │  │
│  │                    [Previous] [Next]                            │  │
│  │                                                                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Colors & Typography:**

- Background: #0f0f0f (Dark background)
- Card Background: #1a1a1a with subtle orange gradient overlay
- Border: #f59e0b (Orange) at 20% opacity
- Title: Poppins, 30px (text-3xl), Bold, #ffffff
- Question: Montserrat, 18px (text-lg), Medium, #ffffff
- Hinglish Hint: Montserrat Italic, 16px, Medium, #fdba74
- Options: Poppins, 16px (text-base), Regular, #f8fafc
- Buttons:
  - Previous: Border #f59e0b at 60% opacity, Text #ffffff
  - Next: Background gradient from #f59e0b to #f97316, Text #ffffff
- Progress Bar:
  - Background: #334155
  - Fill: Linear gradient from #f59e0b to #f97316

**Interactive Elements:**

- Option hover: Background changes to #f59e0b at 20% opacity
- Option selected: Background gradient from #f59e0b to #f97316 at 40% opacity, border solid #f59e0b
- Next button disabled until an option is selected
- Previous button disabled on first question

### Tablet Design (768px - 1023px) <a name="inner-echo-tablet"></a>

```
┌──────────────────────────────────────────┐
│  [←] 🧠 Inner Echo  [5/10]              │
├──────────────────────────────────────────┤
│  Progress: █████████████░░░░░░░ 60%     │
├──────────────────────────────────────────┤
│                                          │
│  ┌────────────────────────────────────┐  │
│  │                                    │  │
│  │           Question 5 of 10         │  │
│  │                                    │  │
│  │  At a social gathering, you        │  │
│  │  are most likely to:               │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ A) Talk to as many...      │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ B) Find one or two...      │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ C) Wait for others...      │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │  ┌────────────────────────────┐    │  │
│  │  │ D) Prefer to observe...    │    │  │
│  │  └────────────────────────────┘    │  │
│  │                                    │  │
│  │          [Previous] [Next]         │  │
│  │                                    │  │
│  └────────────────────────────────────┘  │
│                                          │
└──────────────────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop with Inner Echo colors
- Title: 24px (text-2xl)
- Question: 16px (text-base)
- Hinglish Hint: 14px (text-sm), Medium, #fdba74
- Options: 16px (text-base) with condensed padding

**Interactive Elements:**

- Same as desktop with larger touch targets

### Mobile Design (320px - 767px) <a name="inner-echo-mobile"></a>

```
┌────────────────────────────┐
│  [←] 🧠 Inner Echo [5/10] │
├────────────────────────────┤
│  █████████████░░░░░░░ 60% │
├────────────────────────────┤
│                            │
│  ┌────────────────────┐    │
│  │                    │    │
│  │  Question 5 of 10  │    │
│  │                    │    │
│  │  At a social       │    │
│  │  gathering, you    │    │
│  │  are most likely   │    │
│  │  to:               │    │
│  │                    │    │
│  │  Hint: Party mein  │    │
│  │  kaise behave? 🧠  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ A) Talk to   │  │    │
│  │  │ as many...   │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ B) Find one  │  │    │
│  │  │ or two...    │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ C) Wait for  │  │    │
│  │  │ others...    │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  ┌──────────────┐  │    │
│  │  │ D) Prefer to │  │    │
│  │  │ observe...   │  │    │
│  │  └──────────────┘  │    │
│  │                    │    │
│  │  [Prev]    [Next]  │    │
│  │                    │    │
│  └────────────────────┘    │
│                            │
└────────────────────────────┘
```

**Colors & Typography:**

- Same as desktop with personality calculator colors
- Title: 20px (text-xl)
- Question: 16px (text-base)
- Options: 14px (text-sm) with reduced padding
- Vertical spacing reduced

**Interactive Elements:**

- Full width buttons with increased height (min 48px)
- Option labels may wrap to multiple lines
- Swipe gestures supported for previous/next navigation

---

## Results Pages

### Love Calculator Results

#### Desktop Design (1024px+)

```
┌────────────────────────────────────────────────────────────────────────┐
│                  🎉 Your Results Are In! 🎉                           │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                                                                  │  │
│  │                       💕 85%                                     │  │
│  │                "Relationship Goals 😍"                          │  │
│  │                                                                  │  │
│  │  Hey [Name], you're definitely relationship material!           │  │
│  │  You handle family introductions like a pro and your            │  │
│  │  communication style shows maturity.                            │  │
│  │                                                                  │  │
│  │  Strengths:                                                     │  │
│  │  ✅ Great communication                                         │  │
│  │  ✅ Family-oriented approach                                   │  │
│  │  ✅ Balanced social media presence                             │  │
│  │                                                                  │  │
│  │  Areas to work on:                                             │  │
│  │  💭 Maybe be more spontaneous sometimes                        │  │
│  │                                                                  │  │
│  │  [Share Result] [Try Another Calculator] [Take Again]          │  │
│  │                                                                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Colors & Typography:**

- Background: #0f0f0f (Dark background)
- Card Background: #1a1a1a with gradient pink border glow
- Score Display:
  - Circular background with gradient from #ec4899 to #f43f5e
  - Number: Quicksand, 72px (text-7xl), Bold, #ffffff
  - Text: Quicksand, 24px (text-2xl), Bold, #ffffff
- Result Label:
  - Background: #ec4899 at 15% opacity
  - Text: Montserrat, 20px (text-xl), Bold, #ffffff
- Description: Poppins, 16px (text-base), Regular, #f8fafc
- Strengths & Areas:
  - Labels: Montserrat, 16px (text-base), Bold, #ffffff
  - Items: Poppins, 14px (text-sm), Regular, #f8fafc
- Buttons:
  - Share: Background #ec4899, Text #ffffff
  - Try Another: Border #ffffff, Text #ffffff
  - Take Again: Background transparent, Border #ec4899 at 60%, Text #ffffff

**Interactive Elements:**

- Share Result: Opens social sharing options
- Buttons have hover effects with scale transform
- Try Another: Returns to home page
- Take Again: Resets current calculator

#### Tablet & Mobile Designs

Similar layout to desktop but with:

- Reduced padding
- Smaller font sizes
- Vertically stacked buttons on mobile
- Score display reduced in size but remains prominent

---

## Common Components <a name="common-components"></a>

### Navigation Header

**Desktop (1024px+)**

```
┌────────────────────────────────────────────────────────────────────────┐
│  [← Back] 💕 Love Calculator    🔊 Audio  🌙 Theme  [2/6]              │
└────────────────────────────────────────────────────────────────────────┘
```

**Tablet (768px - 1023px)**

```
┌──────────────────────────────────────────┐
│  [←] 💕 Love Calculator  [2/6]          │
└──────────────────────────────────────────┘
```

**Mobile (320px - 767px)**

```
┌────────────────────────────┐
│  [←] 💕 Love Calc  [2/6]  │
└────────────────────────────┘
```

### Progress Bar

**All screen sizes**

```
┌────────────────────────────────────────────────────────────────────────┐
│  Progress Bar: ████████████░░░░░░ 66%                                 │
└────────────────────────────────────────────────────────────────────────┘
```

- Height: 8px (desktop), 6px (tablet), 4px (mobile)
- Border Radius: 4px
- Background: #334155
- Fill: Linear gradient specific to calculator type
- Transition: width 0.5s ease-in-out

### Question Card

**Common styles across all calculator types**

- Background: #1a1a1a
- Border Radius: 16px (desktop), 12px (tablet), 8px (mobile)
- Box Shadow: 0 4px 20px rgba(0, 0, 0, 0.3)
- Padding: 32px (desktop), 24px (tablet), 16px (mobile)
- Title Margin Bottom: 24px (desktop), 16px (tablet/mobile)
- Question Margin Bottom: 24px (desktop), 16px (tablet/mobile)
- Option Gap: 16px (desktop), 12px (tablet), 8px (mobile)
- Button Margin Top: 32px (desktop), 24px (tablet), 16px (mobile)

### Option Buttons

**Common styles across all calculator types**

- Height: 60px (desktop), 52px (tablet), 48px (mobile)
- Border Radius: 12px (desktop), 10px (tablet), 8px (mobile)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Padding: 16px (desktop), 12px (tablet), 10px (mobile)
- Transition: all 0.2s ease-in-out
- Focus visible outline: 2px solid calculator specific color

---

## Accessibility Considerations <a name="accessibility-considerations"></a>

### Color Contrast

All text meets WCAG 2.1 AA standards:

- Normal text (below 18pt): minimum contrast ratio of 4.5:1
- Large text (18pt+): minimum contrast ratio of 3:1
- UI components and graphical objects: minimum contrast ratio of 3:1

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Focus states are clearly visible
- Tab order follows logical reading order
- Custom keyboard shortcuts for power users

### Screen Readers

- All images have alt text
- ARIA labels used where appropriate
- Announcements for score results
- Progress updates are announced

### Reduced Motion

Media query detects user preference for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Touch Targets

- Minimum touch target size: 44px × 44px
- Increased spacing on mobile devices
- No double-tap required for interactions

---

This comprehensive UI design breakdown provides a detailed visualization of each calculator type across all device sizes, with precise colors, layouts, and component specifications. The designs maintain consistency while giving each calculator its unique visual identity through color theming.

For implementation, refer to the COLOR_SYSTEM_GUIDE.md for exact color codes and the GLOBAL_STYLING_GUIDE.md for styling patterns and Tailwind CSS implementations.
`