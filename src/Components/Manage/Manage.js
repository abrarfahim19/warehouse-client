import React from 'react';
import useProducts from '../../hooks/useProducts';

const Manage = () => {
    const [products,setProducts] = useProducts();
    return (
        <div>
            <h2>This is manage Page</h2>
        </div>
    );
};

export default Manage;