import CardItem from '../components/CardItem';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Cards() {
    const cities = useSelector((state) => state.cities.value);

    return (
        <>
            <Navbar></Navbar>
            <h1>
                Pagina con tutte le cards con link a sottopagina
            </h1>
            <div className="card-grid">
                {/* Rendering delle Liste, utilizzo di map */}
                {cities.map((city) => (
                    <Link to={`/cards/${city.id}`} key={city.id}>
                        <CardItem
                            key={city.id}
                            title={city.name}
                            isVisited={city.isVisited}
                            imgURL={city.imgURL}>
                            {city.description}
                        </CardItem>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Cards;