import React, { useState, useEffect} from 'react';
 
const UserForm = ({ onSave, selectedUser }) => {
    const [user, setUser] = useState({ name: '', email: ''});
 
    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        }
    }, [selectedUser]);
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value});
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(user);
        setUser({ name: '', email: ''});
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
            />
            <button type="submit">Save</button>
        </form>
    );
};
 
export default UserForm;
 