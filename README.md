# Tasks API

A simple RESTful API for managing tasks using Node.js, Express, and JSON file storage.

## Description

This API allows you to create, read, and manage tasks with features like priority levels, status tracking, and timestamps. Tasks are stored in a JSON file for persistence.

## Features

- ✅ Get all tasks
- ✅ Create new tasks
- ✅ Task priority management
- ✅ Status tracking (pending, completed, etc.)
- ✅ Automatic ID generation
- ✅ Timestamp tracking
- ✅ CORS enabled for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tasks-api
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode
Start the server with automatic reloading:
```bash
npm run dev
```

### Production Mode
Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Health Check
- **GET** `/`
  - Description: Check if API is running
  - Response: "API is working properly"

### Tasks Routes
All task endpoints are prefixed with `/api/tasks`

#### Get All Tasks
- **GET** `/api/tasks/`
  - Description: Retrieve all tasks
  - Response: Array of task objects

#### Create New Task
- **POST** `/api/tasks/`
  - Description: Create a new task
  - Required fields: `title`, `priority`
  - Optional fields: `description`, `status`
  - Request body:
    ```json
    {
      "title": "Task title",
      "description": "Task description",
      "priority": "high|medium|low",
      "status": "pending"
    }
    ```
  - Response: Created task object with auto-generated ID and timestamp

## Task Object Structure

```json
{
  "id": "TASKS-1695385200000",
  "title": "Example Task",
  "description": "This is an example task",
  "priority": "high",
  "status": "pending",
  "createdAt": "2023-09-22T10:00:00.000Z"
}
```

## Project Structure

```
tasks-api/
├── data/
│   └── tasks.json          # JSON file for task storage
├── routes/
│   └── tasksRoutes.js      # Task route handlers
├── server.js               # Main server file
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

## Dependencies

### Production
- **express**: Web framework for Node.js
- **cors**: Enable Cross-Origin Resource Sharing

### Development
- **nodemon**: Auto-restart server during development


## License

This project is licensed under the ISC License.

## Author

Radhesh

## Notes

- Tasks are stored in `data/tasks.json` file
- The API automatically creates unique IDs using timestamps
- CORS is enabled for all origins (consider restricting in production)
- Currently supports basic CRUD operations for tasks
