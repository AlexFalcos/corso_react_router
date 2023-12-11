import "../pages/Card.css"
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Children } from "react";

function Card() {
    const { cardID } = useParams();

    const cities = useSelector((state) =>
        state.cities.value.filter((city) => city.id == cardID.toString())
    );

    const location = useLocation();
    const isChildren = location.pathname.includes("children") ? true : false;


    return (
        <>
            {!isChildren && <Navbar></Navbar>}
            <h1>{cities[0].name}</h1>
            <div className={"card-style " + (isChildren ? "card-margin" : "")}>
                <div>
                    {cities[0].isVisited && (
                        <span style={{ color: "green" }}>✔️ visitata</span>
                    )}
                    {!cities[0].isVisited && (
                        <span style={{ color: "red" }}>❌ non visitata</span>
                    )}
                </div>
                <img src={cities[0].imgURL}
                    alt="" />
            </div >
        </>
    );
}

export default Card;