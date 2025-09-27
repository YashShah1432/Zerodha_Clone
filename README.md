# Zerodha Clone

This is a full-stack web application that clones the Zerodha trading platform. It includes a frontend, a backend, and a dashboard.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

To get a local copy up and running, follow these simple steps.

### 1. Clone the repository

```sh
git clone https://github.com/YashShah1432/Zerodha_Clone.git
cd Zerodha_Clone
```

### 2. Backend Setup

The backend server provides the API for the application.

1.  **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file:**
    Create a file named `.env` in the `backend` directory and add the following content. Replace the placeholder values with your actual MongoDB connection string and a secret key of your choice.
    ```
    MONGO_URL=your_mongodb_connection_string
    TOKEN_KEY=your_secret_jwt_token_key
    ```

4.  **Run the server:**
    ```sh
    npm start
    ```
    The server will start on port 3000 (or the port you specify in a `PORT` variable in your `.env` file).

### 3. Frontend Setup

The frontend is the main user-facing application.

1.  **Navigate to the frontend directory (from the root):**
    ```sh
    cd frontend
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The frontend application will be available at `http://localhost:5173`.

### 4. Dashboard Setup

The dashboard provides an administrative interface.

1.  **Navigate to the dashboard directory (from the root):**
    ```sh
    cd dashboard
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The dashboard application will be available at `http://localhost:5174`.
