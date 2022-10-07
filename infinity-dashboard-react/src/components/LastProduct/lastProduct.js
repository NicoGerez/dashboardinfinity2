import './lastProduct.css'

function LastProduct(props) {

    return (
        <div className="lastProduct">
            <p>{props.name}</p>
        </div>   
    );
}

export default LastProduct;