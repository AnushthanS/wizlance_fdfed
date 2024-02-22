import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Preloader } from '../animations';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/admin-users');
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userMail) => {
    try {
      await axios.post('/api/admin-delete', { deleteFromEmail: userMail });
      console.log(`User ${userMail} deleted successfully`);
      setUsers(setUsers(prevUsers => prevUsers.filter((user) => user.email !== userMail)));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (

    <div className="w-auto h-auto px-4 overflow-y-scroll no-scrollbar">
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
          {users.map((user, index) =>
          (
            <tr key={user.id}>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{index + 1}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{`${user.firstName} ${user.lastName}`}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{user.email}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>
                <button className=' border-red-600 border-2 bg-red-600 text-white p-2 rounded-md' onClick={() => handleDeleteUser(user.email)}>Delete</button>
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
};


export default Users;



