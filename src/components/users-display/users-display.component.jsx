import axios from "axios";
import { useEffect, useState } from "react";

// render props
function UsersDisplay(props) {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  return props.render(users);
}

export default UsersDisplay;