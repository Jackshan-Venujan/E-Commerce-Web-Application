import { Fragment, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home(){
  const [products, SetProducts] = useState([]);
  

    return <Fragment>
    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        <ProductCard/>
      </div>
    </section>



    </Fragment>
}