import './FormAddress.css'
import {useEffect, useMemo, useState} from "react";

const AddressType = {
    HOME: 'HOME',
    OFFICE: 'OFFICE'
}

export default function FormAddress({addAddress, editAddress}) {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [typeAddress, setTypeAddress] = useState(AddressType.OFFICE)

    let selectTypeAddress = document.getElementById("selectTypeAddress")

    useEffect(()=>{
        if(editAddress) {
            setCountry(editAddress.country)
            setCity(editAddress.city)
            setStreet(editAddress.street)
            selectTypeAddress.value = editAddress.isHomeAddress ? AddressType.HOME : AddressType.OFFICE
        }
    }, [editAddress, selectTypeAddress])


    const resetFormValues = () => {
        setCountry('')
        setCity('')
        setStreet('')
        setTypeAddress(AddressType.OFFICE)
        selectTypeAddress.value = AddressType.OFFICE
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (country && city && street) {
            addAddress({
                id: NaN,
                country,
                city,
                street,
                isHomeAddress: typeAddress == AddressType.HOME ? true : false
            })
            resetFormValues()
        }
    }

    return (
        <>
            <h3>Form address</h3>
            <form onSubmit={submitHandler} className="formAddress">
                <label>Country:
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
                </label>
                <label>City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                </label>
                <label>Street:
                    <input type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                </label>
                <select id="selectTypeAddress" onChange={(e) => setTypeAddress(e.target.value)}>
                    <option value={AddressType.OFFICE}>Office</option>
                    <option value={AddressType.HOME}>Home</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

