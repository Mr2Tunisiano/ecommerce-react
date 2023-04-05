import React, { useEffect, useState } from "react"
import Product from "./product"


function About() {
  function GetAllProds() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>Setproduct(data))
  }
  function GetProductsInCat(cat) {
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res=>res.json())
            .then(data=>Setproduct(data))
  }
let [category,setCat] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(data=>setCat(data))
              },[])
let [product, Setproduct] = useState([])
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>Setproduct(data))
},[])
  return (
<>
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/originals/75/d9/c6/75d9c6ed7781dec8624417c77b497b1f.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.interestingengineering.com/1200x675/img/iea/Z3G8WdazOm/cool-office-gadgets-ie-header.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.immediate.co.uk/production/volatile/sites/4/2022/12/Meta-Quest-32f5cdf.jpg?quality=90&resize=700,335" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* Categories */}
<ul className="nav justify-content-center m-4 nav-tabs">
  <li className="nav-item">
    <button className="nav-link active" aria-current="page" onClick={GetAllProds}>All</button>
  </li>
  {
    category.map((categorie)=> {
      return (
        <li className="nav-item" key={categorie}>
          <button className="nav-link" onClick={() => GetProductsInCat(categorie)}>{categorie}</button>
        </li>
      )
    })
  }
</ul>
{/* All prods  */}
<div className="container">
<div className="row d-flex align-items-stretch">
  {
    product.map((item) => {
      return(
        <div key={item.id} className="col-3">
          <Product data={item} />
        </div>
      )
    })
  }
</div>
</div>
</>
  )
}
export default About