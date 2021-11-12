import React, { useState } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UsersListItem.styles";
import AvarageGrade from "components/atoms/AvarageGrade/AvarageGrade";
import UserData from "components/atoms/UserData/UserData";
function UsersListItem({ deleteUser, index, userData: { name, attendance, avarage = "0%" } }) {
  return (
    <Wrapper>
      <AvarageGrade avarage={avarage}/>
      <UserData name={name} attendance={attendance} index={index} deleteUser={deleteUser}/>
    </Wrapper>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    avarage: PropTypes.string,
  }),
};

export default UsersListItem;
