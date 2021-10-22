import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button/Button";
import { Wrapper } from "./UsersListItem.styles";
import Avarage from "components/atoms/Avarage/Avarage";

function UsersListItem({ userData: { name, attendance, avarage = "0%" } }) {
  return (
    <Wrapper>
      <Avarage avarage={avarage}/>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <Button />
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
