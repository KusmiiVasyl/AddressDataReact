import {useEffect, useState} from "react";
import Address from "./Address";
import './Addresses.css'
import FormAddress from "./FormAddress";


// const ADDRESSES_URL = 'https://my.api.mockaroo.com/address.json?key=c2449c70'

export default function Addresses() {
    const [addresses, setAddresses] = useState(addressesTemp)
    const [addressToEdit, setAddressToEdit] = useState(null)
    // const [error, setError] = useState('')
    // const [isLoading, setIsLoading] = useState(true)
    //
    // useEffect(() => {
    //     fetch(ADDRESSES_URL)
    //         .then((result) => result.json())
    //         .then((addresses) => setAddresses(addresses))
    //         .catch((error) => setError(error.message))
    //         .finally(() => setIsLoading(false))
    // }, [])

    const addAddressHandler = (newAddress) => {
        newAddress.id = addresses[addresses.length - 1].id + 1
        setAddresses([...addresses, newAddress])
    }

    const deleteAddressHandler = (idAddress) => {
        setAddresses(addresses.filter(address => address.id !== idAddress))
    }

    // if (isLoading) {
    //     return (
    //         <>
    //             <div className="addresses">
    //                 <p className="loading">Loading...</p>
    //             </div>
    //         </>
    //     )
    // }
    //
    // if (error) {
    //     return (
    //         <>
    //             <div className="addresses">
    //                 <p className="error">Error: {error}</p>
    //             </div>
    //         </>
    //     )
    // }

    const editAddressHandler = (address) => {
        setAddressToEdit(address)
        // setAddresses(addresses.map(address => {
        //     if(address.id === newAddress.id){
        //         return newAddress
        //     } else {
        //         return address
        //     }
        // }))
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

const addressesTemp = [
    {
        "id": 1,
        "country": "Russia",
        "city": "Okhotsk",
        "street": "9072 Utah Plaza",
        "isHomeAddress": true
    }, {
        "id": 2,
        "country": "Paraguay",
        "city": "Caacupé",
        "street": "32030 Memorial Alley",
        "isHomeAddress": false
    }, {
        "id": 3,
        "country": "Cuba",
        "city": "Primero de Enero",
        "street": "25456 Donald Road",
        "isHomeAddress": true
    }, {
        "id": 4,
        "country": "Bosnia and Herzegovina",
        "city": "Kladanj",
        "street": "9 Thompson Place",
        "isHomeAddress": true
    }, {
        "id": 5,
        "country": "Zambia",
        "city": "Nyimba",
        "street": "26753 Oak Trail",
        "isHomeAddress": true
    }, {
        "id": 6,
        "country": "China",
        "city": "Taiyanghe",
        "street": "4 Nancy Lane",
        "isHomeAddress": false
    }, {
        "id": 7,
        "country": "China",
        "city": "Lishu",
        "street": "88 Bultman Alley",
        "isHomeAddress": false
    }, {
        "id": 8,
        "country": "Sweden",
        "city": "Edsbyn",
        "street": "0192 Division Parkway",
        "isHomeAddress": true
    }, {
        "id": 9,
        "country": "Philippines",
        "city": "Cambanugoy",
        "street": "478 Haas Street",
        "isHomeAddress": true
    }]


