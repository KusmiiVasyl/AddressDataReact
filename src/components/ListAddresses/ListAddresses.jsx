import {useEffect, useState} from "react";
import {Address} from "../Address";
import './ListAddresses.css'
import {AddressApi} from "../../api/addressApi";


const ADDRESSES_URL = 'https://64048a123bdc59fa8f3b247f.mockapi.io/api/address'

export function ListAddresses() {
    const [addresses, setAddresses] = useState([])
    const [addressToEdit, setAddressToEdit] = useState(null)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        AddressApi.getAll()
            .then((addresses) => setAddresses(addresses))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [])

    const addAddressHandler = (newAddress) => {
        if (!newAddress.id) {
            newAddress.id = addresses[addresses.length - 1].id + 1
            setAddresses([...addresses, newAddress])
            return
        }
        setAddresses(addresses.map(address => {
            return (address.id === newAddress.id) ? newAddress : address
        }))
    }

    const editAddressHandler = (address) => {
        setAddressToEdit(address)
    }

    const deleteAddressHandler = (idAddress) => {
        setAddresses(addresses.filter(address => address.id !== idAddress))
        setAddressToEdit({id: NaN, country: '', city: '', street: '', isHomeAddress: false})
    }

    if (isLoading) {
        return (
            <>
                <div className="addresses">
                    <p className="loading">Loading...</p>
                </div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <div className="addresses">
                    <p className="error">Error: {error}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="addresses">
                {addresses.map((address) => <Address key={address.id} address={address}
                                                     editAddress={editAddressHandler}
                                                     deleteAddress={deleteAddressHandler}/>)}
            </div>
            {/*<FormAddress addAddress={addAddressHandler} editAddress={addressToEdit}/>*/}
        </>
    )
}




