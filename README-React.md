# Weather App - React Version

This is a React.js version of the weather application that was originally built with HTML, CSS, and vanilla JavaScript.

## Features

- Search for weather information by city name
- Display current temperature, weather description, humidity, and wind speed
- Dynamic background images based on the searched city
- Responsive design with modern UI
- Loading states for better user experience

## Technologies Used

- React 18.2.0
- React Hooks (useState, useEffect)
- OpenWeatherMap API
- CSS3 for styling
- Unsplash API for background images

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Configuration

The app uses the OpenWeatherMap API to fetch weather data. The API key is currently hardcoded in the application. For production use, consider moving it to environment variables.

## Project Structure

```
src/
  ├── App.js          # Main React component
  ├── index.js        # React DOM rendering
  ├── index.css       # Styles converted from original CSS
public/
  └── index.html      # HTML template
```

## Key Differences from Original HTML Version

1. **Component-based architecture**: The app is now structured as React components
2. **State management**: Uses React hooks (useState, useEffect) instead of DOM manipulation
3. **Event handling**: Uses React event handlers instead of addEventListener
4. **Styling**: Converted CSS classes to work with React className prop
5. **Async/await**: Modern JavaScript async patterns instead of .then() chains
6. **Improved error handling**: Better error states and loading indicators

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

This project supports all modern browsers that are compatible with React 18.