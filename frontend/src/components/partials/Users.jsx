import React, { useState, useEffect } from 'react';

const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 4, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  { id: 5, name: 'John Doe', email: 'john@example.com' },
  { id: 6, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 7, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  { id: 8, name: 'John Doe', email: 'john@example.com' },
  { id: 9, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 10, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  { id: 11, name: 'John Doe', email: 'john@example.com' },
  { id: 12, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 13, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  { id: 14, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  { id: 15, name: 'John Doe', email: 'john@example.com' },
  { id: 16, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 17, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  { id: 18, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  { id: 19, name: 'John Doe', email: 'john@example.com' },
  { id: 20, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 21, name: 'Rishabh Jha', email: 'rishabh@example.com' },
  
  
];

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (

    <div className="user-table-container mt-10 m-48 max-h-[80vh] overflow-y-scroll">
      <h2 className=' text-2xl m-3'>Total Users: {users.length}</h2>
      <table className="user-table w-[100%]">
        <thead>
          <tr>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>ID</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Name</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Email</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{user.id}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{user.name}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{user.email}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>
                <button className=' border-red-600 border-2 bg-red-600 text-white p-2 rounded-md' onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Users;



