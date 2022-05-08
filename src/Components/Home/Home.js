import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>
            <img className='w-100' src='banner.png' alt="" />
            <div className="row d-flex mx-auto align-items-center">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
            
        </div>
    );
};

export default Home;