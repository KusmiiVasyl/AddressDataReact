import Address from "./Address";
import {useEffect, useState} from "react";

export default function Addresses() {
    const ADDRESSES_URL = 'https://my.api.mockaroo.com/address.json?key=c2449c70'
    const[addresses, setAddresses] = useState([])
    useEffect(()=>{
        fetch(ADDRESSES_URL)
            .then((result) => result.json())
            .then((addresses) => setAddresses(addresses))
    },[])



    return (
        <div>
            <Address/>
            <Address/>
        </div>
    )
}