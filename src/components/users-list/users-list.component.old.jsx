/* import axios from "axios";
import { useEffect, useState } from "react"; */
import useUsers from "../../hooks/use-users";

function UsersList() {
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
    <ul>
      {
        users.map((user) => <li key={user.id}>
          {user.name} -- {user.email} -- {user.website}
        </li>)
      }
    </ul>
  )
}

export default UsersList;