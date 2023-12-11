import { useEffect } from "react";

// Esempio di Custom Hook
function useCounterProva() {
    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            // Mostra il numero random, richiesto ogni secondo, in consol
            console.log(randomNumber);
        }, 1000);

        // Necessario per stoppare il timer all'uscita del componente che lo ha lanciato
        return () => {
            clearInterval(interval);
        };
    }, []); // Lanciato la prima volta che viene richiamato il componente
}

export default useCounterProva;