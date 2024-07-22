import axios from 'axios';

export const fetchRooms = () => async (dispatch) => {
    try {
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/rooms`);
        const response = await axios.get(`http://localhost:5000/api/rooms`);
        dispatch({ type: 'FETCH_ROOMS', payload: response.data });
    } catch (error) {
        console.error('Error fetching rooms:', error);
    }
};

