# Yhangry Assessment Backend

This repository contains the backend for the Yhangry assessment project. The backend is built using Node.js, Express, and MySQL. It provides APIs to support the client application with functionality for managing set menus, filters, and guest-related data.

## Features

- **Database**: MySQL is used to store and manage data.
- **API Endpoints**: Provides APIs to fetch menus, apply filters, and handle guest-specific requirements.
- **Environment Configuration**: Easily configurable using environment variables.
- **Scalable Codebase**: Organized structure for future scalability and maintainability.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MySQL](https://www.mysql.com/) database
  
### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sid-lpcd/yhangry-assessment-server.git
   cd yhangry-assessment-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MYSQL_HOST=your-mysql-host
   MYSQL_USER=your-mysql-username
   MYSQL_PASSWORD=your-mysql-password
   MYSQL_DATABASE=your-database-name
   ```

4. Set up the MySQL database:

   - Import the database schema or run the necessary SQL scripts to create the tables and relationships.
   - Ensure the database credentials in the `.env` file match your MySQL setup.

5. Start the server:

   ```bash
   npm start
   ```

   The server will run on the specified port (default is 5000).

## Project Structure

```plaintext
├── controllers/       # API logic for handling requests
├── models/            # Database models and queries
├── routes/            # API routes definitions
├── migrations/        # Migration files to create DB tables
├── seeds/             # Seed file to prepopulate DB Tables
├── helpers/           # Utility functions and helpers
├── config/            # Configuration files (e.g., database connection)
├── .env               # Environment variables
├── package.json       # Project metadata and dependencies
└── index.js           # Entry point for the application
```

## API Documentation

### Base URL

```
http://localhost:5000
```

### Endpoints

#### 1. Get All Menus

```http
GET /menus
```
- **Description**: Retrieves all set menus from the database according to schema provided.

## Scripts

- `npm start`: Starts the server in production mode.
- `npm run dev`: Starts the server in development mode with hot-reloading.

## Technologies Used

- **Backend Framework**: Node.js with Express
- **Database**: MySQL
- **Environment Variables**: dotenv
- **Database Query Builder**: Knex.js
