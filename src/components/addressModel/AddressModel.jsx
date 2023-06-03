import React from 'react';
import './addressModel.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useContext } from 'react';
import { AddressContext } from '../../contexts/addressContext';


const AddressModel = () => {

    const [open, setOpen] = React.useState(false);
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');

    const { addUserAddress } = useContext(AddressContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addAddressHandler = () => {
        const enteredDetails = {
            fullName: fullName,
            phone: phone,
            address: address,
            pincode: pincode,
        }
        addUserAddress(enteredDetails)
        setOpen(false);
    }

    return (
        <div className='address-div'>
            <Button className='addBtn' variant="outlined" onClick={handleClickOpen}>
                Add
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter Details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Full name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={fullName}
                        onChange={(event) => {
                            setFullName(event.target.value)
                        } }
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Enter phone number"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={phone}
                        onChange={(event) => {
                            setPhone(event.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Enter address"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pincode"
                        label="Enter pincode"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={pincode}
                        onChange={(event) => {
                            setPincode(event.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addAddressHandler}>Add address</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddressModel
