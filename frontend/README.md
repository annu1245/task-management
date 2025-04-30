# Task Management Frontend

Manage all daily tasks like creating grocery list, emailing sending, meetings, call follow-ups, etc.

## Tech Stack

This project is built using the following technologies:

* **Build Tool:** Vite.js (Fast development server and build tool)
* **Framework:** React.js (JavaScript library for building user interfaces)
* **Routing:** `react-router-dom` (Declarative routing for React)
* **State Management:** `react-redux` (Official React bindings for Redux)
* **Styling:** Tailwind CSS (Utility-first CSS framework)
* **UI Components:** DaisyUI (Tailwind CSS component library)

## Features

List of the key features

* Authentication (Login/Registration)
* Task CRUD (Create/Read/Update/Delete)
* Multiple pages with react router dom
* State management with Redux

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js (LTS version recommended) installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
* npm, yarn, or pnpm package manager.

## Installation

Follow these steps to get the project up and running locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/annu1245/task-management.git
    cd task-management/frontend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or using yarn
    # yarn install
    # or using pnpm
    # pnpm install
    ```

## Environment Variables

This project requires environment variables, particularly to specify the backend API URL. Vite exposes environment variables prefixed with `VITE_` to the frontend code.

Create a file named `.env` in the root directory of the project.

```env
VITE_API_URL=<your_backend_api_url> # e.g., http://localhost:3000
```
