# React Quiz App

A comprehensive quiz application built with React, featuring context-based state management, a timer, scoring, and highscore tracking.

## Features

- Dynamic quiz questions loaded from a local server
- Multiple quiz states: loading, error, ready, active, finished
- Progress tracking and scoring system
- Timer for each question
- Highscore tracking
- Responsive UI

## Technologies

- React (functional components, hooks)
- Context API & useReducer
- Fetch API
- json-server for local quiz data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)
- [json-server](https://github.com/typicode/json-server)

### Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory:

   ```bash
   cd 10 react-quiz
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the local quiz data server (in a separate terminal):

   ```bash
   npm run server
   ```

   > This will serve `data/questions.json` at [http://localhost:8000](http://localhost:8000).

5. Start the React development server:

   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/context/QuizContext.js` – Context provider and custom hook for quiz state
- `src/components/App.js` – Main application component
- `src/components/StartScreen.js` – Start quiz UI
- `src/components/Question.js` – Renders individual questions and options
- `src/components/Progress.js` – Shows quiz progress
- `src/components/Timer.js` – Countdown timer
- `src/components/FinishScreen.js` – Results and highscore
- `src/components/Error.js` – Error handling UI
- `data/questions.json` – Quiz questions data

## Customization

- Add/edit questions in `data/questions.json`
- Adjust timer in `QuizContext.js`
- Update styles in CSS files

## License

This project is for educational purposes only.