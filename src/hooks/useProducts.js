import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products,setProducts] = useState([]);
    
    const url = `http://localhost:5000/inventory`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return [products,setProducts];
}

export default useProducts;