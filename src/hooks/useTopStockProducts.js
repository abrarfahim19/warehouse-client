import { useEffect, useState } from "react";

const useTopStockProducts = () =>{
    const [topProducts,setTopProducts] = useState([]);
    
    const url = `http://localhost:5000/maxstock`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setTopProducts(data))
    }, []);

    return [topProducts,setTopProducts];
}

export default useTopStockProducts;