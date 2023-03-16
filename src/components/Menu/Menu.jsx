import './Menu.css'
import {NavLink} from "react-router-dom";


export const Menu = () => {

    return (
        <>
            <nav className="navAddressMenu">
                <NavLink to=".">Home</NavLink>
                <NavLink to="addresses">Addresses</NavLink>
                <NavLink to="formAddress">FormAddress</NavLink>
            </nav>
            <hr className="lineMenuUp"/>
            <hr className="lineMenuDown"/>
        </>
    )
}