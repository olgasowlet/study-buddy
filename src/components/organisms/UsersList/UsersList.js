import React, { useState, useEffect } from "react";
import { users as data } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList } from "./UsersList.styles";

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve([...data]);
      } else {
        reject({ message: "Error" });
      }
    }, 2000);
  });
};

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteUser = (index) => {
    const newUsers = [...users.slice(0, index), ...users.slice(index + 1)];

    setUsers(newUsers);
  };

  useEffect(() => {
    mockAPI()
    .then((data) => {
      setIsLoading(false);
      setUsers(data)
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h2>{isLoading ? "Loading..." : null}</h2>
      <StyledList>
        {users.map((user, i) => (
          <UsersListItem userData={user} index={i} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default UsersList;
