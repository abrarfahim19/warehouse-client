import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products,setProducts] = useState([]);
    
    const url = `https://warehousemanagement123.herokuapp.com/inventory`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return [products,setProducts];
}

export default useProducts;