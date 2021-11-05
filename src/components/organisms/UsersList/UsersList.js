import React from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList } from "./UsersList.styles";

function UsersList() {
  return (
    <Wrapper>
      <StyledList>
        {users.map(user => (
            <UsersListItem userData={user}/>
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
