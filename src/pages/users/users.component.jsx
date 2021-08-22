// import UsersList from "../../components/users-list/users-list.component";
// import UsersTable from "../../components/users-table/users-table.component";
// import UsersDisplay from "../../components/users-display/users-display.component";

import withUsersDisplay from '../../components/hocs/with-users-display.component';
// import useUsers from "../../hooks/use-users";

// const UsersListWithData = withUsersDisplay(UsersList);
// const UsersTableWithData = withUsersDisplay(UsersTable);

import UsersList from '../../components/users-list/users-list.component.old';
import UsersTable from '../../components/users-table/users-table.component.old';

function UsersApp() {
  return (
    <>
      <h2>Users list</h2>
      <UsersList/>
      <UsersTable/>
      { /* <UsersListWithData/>
      <UsersTableWithData/> */
      }
      {/* <UsersDisplay render={users => users.map((user) => <li key={user.id}>
          {user.name} -- {user.email} -- {user.website}
        </li>)}/>

      <UsersDisplay render={users => <table border="1">
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
        </table>}/> */}

      { /* <UsersList/>
        <UsersTable/> */
      }
    </>
  )
}

export default UsersApp;