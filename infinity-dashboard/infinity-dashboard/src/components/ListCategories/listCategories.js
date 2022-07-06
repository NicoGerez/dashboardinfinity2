import "./listCategories.css"
function ListItem(props) {

    return (
        <div className="listCategories">
            <h5 className="list-title">{props.name}</h5>
            <p className="list-value">{props.value}</p>
        </div>
    );
}

export default ListItem;