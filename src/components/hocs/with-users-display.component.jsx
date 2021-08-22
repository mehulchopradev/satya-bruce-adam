import { useState, useEffect } from "react";
import axios from "axios";

function withUsersDisplay(LowerOrderComponent) {
  return function UsersDisplayWithData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      }
      fetchUsers();
    }, []);

    return (
      <LowerOrderComponent users={users}></LowerOrderComponent>
    )    
  }
}

export default withUsersDisplay;