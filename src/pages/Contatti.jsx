import Navbar from "../components/Navbar";
import useCounterProva from "../hooks/useCounterProva";

function Contatti(params) {
    // Utilizzo del Custom Hook
    useCounterProva();

    return (
        <>
            <Navbar></Navbar>
            <h1>Pagina Contatti 😍</h1>
        </>
    );
}

export default Contatti;