import { useState, useEffect } from "react";
import axios from "axios";

function useUsers() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  return users;
}

export default useUsers;