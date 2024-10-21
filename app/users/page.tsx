import React from 'react'
interface User {
  id: number;
  name: string;
  email: string;
}

const userspage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store' });
  const users:User[] = await res.json();  //promise ekak nisa await dannwa . getting response
  
  return (
    <>
    <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user =><tr key={user.id}><th>
        {user.name}
      </th>
      <th>
        {user.email}</th></tr> )}
      </tbody>
    </table>
    
    
    
    
    </>
  )
}

export default userspage