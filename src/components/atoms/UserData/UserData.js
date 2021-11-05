import React from "react";
import PropTypes from "prop-types";
import { StyledP, Container } from "./UserData.styles";

function UserData({ name, attendance }) {
  return (
    <Container>
      <StyledP name>{name}</StyledP>
      <StyledP attendance>attendace: {attendance}</StyledP>
    </Container>
  );
}

UserData.propTypes = {
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
};

export default UserData;
