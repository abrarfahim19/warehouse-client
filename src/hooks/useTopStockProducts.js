import { useEffect, useState } from "react";

const useTopStockProducts = () =>{
    const [topProducts,setTopProducts] = useState([]);
    
    const url = `https://warehousemanagement123.herokuapp.com/maxstock`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setTopProducts(data))
    }, []);

    return [topProducts,setTopProducts];
}

export default useTopStockProducts;