function UsersTable(props) {

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
          props.users.map((user) => <tr key={user.id}>
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