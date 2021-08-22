// import axios from "axios";
// import { useEffect, useState } from "react";

import useUsers from "../../hooks/use-users";

function UsersTable() {
  /* const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    }
    fetchUsers();
  }, []); */

  const users = useUsers();

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user) => <tr key={user.id}>
            <td>
              {user.id}
            </td>
            <td>
              {user.name}
            </td>
            <td>
              {user.username}
            </td>
            <td>
              {user.phone}
            </td>
          </tr>)
        }
      </tbody>
    </table>
  )
}

export default UsersTable;