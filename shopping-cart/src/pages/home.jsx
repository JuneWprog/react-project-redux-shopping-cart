import React from 'react'
import {useState, useEffect} from 'react'
// import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    async function fetchProducts() {
        setLoading(true);
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            if(data && data.length > 0){
                setProducts(data);
                setLoading(false);
            }

        }
        catch(error){
            console.log(error);
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchProducts();
    }, []); //call only once


  return (
    <div>
        {/* {loading && <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />} */}
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {products && products.length>0 ? products.map((product) => (
                <ProductTile key={product.id} product={product} />
            )):
            <h2>No products found</h2>
            }
        </div>
      
    </div>
  )
}

export default Home
