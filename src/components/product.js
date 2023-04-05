
import { Link } from "react-router-dom";
function Product(props) {
  return (
    <>
  <div className="card" style={{width: '18rem', minHeight: '300px'}}>
  <img src={props.data.image} className="card-img-top" alt={props.data.title} style={{width: "100%",height: "200px"}} />
    <div className="card-body">
      <h5 className="card-title">{props.data.title}</h5>
      {props.data.description.length < 120 ? (
        <p className="card-text"> {props.data.description}</p>
      ) : (
        <>
          <p className="card-text"> {props.data.description.slice(0, 120)}<b>  ...</b></p>
        </>
      )}
      <Link to={`/product/${props.data.id}`} className="btn btn-primary">See details</Link>
    </div>
  </div>
</>
  )
}

export default Product;