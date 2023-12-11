import Navbar from "../components/Navbar";
import useCounterProva from "../hooks/useCounterProva";

function About(params) {
    // Utilizzo del Custom Hook
    useCounterProva();

    return (
        <>
            <Navbar></Navbar>
            <h1>Pagina About 🚀 (post inserimento su git)</h1>
        </>
    );
}

export default About;