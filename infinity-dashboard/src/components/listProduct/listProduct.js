import "./listProduct.css"
function ListProducts(props) {
    return (
        <div className="listProduct">
            <p>{props.name}</p>
            <p>{props.category}</p>
        </div>
    );
}

export default ListProducts;