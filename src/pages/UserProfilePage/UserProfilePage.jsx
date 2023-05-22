import React from 'react';
import './userProfile.css';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';

const UserProfile = () => {

    const { state, dispatch } = useContext(FilteredDataContext);

    return (
        <div className='user-profile-div'>
            <div className='user-profile-details-div'>
                <p><b>First Name:</b> {state?.userDetails?.firstName}</p>
                <p><b>Last Name:</b> {state?.userDetails?.lastName}</p>
                <p><b>Email:</b> {state?.userDetails?.email}</p>
                <div className='btn-div'>
                    <button className='logout-btn' onClick={() => {
                        dispatch({type: 'UPDATE_USERS_LOGIN', payload: ''})
                    }}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
