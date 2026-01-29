# AI Travel Agent

An AI-powered travel planning application that helps users discover personalized trip recommendations. The app combines vanilla JavaScript frontend with serverless functions and OpenAI API integration for intelligent travel suggestions.

## Features

- 🤖 AI-powered travel recommendations using OpenAI API
- 🎨 Clean, responsive design matching Figma specifications
- 📱 Mobile-first approach
- 🔄 Multi-page navigation flow
- ✨ Interactive form with counter controls and date pickers
- 💾 Session storage for data persistence
- ☁️ Serverless functions on Netlify for API integration
- 🎯 Pure vanilla JavaScript, HTML, and CSS - no frameworks needed

## Project Structure

```
ai-travel-agent/
├── index.html              # Welcome screen
├── form.html               # Trip planning form
├── results.html            # Trip results with AI recommendations
├── styles.css              # All styling for all pages
├── script.js               # Frontend JavaScript functionality
├── package.json            # Project dependencies and scripts
├── netlify.toml            # Netlify configuration
├── DEPLOYMENT.md           # Deployment guide
├── netlify/
│   └── functions/
│       └── recommendations.js  # Serverless function for OpenAI API
└── README.md               # This file
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

### Local Development

1. **Install dependencies**:

```bash
npm install
```

2. **Start the development server**:

```bash
npm run dev
```

This will run Netlify dev mode, which includes both the frontend and serverless functions.

3. **Build for production**:

```bash
npm run deploy
```

### Setup Requirements

To use the AI recommendations feature locally and in production:

1. Get an OpenAI API key from https://platform.openai.com/api-keys
2. Create a `.env.local` file in the project root:

```
OPENAI_API_KEY=your_api_key_here
```

For Netlify deployment, see [DEPLOYMENT.md](./DEPLOYMENT.md) for instructions on setting environment variables.

## How It Works

1. **Start**: User clicks "Let's Begin" on the welcome screen
2. **Plan**: User fills out the trip form with travel details (destinations, dates, budget, number of travelers)
3. **Submit**: Form data is validated and sent to the serverless function
4. **AI Processing**: OpenAI API generates personalized recommendations based on trip details
5. **View Results**: Trip recommendations are displayed including weather forecast, flight suggestions, and hotel options

## Architecture

### Frontend

- **index.html, form.html, results.html**: Multi-page navigation
- **script.js**: Form handling, data validation, and API communication
- **styles.css**: Responsive mobile-first styling

### Backend

- **netlify/functions/recommendations.js**: Serverless function that:
  - Receives trip data from the frontend
  - Calls OpenAI API with trip details
  - Formats and returns AI-generated recommendations
  - Handles CORS and error responses

## Key Features

### Interactive Counter

- Plus/minus buttons for traveller count
- Range: 1-20 travellers
- Smooth animations on click

### Form Validation

- Required fields: departure, destination, dates
- Alert messages for incomplete forms
- Data persistence across pages via sessionStorage

### AI-Powered Recommendations

- Intelligent travel suggestions from OpenAI
- Personalized based on trip details and budget
- Includes weather forecasts, flight options, and accommodation suggestions

### Responsive Design

- Mobile-first (390x844px - iPhone 14/15 Pro)
- Clean, modern UI with turquoise accent colors
- Works on all screen sizes

## Customization

- **Colors**: Edit color values in `styles.css`
  - Background: `#f2ffff` (light cyan)
  - Accent: `#4bdcb0` (turquoise)
- **API Settings**: Modify OpenAI prompts in `netlify/functions/recommendations.js`
- **Form Fields**: Update form structure in `form.html` and corresponding handlers in `script.js`

## Deployment

This project is configured for deployment on **Netlify** with serverless functions.

For complete deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy

1. Push code to GitHub
2. Connect repository to Netlify
3. Add `OPENAI_API_KEY` environment variable
4. Deploy

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Netlify Functions
- **AI**: OpenAI API (GPT-4)
- **Hosting**: Netlify
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
