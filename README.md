# MERN CRUD Application

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application demonstrating CRUD (Create, Read, Update, Delete) operations.

---

## Features

- **Create:** Add new records to the database
- **Read:** Display a list of records fetched from the database
- **Update:** Modify existing records
- **Delete:** Remove records from the database

---

## Tech Stack

### Frontend:
- **React**: Used for building the user interface
- **Axios**: For making HTTP requests to the backend
- **CSS**: Styling of components

### Backend:
- **Node.js**: Runtime environment for JavaScript
- **Express.js**: Framework for building the RESTful API

### Database:
- **MongoDB**: NoSQL database for storing application data
- **Mongoose**: MongoDB object modeling tool for Node.js

---

## Installation

### Prerequisites:
- Node.js installed on your system
- MongoDB installed and running
- Git installed

### Steps:
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd mern-crud-application
   ```

2. Install dependencies for the frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Create a `.env` file in the `backend` directory:
   ```plaintext
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mern-crud
   ```

4. Start the MongoDB server:
   ```bash
   mongod
   ```

5. Start the application:
   - **Backend**:
     ```bash
     cd backend
     npm start
     ```
   - **Frontend**:
     ```bash
     cd ../frontend
     npm start
     ```

6. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
mern-crud-application
├── backend
│   ├── models
│   │   └── recordModel.js
│   ├── routes
│   │   └── recordRoutes.js
│   ├── server.js
│   └── .env
├── frontend
│   ├── public
│   └── src
│       ├── components
│       │   ├── CreateRecord.js
│       │   ├── RecordList.js
│       │   ├── UpdateRecord.js
│       ├── App.js
│       └── index.js
└── README.md
```

---

## API Endpoints

### Base URL: `http://localhost:5000`

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| GET    | `/api/records` | Fetch all records   |
| POST   | `/api/records` | Add a new record    |
| GET    | `/api/records/:id` | Fetch a single record |
| PUT    | `/api/records/:id` | Update a record     |
| DELETE | `/api/records/:id` | Delete a record     |

---

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Your message here"
   ```
4. Push your changes:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request

---

## License

This project is licensed under the MIT License.
