import './Address.css'


export default function Address(props) {
    const {id, country, city, street, isHomeAddress} = props.address
    const logoHome = require('../images/icon-home.png')
    const logoOffice = require('../images/icon-office.png')

    return (
        <div className="address">
            <div className="addressInfo">
                <div>
                    {isHomeAddress ?
                        <img src={logoHome} alt="Logo Home"/> :
                        <img src={logoOffice} alt="Logo Office"/>}
                </div>
                <div className="info">
                    <h3><small>Address id:</small> {id}</h3>
                    <hr/>
                    <p><small>Country:</small> {country}</p>
                    <p><small>City:</small> {city}</p>
                    <p><small>Street:</small> {street}</p>
                </div>
            </div>
            <div className="addressBtn">
                <button className="btnEdit" onClick={()=>props.editAddress(props.address)}>EDIT</button>
                <button className="btnDelete" onClick={()=>props.deleteAddress(id)}>DELETE</button>
            </div>
        </div>
    )
}