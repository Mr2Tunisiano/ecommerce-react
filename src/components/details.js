import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  let [product,SetProduct] = useState({})
  let params = useParams()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(data=>SetProduct(data))
  },[])
  return (
    <>
  <div className="card" style={{width: '40%'}}>
  <img src={product.image} className="card-img-top" alt={product.title} style={{width: "80%"}} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
        <p className="card-text"> {product.description}</p>
        <h4>{product.price} $</h4>
    </div>
  </div>
</>
  )
}
export default Details;