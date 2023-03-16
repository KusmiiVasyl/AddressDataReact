import './FormAddress.css'
import {useEffect, useState} from "react";
import {AddressType} from "../../enums/AddressType";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    createAddress,
    getAddress,
    resetAddressState,
    updateAddress,
    updateAddressState
} from "../../store/addressSlice";
import {Button} from "@mui/material";

export function FormAddress() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const address = useSelector(state => state.address)
    const navigate = useNavigate()
    const [messageAddressAction, setMessageAddressAction] = useState('')

    let selectTypeAddress = document.getElementById("selectTypeAddress")
    let buttonSaveDisabled = false

    useEffect(() => {
        if (id) {
            dispatch(getAddress(id))
            setMessageAddressAction(`Address id: ${id} - is being edited now!`)
        }
        return () => dispatch(resetAddressState())
    }, [])

    const submitHandler = (event) => {
        event.preventDefault()
        if (address.country && address.city && address.street) {
            if (id) {
                dispatch(updateAddress(address))
                navigate('../..', {relative: 'path'})
            } else {
                dispatch(createAddress(address))
                navigate('../addresses', {relative: 'path'})
            }
            selectTypeAddress.value = AddressType.OFFICE
            setMessageAddressAction('')
            buttonSaveDisabled = true
        }
    }

    const checkFormInput = () => {
        if (!address.country && !address.city && !address.street && !messageAddressAction) {
            setMessageAddressAction("Creating new address...")
        }
    }

    const onChangeFormInput = (nameInput, text) => {
        dispatch(updateAddressState({[nameInput]: text}))
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
                        <input type="text" value={address.country}
                               onChange={(e) => onChangeFormInput("country", e.target.value)}/>
                        <input type="text" value={address.city}
                               onChange={(e) => onChangeFormInput("city", e.target.value)}/>
                        <input type="text" value={address.street}
                               onChange={(e) => onChangeFormInput("street", e.target.value)}/>
                        <select id="selectTypeAddress"
                                onChange={(e) => onChangeFormInput("typeAddress", e.target.value)}>
                            <option value={AddressType.OFFICE}>
                                Office
                            </option>
                            <option selected={address.typeAddress === AddressType.HOME} value={AddressType.HOME}>
                                Home
                            </option>
                        </select>
                        <Button type="submit" variant="outlined" disabled={buttonSaveDisabled}>save</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

