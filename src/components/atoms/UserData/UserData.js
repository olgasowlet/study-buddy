import React from "react";
import PropTypes from "prop-types";
import { StyledP, Container } from "./UserData.styles";
import Button from "../Button/Button";
function UserData({deleteUser, index, name, attendance }) {
  return (
    <Container>
      <StyledP name>
        {name}
        <Button onClick={() => deleteUser(index)}/>
      </StyledP>
      <StyledP attendance>attendace: {attendance}</StyledP>
    </Container>
  );
}

UserData.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
};

export default UserData;
