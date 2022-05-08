import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyProducts = () =>{
    const [myProducts,setMyProducts] = useState([]);
    const [user] = useAuthState(auth);
    const url = `http://localhost:5000/userinventory/${user.email}`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyProducts(data))
    }, []);

    return [myProducts,setMyProducts];
}

export default useMyProducts;