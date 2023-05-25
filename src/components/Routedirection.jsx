import { NavLink } from "react-router-dom";

export function Routedirection(props) {
    return (
        <> 
            <NavLink to="/">Home</NavLink> <span> / {props.mensaje}</span>
        </>
    )
}