import React from 'react';
import './userProfile.css';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';

const UserProfile = () => {

    const { state, dispatch } = useContext(FilteredDataContext);

    return (
        <div className='user-profile-div'>
            <div className='user-profile-details-div'>
                <div className='user-info'>
                    <p className='user-profile-p' ><b>First Name:</b> {state?.userDetails?.firstName}</p>
                    <p className='user-profile-p' ><b>Last Name:</b> {state?.userDetails?.lastName}</p>
                    <p className='user-profile-p' ><b>Email:</b> {state?.userDetails?.email}</p>
                </div>
                <div className='btn-div'>
                    <button className='logout-btn' onClick={() => {
                        dispatch({ type: 'UPDATE_USERS_LOGIN', payload: '' })
                        dispatch({ type: 'UPDATE_USERS_TOKEN', payload: '' })
                    }}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
