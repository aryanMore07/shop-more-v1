import React from 'react';
import './navbar.css';
import Badge from '@mui/material/Badge';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='navbar-div'>
            <ul className='layout'>
                <li className='leftside-div'>
                    <Link className='navlogin-btn' to='/'><h2>Shop More</h2></Link>
                </li>
                <li className='middle-one-div'>
                    <input type="text" className='input-box' placeholder='Search items' />
                </li>
                <li className='rightside-div'>
                    <div className='components'>
                        <NavLink to='login' className='navlogin-btn'>Login</NavLink>
                        <NavLink to='products' className='navlogin-btn'>Shop</NavLink>
                        <Badge className='mui-icons' badgeContent={4} color="error">
                            <Favorite className='icon' onClick={() => {
                                navigate('/wishlist')
                            }} />
                        </Badge>
                        <Badge  className='mui-icons' badgeContent={4} color="error">
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
