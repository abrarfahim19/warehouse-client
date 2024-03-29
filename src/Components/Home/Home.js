import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import TopProducts from '../TopProducts/TopProducts';
import UserList from '../UserList/UserList';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>
            <img className='w-100' src='banner.png' alt="" />
            <h3 className='text-center'>The Items in WareHouse</h3>
            <div className="container mt-5 row d-flex mx-auto align-items-center">
            {
                products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
            <UserList></UserList>
            <TopProducts ></TopProducts>
        </div>
    );
};

export default Home;