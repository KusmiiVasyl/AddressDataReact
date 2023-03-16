import {useEffect, useState} from "react";
import {Address} from "../Address";
import './ListAddresses.css'
import {AddressApi} from "../../api/addressApi";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteAddress} from "../../store/addressSlice";
import {LinearProgress} from "@mui/material";


export function ListAddresses() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [addresses, setAddresses] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAddresses()
    }, [isLoading])

    const getAddresses = () => {
        AddressApi.getAll()
            .then((addresses) => setAddresses(addresses))
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false))
    }


    const editAddressHandler = (id) => {
        navigate(`item/${id}`, {relative: 'path'})
    }

    const deleteAddressHandler = (idAddress) => {
        dispatch(deleteAddress(idAddress))
        setIsLoading(true)
    }

    if (isLoading) {
        return (
            <>
                <div className="addresses">
                    <p className="loading">Loading...</p>
                    <LinearProgress color="success" style={{margin: '60px auto', width: '60%'}}/>
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
        </>
    )
}




