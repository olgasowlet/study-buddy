import React from "react";
import PropTypes from "prop-types";
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

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default UsersList;
