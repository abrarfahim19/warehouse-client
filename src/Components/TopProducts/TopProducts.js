import React from 'react';
import useTopStockProducts from '../../hooks/useTopStockProducts';
import Product from '../Product/Product';

const TopProducts = () => {
    const [topProducts,setTopProducts] = useTopStockProducts();
    return (
        <div className="container mt-5">
            <h3 className='text-center'>Most Stocked Product of WareHouse</h3>
            {
                topProducts.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default TopProducts;