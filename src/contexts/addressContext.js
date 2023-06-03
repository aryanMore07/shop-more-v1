import { useState } from "react";
import { createContext } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({children}) => {

    const [addressData, setAddressData] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    const addUserAddress = (address) => setAddressData([...addressData, address])

    const selectedUserAddress = addressData.find(({fullName}) => fullName === selectedUser)

    return <AddressContext.Provider value={{ addressData, addUserAddress, setSelectedUser, selectedUserAddress }}>{children}</AddressContext.Provider>
}