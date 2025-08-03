# React Quiz App

A comprehensive quiz application built with React, featuring context-based state management, a timer, scoring, and highscore tracking.

<img width="1915" height="908" alt="image" src="https://github.com/user-attachments/assets/a378aa7f-f06d-466a-ac7d-06e57c85cdea" />

<img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/7bc3f93f-a2ee-4a88-b9b8-301091b84bfa" />

<img width="1916" height="903" alt="image" src="https://github.com/user-attachments/assets/639f9000-40ce-4c53-88a3-3d6a8e7c3445" />

<img width="1916" height="899" alt="image" src="https://github.com/user-attachments/assets/c4ff3135-8c04-405b-8fca-5be6bf4c55dc" />



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
   cd react-quiz
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
