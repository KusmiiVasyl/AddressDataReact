import './Menu.css'
import {NavLink} from "react-router-dom";


export const Menu = ()=> {

    return (
        <nav >
            <NavLink to="">Home</NavLink>
            <NavLink to="">Addresses</NavLink>
            <NavLink to="">FormAddress</NavLink>
        </nav>
    )
}