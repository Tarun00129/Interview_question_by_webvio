Here's a README template for your MERN stack project. Feel free to modify any sections as needed.

---

# MERN Stack Form Project

## Project Overview

This project is a MERN stack application that allows users to fill out and manage forms with multiple entries. The form includes fields for room details and supports dynamic addition and removal of forms. The data is submitted to a MariaDB database using a Node.js and Express backend, with form handling and validation managed by Formik and Yup. Redux and Axios are used for state management and data fetching, and Bootstrap provides styling.

## Features

- **Dynamic Form Handling**: Users can add and remove forms dynamically.
- **Form Fields**:
  - `room_type` (Select)
  - `no_of_rooms` (Text Field)
  - `check_in_date` (Date Picker)
  - `check_out_date` (Date Picker)
  - `number_of_days` (Text Field)
  - `payable_amount` (Text Field)
- **Data Submission**: Form data is sent to a MariaDB database via a POST API.
- **Data Fetching**: Data is retrieved from the database via a GET API and displayed on a Dashboard component.

## Technologies Used

- **Frontend**: React.js, Formik, Yup, Redux, Axios, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MariaDB

## Setup Instructions

### Prerequisites

- Node.js
- MariaDB

### Backend Setup

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/mern-formik-project.git
    cd mern-formik-project/backend
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Configure MariaDB**:
   - Update the `backend/db.js` file with your MariaDB connection details.

    **`backend/db.js`**
    ```js
    const mariadb = require('mariadb');

    const pool = mariadb.createPool({
        host: 'localhost',
        user: 'your-username',
        password: 'your-password',
        database: 'your-database-name',
        connectionLimit: 5
    });

    module.exports = pool;
    ```

4. **Run the backend server**:

    ```sh
    node server.js
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:

    ```sh
    cd ../frontend
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Run the React app**:

    ```sh
    npm start
    ```

### Proxy Configuration

Ensure that the `proxy` field in `frontend/package.json` points to the backend server:

**`frontend/package.json`**
```json
{
  "name": "mern-formik-project",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    // other dependencies
  },
  "proxy": "http://localhost:5000",
  "scripts": {
    "start": "react-scripts start",
    // other scripts
  }
}
```

## API Endpoints

- **POST /api/rooms**: Submit form data to the database.
  - **Request Body**:
    ```json
    {
      "room_type": "single",
      "no_of_rooms": 1,
      "check_in_date": "2023-01-01",
      "check_out_date": "2023-01-02",
      "number_of_days": 1,
      "payable_amount": 100.00
    }
    ```
  - **Response**:
    ```json
    {
      "id": 1,
      "room_type": "single",
      "no_of_rooms": 1,
      "check_in_date": "2023-01-01",
      "check_out_date": "2023-01-02",
      "number_of_days": 1,
      "payable_amount": 100.00
    }
    ```

- **GET /api/rooms**: Retrieve all room entries from the database.
  - **Response**:
    ```json
    [
      {
        "id": 1,
        "room_type": "single",
        "no_of_rooms": 1,
        "check_in_date": "2023-01-01",
        "check_out_date": "2023-01-02",
        "number_of_days": 1,
        "payable_amount": 100.00
      }
    ]
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the application.
2. Fill out the form fields and use the plus (+) and minus (-) buttons to dynamically add or remove forms.
3. Click "Submit" to send the form data to the backend.
4. View the submitted data on the Dashboard component.

## Contributing

Feel free to submit issues, forks, and pull requests. If you have suggestions or improvements, please create an issue or a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to better fit your project's specific details or additional features.