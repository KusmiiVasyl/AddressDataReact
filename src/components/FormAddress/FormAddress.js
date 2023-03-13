import './FormAddress.css'
import {useEffect, useState} from "react";

const AddressType = {
    HOME: 'HOME',
    OFFICE: 'OFFICE'
}

export default function FormAddress({addAddress, editAddress}) {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [typeAddress, setTypeAddress] = useState(AddressType.OFFICE)
    const [messageAddressAction, setMessageAddressAction] = useState('')

    let selectTypeAddress = document.getElementById("selectTypeAddress")

    useEffect(() => {
        if (editAddress) {
            if (!isNaN(editAddress.id)) {
                setMessageAddressAction(`Address id: ${editAddress.id} - is being edited now!`)
            } else {
                setMessageAddressAction('')
            }
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
        setMessageAddressAction('')
        editAddress.id = NaN
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (country && city && street) {
            addAddress({
                id: editAddress ? editAddress.id : NaN,
                country,
                city,
                street,
                isHomeAddress: typeAddress === AddressType.HOME ? true : false
            })
            resetFormValues()
        }
    }

    const checkFormInput = () => {
        if (!country && !city && !street && !messageAddressAction) {
            setMessageAddressAction("Creating new address...")
        }
    }

    const onChangeFormInput = (nameInput, text) => {
        switch (nameInput) {
            case "country":
                setCountry(text)
                break
            case "city":
                setCity(text)
                break
            case "street":
                setStreet(text)
                break
        }
        checkFormInput()
    }

    return (
        <>
            <h3>Form address</h3>
            <form onSubmit={submitHandler} className="formAddress">
                <h3>{messageAddressAction}</h3>
                <div className="formBlock">
                    <div className="formBlockText">
                        <p>Country:</p>
                        <p>City:</p>
                        <p>Street:</p>
                        <p>Type Address:</p>
                    </div>
                    <div className="formBlockInput">
                        <input type="text" value={country}
                               onChange={(e) => onChangeFormInput("country", e.target.value)}/>
                        <input type="text" value={city} onChange={(e) => onChangeFormInput("city", e.target.value)}/>
                        <input type="text" value={street}
                               onChange={(e) => onChangeFormInput("street", e.target.value)}/>
                        <select id="selectTypeAddress" onChange={(e) => setTypeAddress(e.target.value)}>
                            <option value={AddressType.OFFICE}>Office</option>
                            <option value={AddressType.HOME}>Home</option>
                        </select>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

