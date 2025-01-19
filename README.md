# Tetris Game

Welcome to the Tetris Game project! This application is a fun implementation of the classic Tetris game, featuring a chat component, user authentication (login/signup), settings, and a landing page.

## Table of Contents

- [Features](#features)
- [Route Structure](#route-structure)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Tetris Gameplay**: Classic Tetris experience.
- **Chat Component**: Real-time chat functionality for players.
- **User Authentication**: Login and signup functionality.
- **Settings**: Customize game settings.
- **Landing Page**: Main entry point for users.

## Route Structure

Below is the route structure for the application:

```
/ // Landing Page
/login // User login page
/signup // User signup page
/settings // User settings page
/game // Tetris game page
/chat // Chat component page
```

## File Structure

Here’s an overview of the project's file structure:

```
/tetris-game
├── /public
│   └── favicon.ico
│   ├── /app
│   │   ├── /dashboard
│   │   │   ├── Game // the game folder which will contain its components and all its dependencies
|   |   |   |   └── page.tsx
│   │   │   ├── Settings // the setting folder which will contain all its components and its dependencies
|   |   |   |   └── page.tsx
|   |   |   └── page.tsx
│   │   ├── /layout.tsx        // Layout for the application
│   │   ├── /page.tsx          // Landing Page
│   │   ├── /global.css          // the css file for the entire app
│   │   └── /Auth
│   │   │   └── page.tsx       // Auth Page
|   ├── /lib
|   |   └── utils.ts // helping function that will be used througout the application
├── package.json
└── README.md
```

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tetris-game.git
Navigate to the project directory:

```bash
cd tetris-game
```
Install the dependencies:

```bash
npm install
```

To run the application locally:

```bash
npm run build
npm run preview
```

Open your browser and navigate to http://localhost:3000 to view the application.
