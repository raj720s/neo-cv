# neo-cv
Assesment
Tools Used

    Vite - React
    React-Bootstrap - Bootstrap components for React
    Node.js with Express - Backend server
    MySQL - Database

Project Name

Description of your project.
Tools Used

    Vite - React
    React-Bootstrap - Bootstrap components for React
    Node.js with Express - Backend server
    MySQL - Database

Prerequisites

Before you start, ensure you have the following installed:

    MySQL, preferably with Apache/Nginx server
    Node.js and npm

Getting Started

    Clone the repository

    bash

git clone https://github.com/your-username/your-project.git

Install dependencies

bash

cd your-project
cd back
npm install
cd ../app
npm install

Configure MySQL

Make sure you have MySQL installed and running. Update the database configuration in the back/config/config.json file.

Run Sequelize Migrations

bash

npx db:migrate

Start the backend server

bash

cd back
nodemon bin/www

Start the frontend development server

bash

    cd app
    npm run dev

    Open in your browser
        Frontend: http://localhost:5173
        Backend: http://localhost:3500

Development Scripts

    -- Backend Development Server

    // bash

cd back
nodemon bin/www

    -- Frontend Development Server

bash

    cd app
    npm run dev

Notes

    Ensure your MySQL server is running before starting the project.
    Update the database configuration in back/config/config.json.
    Make sure to run Sequelize migrations before using the application.
    Exposed ports:
        React: http://localhost:5173
        Node Express: http://localhost:3500
