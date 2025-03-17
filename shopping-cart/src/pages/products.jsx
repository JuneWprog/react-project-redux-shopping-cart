import React, {useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux';
// import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";
import { fetchData } from '../store/slices/products-slice'

const Home = () => {

    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);

      if (status === 'loading') return <p>Loading...</p>;
      if (status === 'failed') return <p>Error: {error}</p>;
 

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
