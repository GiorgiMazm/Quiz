# Quiz Project

This is a Quiz project, that was built to practise technologies and my programming skills.

## Table of Contents
- [Features](#features)
- [Technologies](#Technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Quiz creation and management
- Quiz taking and scoring
- RESTful API for quiz-related operations

## Technologies

- Nuxt 3 (for both Front and Back End)
- Type Script
- MongoDB
- Tailwind
- Sidebase

## Requirements

To run this project, you need to have the following software installed on your machine:

- Node.js (v16 or higher)
- MongoDB with DB with name quiz

## Installation

1. Clone the repository: git clone https://github.com/GiorgiMazm/Quiz.git
2. Navigate to the project directory: cd Quiz
3. Install the dependencies: npm install
4. Create .env file with your mongodb url: DB_URL

## Usage

1. Start the server: npm run dev
2. Open your web browser and access the application at `http://localhost:3000`.

## API Endpoints

- `/api/quiz`
- GET: Get all quizzes
- POST: Create a new quiz
- PUT: Update a quiz


- `/api/quiz/:id`
- GET: Get a specific quiz
- DELETE: Delete a quiz


- `/api/user/user`
- POST: Create a new user


- `/api/user/:email`
- GET: Get a specific user based on email address

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
