import "./CardForm.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "../redux/citiesSlice";

function CardForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        imgURL: "",
        isVisited: false,
    });

    const handleInputChange = (e) => {
        // Preleviamo le proprietà dal dall'elemento indicato dal targhet dell'evento 
        const { name, type, value, checked } = e.target;
        const inputValue = type == "checkbox" ? checked : value;
        setFormData({
            // Recupero il formData che è già presente
            ...formData,
            // sovrascriviamo il valore della proprietà del formData "name" con il valore "value" 
            [name]: inputValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Versione Statica senza form di Inpout
        // const newCity = {
        //     id: 4,
        //     name: "Sidney",
        //     description: "Breve descrizione della card di Sidney. Su due righe. Breve descrizione della card. Su due righe.",
        //     imgURL: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNpZG5leXxlbnwwfHwwfHx8MA%3D%3D",
        //     isVisited: false,
        // };
        const newCity = {
            // Dati dello stato di un form
            id: Math.random(),
            name: formData.name,
            description: formData.description,
            imgURL: formData.imgURL,
            isVisited: formData.isVisited,
        };

        // Pulire lo State del Form dei Dati
        setFormData({
            name: "",
            description: "",
            imgURL: "",
            isVisited: false,
        });

        dispatch(add(newCity));
    };

    return (
        <form className="card-grid-form" onSubmit={handleSubmit}>
            <div className="campi-form">
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    title="Nome"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    autoComplete="true"></input>
            </div>
            <div className="campi-form">
                <label htmlFor="description">Descrizione</label>
                <textarea
                    id="description"
                    title="Descrizione"
                    name="description"
                    cols="30"
                    rows="10"
                    value={formData.description}
                    onChange={handleInputChange}></textarea>
            </div>
            <div className="campi-form">
                <label htmlFor="imgURL">Immagine</label>
                <input
                    id="imgURL"
                    title="Immagine"
                    type="text"
                    name="imgURL"
                    value={formData.imgURL}
                    onChange={handleInputChange}></input>
            </div>
            <div className="campi-form">
                <label htmlFor="Visitata?">Visitata?</label>
                <input
                    id="Visitata?"
                    title="Visitata?"
                    type="checkbox"
                    name="isVisited"
                    checked={formData.isVisited}
                    onChange={handleInputChange}></input>
            </div>
            <button className="button-form" type="submit">Aggiungi Card</button>
        </form>
    );
}

export default CardForm;