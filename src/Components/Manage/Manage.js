import React from 'react';
import useProducts from '../../hooks/useProducts';
import MyTable from '../MyTable/MyTable';

const Manage = () => {
    const [products,setProducts] = useProducts();
    return (
        <div>
            {
                products.map(product => <MyTable key={product._id} product={product}></MyTable>)
            }
            
        </div>
    );
};

export default Manage;