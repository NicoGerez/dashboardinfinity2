import React,{ useEffect, useState } from "react";
import Card from "../card/Card";
import ListCategories from "../ListCategories/listCategories";
// import LastProduct from "../LastProduct/lastProduct";
import ListProducts from "../listProduct/listProduct";
import './products.css'
 
function Productos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null); 

    useEffect(() => {
      fetch('http://localhost:3030/api/products/')
      .then(response => { 
        if (response.ok){
         return response.json()
        }else{
        throw response;}
      }).then(data => setData(data))
      .catch(error => {
        console.log("error:" + error)
        setError(error)}
        )
      .finally(() => setLoading(false))
    }, []);
    console.log(data);

    function categories() { 
      if (loading) { return "loading..." } 
      else {return data.countByCategory.map((category, idx) => <ListCategories name={category.category_name} value={category.products_count} key={idx} /> )
    } 
  }    function listProducts() { 
    if (loading) { return "loading..." } 
    else {return data.products.map((product, idx) => <ListProducts name={product.name} category={product.relationsOneToMany[0].category.name} key={idx} /> )
  } }

    function lastProduct() { 
           if (loading) { return "loading..." } 
        else {return <div className="card-last">
                          <p className="last-title"> Ultimo Producto</p>
                          <p className="last-title">{data.products[data.products.length-1].name}</p>
                          {/* <p className="last-desc">{data.products[data.products.length-1].description}</p> */}
                          <img className="last-img" src= {data.products[data.products.length-1].image}/>
                          <p className="last-price">$ {data.products[data.products.length-1].price}</p>
        </div>
    } }

    return (
        <div id="products">
          <div className="panels">
            <Card loading={loading} error={error} value={loading ? "..." : data.count} title={"Productos"} />
            <Card loading={loading} error={error} value={loading ? "..." : data.countByCategory.length} title={"Categorías"} />
            {/* <Card loading={loading} error={error} value={loading ? "..." : data.products[data.products.length-1].name} title={"ULTIMO PRODUCTO"} /> */}
            
          </div>

          <section className="categories"> 
            {categories()}
          </section>
          <section className="list-products"> 
            {listProducts()}
          </section>
          <section className="last-product"> 
          {lastProduct()}
          </section>

        </div>
        
    )

}
export default Productos;
