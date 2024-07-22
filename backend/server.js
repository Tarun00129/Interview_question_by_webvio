// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const pool = require('./db');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// Create table if it doesn't exist
// const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS rooms (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         room_type VARCHAR(255) NOT NULL,
//         no_of_rooms INT NOT NULL,
//         check_in_date DATE NOT NULL,
//         check_out_date DATE NOT NULL,
//         number_of_days INT NOT NULL,
//         payable_amount DECIMAL(10, 2) NOT NULL
//     );
// `;

// pool.query(createTableQuery)
//     .then(() => {
//         console.log('Rooms table created or already exists.');
//     })
//     .catch(err => {
//         console.error('Error creating rooms table:', err);
//     });

// app.post('/api/rooms', async (req, res) => {
//     const { room_type, no_of_rooms, check_in_date, check_out_date, number_of_days, payable_amount } = req.body;

//     const insertQuery = `
//         INSERT INTO 	room_service (room_type, no_of_rooms, check_in_date, check_out_date, number_of_days, payable_amount)
//         VALUES (?, ?, ?, ?, ?, ?)
//     `;

//     try {
//         const result = await pool.query(insertQuery, [room_type, no_of_rooms, check_in_date, check_out_date, number_of_days, payable_amount]);
//         res.status(201).send({ id: result.insertId, ...req.body });
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// app.get('/api/rooms', async (req, res) => {
//     const selectQuery = 'SELECT * FROM rooms';

//     try {
//         const rooms = await pool.query(selectQuery);
//         res.status(200).send(rooms);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const knex = require ("./knex.db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3001'
  }));
  
// Create table if it doesn't exist
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS rooms (
        id INT AUTO_INCREMENT PRIMARY KEY,
        room_type VARCHAR(255) NOT NULL,
        no_of_rooms INT NOT NULL,
        check_in_date DATE NOT NULL,
        check_out_date DATE NOT NULL,
        number_of_days INT NOT NULL,
        payable_amount DECIMAL(10, 2) NOT NULL
    );
`;

pool.query(createTableQuery)
    .then(() => {
        console.log('Rooms table created or already exists.');
    })
    .catch(err => {
        console.error('Error creating rooms table:', err);
    });

app.post('/api/rooms', async (req, res) => {
    let sql = await knex.insert(req.body).table('rooms');
    res.send(sql);
});

app.get('/api/rooms', async (req, res) => {
    const selectQuery = 'SELECT * FROM rooms';

    try {
        const rooms = await pool.query(selectQuery);
        res.status(200).send(rooms);
    } catch (error) {
        res.status(400).send(error);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

