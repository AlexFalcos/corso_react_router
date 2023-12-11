import './CardItem.css';

//function Card(props) {
function CardItem({ title, imgURL, isVisited, children }) {
    // const title = props.title;
    // const description = "Breve descrizone della card. Su due righe. Breve descrizone della card. Su due righe.";
    // const imgURL = props.imgURL;
    {/* Terzo modo */ }
    const visitedLabel = isVisited ? "✔️ visitata" : "❌ non visitata";
    const defaultDescription = children == "" ? `Breve descrizione della card di ${title}. Su due righe. Breve descrizione della card. Su due righe.` : `${children}`

    return (
        <div className="card-container rounded">
            <img src={imgURL}
                alt="" />
            <div className="titolo-card">
                <h2>{title}</h2>
                <p>
                    {/* {desciption} */}
                    {/* {children} */}
                    {/* Se non viene scritta una descrizione della Card uso una children di default */}
                    {defaultDescription}
                </p>
                {/* Primo modo */}
                {/* {isVisited ? <span>✔️ visitata</span> : <span>❌ non visitata</span>} */}
                {/* Secondo modo */}
                {/* <span>{isVisited ? "✔️ visitata" : "❌ non visitata"}</span> */}
                {/* Terzo modo */}
                {/* <span>{visitedLabel}</span> */}
                {/* Quarto modo */}
                {isVisited && <span style={{ color: "green" }}>✔️ visitata</span>}
                {!isVisited && <span style={{ color: "red" }}>❌ non visitata</span>}
            </div>
        </div>
    );
}

export default CardItem;