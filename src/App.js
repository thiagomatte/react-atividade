import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserList from './UserList';
 
const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
 
  useEffect(() => {
    fetchUsers();
  }, []);
 
  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3001/users`);
    setUsers(response.data);
  };
 
  const handleSave = async (user) => {
    if (user.id) {
      await axios.put(`http://localhost:3001/users/${user.id}`, user);
    } else {
      await axios.post(`http://localhost:3001/users`, user);
    }
    fetchUsers();
    setSelectedUser(null);
  };
 
  const handleEdit = (user) => {
    setSelectedUser(user);
  };
 
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    fetchUsers();
  };
 
  return (
    <div>
      <UserForm onSave={handleSave} selectedUser={selectedUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};
 
 
export default App;