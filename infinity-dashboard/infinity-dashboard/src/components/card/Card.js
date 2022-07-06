import "./card.css"

function Card(props) {
    const value = () => {
        if(props.loading || props.error !== null){
        return "..."
    } else {return props.value}}

    return (
        <article className="card">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-value">{value()}</p>
        </article>
    );
}

export default Card;