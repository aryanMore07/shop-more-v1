import React from 'react';
import './userDetails.css';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';
import { toast } from 'react-toastify';



const UserDetails = () => {

    const { state, dispatch } = useContext(FilteredDataContext);

    return (
        <div>
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
                            toast.success('Logged out successful', {
                                position: "top-center",
                                autoClose: 750,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                        }}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
