/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function UserComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className='flex-row-reverse justify-center m-10'>
    <h1 className='flex m-5 flex-start text-3xl font-bold text-red-600 '>DATABASE</h1>
    <table className='text-left table-auto'>
        <thead>
            <tr>
                <th className='px-4 py-2'>Username</th>
                <th className='px-4 py-2'>Password</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td className='border px-4 py-2'>{user.username}</td>
                    <td className='border px-4 py-2'>{user.password}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  );
}

// css


export default UserComponent;
