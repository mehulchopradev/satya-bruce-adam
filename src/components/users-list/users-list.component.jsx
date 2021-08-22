function UsersList(props) {
  return (
    <ul>
      {
        props.users.map((user) => <li key={user.id}>
          {user.name} -- {user.email} -- {user.website}
        </li>)
      }
    </ul>
  )
}

export default UsersList;