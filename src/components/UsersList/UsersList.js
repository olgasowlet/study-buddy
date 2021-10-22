import React from "react";
import { users } from "data/users";
import UsersListItem from "components/UsersListItem/UsersListItem";

function UsersList() {
  return (
    <div>
      <ul>
        {users.map(user => (
            <UsersListItem userData={user}/>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
