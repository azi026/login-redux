import React from 'react';
import Login from './component/Login';
import LogOut from './component/LogOut';
import './App.css';
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice';
const App = () => {
    const user=useSelector(selectUser);
    return (
        <div>
            {user ? <LogOut/> :<Login/>}
           
        </div>
    )
}

export default App
