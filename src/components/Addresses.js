import {useEffect, useState} from "react";
import Address from "./Address";
import './Addresses.css'
import FormAddress from "./FormAddress";


export default function Addresses() {
    const ADDRESSES_URL = 'https://my.api.mockaroo.com/address.json?key=c2449c70'
    const [addresses, setAddresses] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(ADDRESSES_URL)
            .then((result) => result.json())
            .then((addresses) => setAddresses(addresses))
            .catch((error) => setError(error.message))
    }, [])

    if (error) {
        return (
            <>
                <h1>Addresses</h1>
                <div className="addresses">
                    <p className="error">Error: {error}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <h1>Addresses</h1>
            <div className="addresses">
                {addresses.map((address) => <Address key={address.id} {...address}/>)}
            </div>
            <FormAddress/>
        </>
    )
}

// const addresses = [
//     {
//         "id": 1,
//         "country": "Russia",
//         "city": "Okhotsk",
//         "street": "9072 Utah Plaza",
//         "isHomeAddress": true
//     }, {
//         "id": 2,
//         "country": "Paraguay",
//         "city": "Caacupé",
//         "street": "32030 Memorial Alley",
//         "isHomeAddress": false
//     }, {
//         "id": 3,
//         "country": "Cuba",
//         "city": "Primero de Enero",
//         "street": "25456 Donald Road",
//         "isHomeAddress": true
//     }, {
//         "id": 4,
//         "country": "Bosnia and Herzegovina",
//         "city": "Kladanj",
//         "street": "9 Thompson Place",
//         "isHomeAddress": true
//     }, {
//         "id": 5,
//         "country": "Zambia",
//         "city": "Nyimba",
//         "street": "26753 Oak Trail",
//         "isHomeAddress": true
//     }, {
//         "id": 6,
//         "country": "China",
//         "city": "Taiyanghe",
//         "street": "4 Nancy Lane",
//         "isHomeAddress": false
//     }, {
//         "id": 7,
//         "country": "China",
//         "city": "Lishu",
//         "street": "88 Bultman Alley",
//         "isHomeAddress": false
//     }, {
//         "id": 8,
//         "country": "Sweden",
//         "city": "Edsbyn",
//         "street": "0192 Division Parkway",
//         "isHomeAddress": true
//     }, {
//         "id": 9,
//         "country": "Philippines",
//         "city": "Cambanugoy",
//         "street": "478 Haas Street",
//         "isHomeAddress": true
//     }, {
//         "id": 10,
//         "country": "China",
//         "city": "Dongshui",
//         "street": "5 Norway Maple Place",
//         "isHomeAddress": false
//     }, {
//         "id": 11,
//         "country": "Egypt",
//         "city": "Būsh",
//         "street": "28804 Killdeer Circle",
//         "isHomeAddress": false
//     }, {
//         "id": 12,
//         "country": "United States",
//         "city": "Anniston",
//         "street": "8848 Boyd Circle",
//         "isHomeAddress": false
//     }, {
//         "id": 13,
//         "country": "Hungary",
//         "city": "Budapest",
//         "street": "94 Ridgeway Park",
//         "isHomeAddress": false
//     }, {
//         "id": 14,
//         "country": "China",
//         "city": "Shiyang",
//         "street": "4 Sage Road",
//         "isHomeAddress": true
//     }, {
//         "id": 15,
//         "country": "Uruguay",
//         "city": "Barra de Carrasco",
//         "street": "59146 Little Fleur Lane",
//         "isHomeAddress": false
//     }, {
//         "id": 16,
//         "country": "China",
//         "city": "Shijiao",
//         "street": "1 Algoma Way",
//         "isHomeAddress": false
//     }]


