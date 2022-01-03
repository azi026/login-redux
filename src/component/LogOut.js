import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {logout,selectUser} from '../features/userSlice';

import './logout.css';
const LogOut = () => {
    const user=useSelector(selectUser)
    const dispatch=useDispatch();
    const handleLogout=(e)=>{
        e.preventDefault();

        dispatch(logout());

    }
    return (
        <div className='logout'>
            welcom <span className='user_name'>{user.name}</span>
            <button className='logout_button' onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}

export default LogOut
