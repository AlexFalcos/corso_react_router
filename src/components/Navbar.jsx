import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <Link to={`/`}>home</Link>
            </li>
            <li>
                <Link to={`/about`}>about</Link>
            </li>
            <li>
                <Link to={`/contatti`}>contatti</Link>
            </li>
            <li>
                <Link to={`/cards`}>card ver.1</Link>
            </li>
            <li>
                <Link to={`/cards-children`}>card ver.2</Link>
            </li>
        </ul>
    );
}

export default Navbar;