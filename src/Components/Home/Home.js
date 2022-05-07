import React from 'react';
import useProducts from '../../hooks/useProducts';
import CustomModal from '../CustomModal/CustomModal';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>
            <CustomModal></CustomModal>
            <h1>This is Home</h1>
            <div className="row d-flex mx-auto align-items-center">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
            
        </div>
    );
};

export default Home;