import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/action';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(fetchRooms());
    }, [dispatch]);

    return (
        <div className="container">
            <h1>Room Booking Dashboard</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Room Type</th>
                        <th>Number of Rooms</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                        <th>Number of Days</th>
                        <th>Payable Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room, index) => (
                        <tr key={index}>
                            <td>{room.room_type}</td>
                            <td>{room.no_of_rooms}</td>
                            <td>{new Date(room.check_in_date).toLocaleDateString()}</td>
                            <td>{new Date(room.check_out_date).toLocaleDateString()}</td>
                            <td>{room.number_of_days}</td>
                            <td>{room.payable_amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
