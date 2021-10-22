import React from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper } from "./UsersList.styles";

function UsersList() {
  return (
    <Wrapper>
      <ul>
        {users.map(user => (
            <UsersListItem userData={user}/>
        ))}
      </ul>
    </Wrapper>
  );
}

export default UsersList;
