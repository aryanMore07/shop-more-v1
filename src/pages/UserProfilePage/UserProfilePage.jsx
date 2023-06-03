import React, { useContext } from 'react';
import './userProfilepage.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserDetails from '../../components/userDetails/UserDetails';
import AddressModel from '../../components/addressModel/AddressModel';
import { AddressContext } from '../../contexts/addressContext';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const UserProfile = () => {
    const [value, setValue] = useState(0);

    const { addressData, setSelectedUser } = useContext(AddressContext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{
            width: '100%',
        }} className="dialogBox">
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                <Tabs sx={{
                    display: "flex",
                    justifyContent: "center", flexDirection: 'column'
                }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="User Details" {...a11yProps(0)} />
                    <Tab label="User Address" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <UserDetails />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    addressData.length > 0 ? (
                        addressData.map((address, index) => {
                            const { fullName, phone, address: userAddress, pincode } = address;
                            return (
                                <div key={index}>
                                    <div className='addressData-div'>
                                        <div className='user-address'>
                                            <label htmlFor={fullName}>
                                                <input name='userAddress' id={fullName} type="radio" value={address} onClick={(event) => {
                                                    setSelectedUser(fullName)
                                                }} />
                                                <div >
                                                    <p><b>Full Name: </b>{fullName}</p>
                                                    <p><b>Phone Number: </b>{phone}</p>
                                                    <p><b>Address: </b>{userAddress}</p>
                                                    <p><b>Pincode: </b>{pincode}</p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )

                        }
                        )
                    ) : (<h1>Please add address</h1>)
                }
                <AddressModel />
            </TabPanel>
        </Box>
    )
}

export default UserProfile;
