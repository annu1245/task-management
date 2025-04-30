# Task Management Backend

Manage all daily tasks like creating grocery list, emailing sending, meetings, call follow-ups, etc.

## Tech Stack

This project is built using the following technologies:

* **Backend Framework:** Express.js
* **Database:** MongoDB
* **Authentication:** JSON Web Tokens (JWT) for secure API authentication
* **Other:** Node.js runtime environment

## Features

List of the key features

* Authentication (Login/Registration)
* Task CRUD (Create/Read/Update/Delete)
* Data storage in MongoDB
* Secure APIs with JWT token

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js (LTS version recommended) installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
* MongoDB installed and running, or access to a MongoDB Atlas cluster.
* npm or yarn package manager.

## Installation

Follow these steps to get the project up and running locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/annu1245/task-management.git
    cd task-management/backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or using yarn
    # yarn install
    ```

## Environment Variables

This project uses environment variables to manage sensitive information and configuration settings. You need to create a `.env` file in the root directory of the project.

Create a file named `.env` and add the following variables:

```env
SERVER_PORT=3000 # Or any desired port
MONGODB_URI=<your_mongodb_connection_string> # e.g., mongodb://localhost:27017/mydatabase or your Atlas connection string
JWT_SECRET_KEY=<a_long_and_random_secret_string> # Use a strong, unpredictable string for signing JWTs
CLIENT_URL=http://frontend.com # Specify the frontend URL for CORS policy
```
