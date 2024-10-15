import React from 'react'
interface User {
  id: number;
  name: string;
}

const userspage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users:User[] = await res.json();  //promise ekak nisa await dannwa . getting response
  
  return (
    <>
    <h1>Users</h1>
    <ul>
      {users.map(user =><li key={user.id}>{user.name}</li> )}

    </ul>
    
    
    
    
    </>
  )
}

export default userspage