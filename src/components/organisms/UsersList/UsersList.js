import React, { useState, useEffect } from "react";
import { users as data } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList, StyledTitle } from "./UsersList.styles";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button.styles";

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
  const [name, setName] = useState('');

  const deleteUser = (index) => {
    const newUsers = [...users.slice(0, index), ...users.slice(index + 1)];

    setUsers(newUsers);
  };

  useEffect(() => {
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" name="name" id="name" value={name} onChange={onNameChange}/>
        <FormField label="Attendance" name="attendance" id="attendance" />
        <FormField label="Avarage" name="avarage" id="avarage" />
        <Button>Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>{isLoading ? "Loading..." : "Students list"}</StyledTitle>
        <StyledList>
          {users.map((user, i) => (
            <UsersListItem userData={user} index={i} deleteUser={deleteUser} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
}

export default UsersList;
