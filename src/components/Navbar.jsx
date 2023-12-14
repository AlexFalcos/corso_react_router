import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul style={{ listStyleType: "none" }}>
            <li style={{ display: "inline", margin: "10px" }}>
                <Link to={`/`}>home</Link>
            </li>
            <li style={{ display: "inline", margin: "10px" }}>
                <Link to={`/about`}>about</Link>
            </li>
            <li style={{ display: "inline", margin: "10px" }}>
                <Link to={`/contatti`}>contatti</Link>
            </li>
            <li style={{ display: "inline", margin: "10px" }}>
                <Link to={`/cards`}>card ver.1</Link>
            </li>
            <li style={{ display: "inline", margin: "10px" }}>
                <Link to={`/cards-children`}>card ver.2</Link>
            </li>
        </ul>
    );
}

export default Navbar;