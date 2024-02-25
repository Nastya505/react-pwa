import React from 'react';
import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com/users';

const UsersPage = () => {
  const [users, setUsers] = React.useState([]);
  const [randomUserIndex, setRandomUserIndex] = React.useState(0);

  const getUsers = async () => {
    const response = await axios.get(API);
    setUsers(response.data);
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * users.length);
    setRandomUserIndex(randomIndex);
  }, [users]);

  return (
    <div style={{ textAlign: 'center' }}>
      {
        users.length > 0 &&
        <div>{users[randomUserIndex].name}</div>
      }
    </div>
  )
}

export default UsersPage;