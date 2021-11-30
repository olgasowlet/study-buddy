import React from "react";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList, StyledTitle } from "./UsersList.styles";

function UsersList({ users, deleteUser, isLoading }) {
  return (
    <Wrapper>
      <StyledTitle>{isLoading ? "Loading..." : "Students list"}</StyledTitle>
      <StyledList>
        {users.map((user, i) => (
          <UsersListItem userData={user} index={i} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
