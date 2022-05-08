import { useEffect, useState } from "react";

const useUserList =() =>{
    const [users,setUsers] = useState([]);
    
    const url = `https://warehousemanagement123.herokuapp.com/user`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    return [users,setUsers];
}

export default useUserList;