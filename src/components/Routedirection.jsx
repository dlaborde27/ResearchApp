import { NavLink } from "react-router-dom";
import "./Routedirection.css"

export function Routedirection(props) {
    return (
        <> 
            <span id="route"><NavLink id="link" to="/">Home</NavLink> <span> / </span> {props.mensaje}</span>
        </>
    )
}