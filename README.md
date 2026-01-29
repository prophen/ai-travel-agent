# AI Travel Agent

A vanilla JavaScript implementation of the AI Travel Agent mobile app interface with three interactive screens.

## Features

- 🎨 Clean, responsive design matching Figma specifications
- 📱 Mobile-first approach (390x844px - iPhone 14/15 Pro)
- 🔄 Multi-page navigation flow
- ✨ Interactive form with counter controls and date pickers
- 💾 Session storage for data persistence
- 🎯 Pure vanilla JavaScript, HTML, and CSS - no frameworks needed

## Project Structure

```
ai-travel-agent/
├── index.html      # Welcome screen with "Let's Begin" button
├── form.html       # Trip planning form with inputs
├── results.html    # Trip results with weather, flights, and hotel
├── styles.css      # All styling for all pages
├── script.js       # JavaScript functionality for all pages
└── README.md       # This file
```

## Pages Overview

### 1. Welcome Screen (`index.html`)

- Animated travel illustration (cat with suitcase)
- "Let's Begin" button to start the journey

### 2. Trip Planning Form (`form.html`)

- **Number of travellers**: Interactive counter with +/- buttons
- **Flying from**: Text input for departure city
- **Flying to**: Text input for destination
- **From Date**: Date picker for departure
- **To Date**: Date picker for return
- **Budget**: Text input for trip budget
- **Submit Button**: "Plan my Trip!" to proceed

### 3. Trip Results (`results.html`)

- Trip summary with dates and route
- **Weather**: Temperature forecast
- **Flights**: Recommended airline option with "Book" button
- **Hotel**: Recommended accommodation with "Book" button

## Getting Started

Simply open `index.html` in your web browser to view the application.

For development with live reload, you can use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (install http-server globally first)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## How It Works

1. **Start**: User clicks "Let's Begin" on the welcome screen
2. **Plan**: User fills out the trip form with travel details
3. **Submit**: Form data is validated and stored in sessionStorage
4. **View Results**: Trip details are displayed with booking options

## Key Features

### Interactive Counter

- Plus/minus buttons for traveller count
- Range: 1-20 travellers
- Smooth animations on click

### Form Validation

- Required fields: departure, destination, dates
- Alert messages for incomplete forms
- Data persistence across pages

### Dynamic Content

- Dates automatically formatted (e.g., "25th Nov 23")
- Route display updates based on form input
- Book buttons with click handlers

## Customization

- **Colors**: Edit color values in `styles.css`
  - Background: `#f2ffff` (light cyan)
  - Accent: `#4bdcb0` (turquoise)
  - Cards: `#bbf7f7` (light turquoise)
- **Text Content**: Update the weather/flight/hotel recommendations in `results.html`
- **Navigation**: Modify `script.js` to add custom routing logic
- **Booking**: Implement actual booking APIs in the book button handlers

## Design Notes

- **Background**: `#f2ffff` (light cyan)
- **Primary Button**: `#4bdcb0` (turquoise green)
- **Card Background**: `#bbf7f7` (light turquoise)
- **Border**: 4px solid black throughout
- **Font**: Inter (falls back to system fonts)
- **Border Radius**: 40px for buttons, 20px for cards
- **Shadow**: `0px 4px 4px rgba(0,0,0,0.25)` on cards

## Browser Support

Works on all modern browsers that support:

- CSS Grid/Flexbox
- ES6 JavaScript
- sessionStorage API
- Date input type
- Modern CSS properties (border-radius, box-shadow, transitions)
- Modern CSS properties (border-radius, box-shadow, transitions)
