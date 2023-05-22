import React from 'react';
import './navbar.css';
import Badge from '@mui/material/Badge';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FilteredDataContext } from '../../contexts/FilteredDataContext';

const Navbar = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useContext(FilteredDataContext);


    return (
        <div className='navbar-div'>
            <ul className='layout'>
                <li className='leftside-div'>
                    <Link className='navlogin-btn' to='/'><h2>Shop More</h2></Link>
                    <Link className='navlogin-btn' to='/mockman'><h2>Mockman</h2></Link>
                </li>
                <li className='middle-one-div'>
                    <input type="text" className='input-box' placeholder='Search items' onChange={(event) => {
                        dispatch({ type: 'USER_INPUT', payload: event.target.value })
                    }} />
                </li>
                <li className='rightside-div'>
                    <div className='components'>
                        {
                            state?.userDetails ? (
                                <NavLink to='/user-profile' className='navlogin-btn'>Profile</NavLink>) : (
                                <NavLink to='/login' className='navlogin-btn'>Login</NavLink>)
                        }
                        <NavLink to='products' className='navlogin-btn'>Shop</NavLink>
                        <Badge className='mui-icons' badgeContent={4} color="error">
                            <Favorite className='icon' onClick={() => {
                                navigate('/wishlist')
                            }} />
                        </Badge>
                        <Badge className='mui-icons' badgeContent={4} color="error">
                            <ShoppingCart className='icon' onClick={() => {
                                navigate('/cart')
                            }} />
                        </Badge>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
