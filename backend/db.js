const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'myDB',
    connectionLimit: 5
});

// mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });    this is for MONGO DB

// const roomSchema = new mongoose.Schema({
//     room_type: String,
//     no_of_rooms: Number,
//     check_in_date: Date,
//     check_out_date: Date,
//     number_of_days: Number,
//     payable_amount: Number
// });

// const Room = mongoose.model('Room', roomSchema);


module.exports = pool;

