import React from 'react'
import {useState, useEffect} from 'react'
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // const sampleData =
    // {
    // "id": 1,
    // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    // "price": 109.95,
    // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    // "category": "men's clothing",
    // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    // "rating": {
    // "rate": 3.9,
    // "count": 120
    // }
    // },
    


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
        {loading && <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />}
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
