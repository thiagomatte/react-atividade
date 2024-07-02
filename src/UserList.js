import React from 'react';
 
const UserList = ({ users, onEdit, onDelete}) => {
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <span>{user.name} - {user.email}</span>
                    <button onClick={() => onEdit(user)}>Edit</button>
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};
 
export default UserList;