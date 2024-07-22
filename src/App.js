import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RoomForm from './components/RoomForm';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from './components/rawForm';

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <RoomForm />
                <Dashboard />
                {/* <Basic /> */}
            </div>
        </Provider>
    );
}

export default App;
