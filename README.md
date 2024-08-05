## Full Stack Todo App(  MERN STACK PROJECT )
This Project contains a simple todo application
with the following features

  

- anyone can create todos

- anyone can see existing todos

- can mark their todos as done
  

In Backend:
- 
- express server
- zod for validation
- mongoose for mongodb database connection 
- mongodb as database
- used cors to avoid cors error

In Frontend:
- 
- two components-create todo and render todo
- we havent used use effect so infinite fetch requests go out  and we also need to implement update todo(things to fix)


## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

### Backend
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    node index.js
    ```

### Database
1. Open Mongodb and set up a database and copy connection url string:
2. in the backend directory, open db.js :
    ```bash
    cd backend
    ```
3. use mongoose.connect and paste your connection url string :
    ```bash
   mongoose.connect("your_connection_urlstring")
    ```



