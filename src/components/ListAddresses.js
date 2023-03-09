import {useEffect, useState} from "react";
import Address from "./Address";
import './ListAddresses.css'
import FormAddress from "./FormAddress";


const ADDRESSES_URL = 'https://my.api.mockaroo.com/address.json?key=c2449c70'

export default function ListAddresses() {
    const [addresses, setAddresses] = useState([])
    const [addressToEdit, setAddressToEdit] = useState(null)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(ADDRESSES_URL)
            .then((result) => result.json())
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
            <FormAddress addAddress={addAddressHandler} editAddress={addressToEdit}/>
        </>
    )
}




