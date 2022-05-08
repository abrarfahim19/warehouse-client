import { useEffect, useState } from "react"

const useProductDetails = (id) =>{
    const [product,setProduct] = useState({});

    useEffect(()=>{
        fetch(`https://warehousemanagement123.herokuapp.com/inventory/${id}`)
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[id])
    return [product,setProduct]
}

export default useProductDetails;