import { useEffect, useState } from "react";

const useUserList =() =>{
    const [users,setUsers] = useState([]);
    
    const url = `http://localhost:5000/user`
    
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    return [users,setUsers];
}

export default useUserList;