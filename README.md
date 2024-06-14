# Medical Checkup API with Express JS

## Postman Documentation
https://documenter.getpostman.com/view/29650319/2sA3XQfLiY

## Introduction

This is an Express.js project designed to serve as a backend for a Medical Checkup system. It provides various RESTful API endpoints for managing patient or user records and checkup results.

## Features

- RESTful API with CRUD operations
- Data validation and error handling
- Integration with a database (MongoDB)
- Well-structured codebase following MVC architecture

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/fadhillatmojo/medical-checkup-api.git
    cd medical-checkup-api
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the necessary environment variables. For example:

    ```env
    PORT=8000
    DB_URL=mongodb://localhost:27017/medicalCheckup
    ```

4. Start the server:

    ```sh
    npm start
    ```

    The server will start on `http://localhost:8000`.
