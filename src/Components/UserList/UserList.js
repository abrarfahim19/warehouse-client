import React from 'react';
import useUserList from '../../hooks/useUserLIst';

const UserList = () => {
    const [users,setUsers] = useUserList();
    return (
        <div className="container mt-5">
            <h3 className='text-center '>List of Users</h3>
            <ul>
            {
                users.map(user => <li key={user._id} className="text-danger">{user.user.email}</li> )
            }
            </ul>
        </div>
    );
};

export default UserList;