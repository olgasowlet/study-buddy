import React from "react";
import PropTypes from "prop-types";
import { Container, StyledP, Wrapper } from "./UsersListItem.styles";
import AvarageGrade from "components/atoms/AvarageGrade/AvarageGrade";
import Button from "components/atoms/Button/Button";
function UsersListItem({
  deleteUser,
  index,
  userData: { name, attendance, avarage = "0%" },
}) {
  return (
    <Wrapper>
      <AvarageGrade avarage={avarage} />
      <Container>
        <StyledP name>
          {name}
          <Button onClick={() => deleteUser(index)} />
        </StyledP>
        <StyledP attendance>attendace: {attendance}</StyledP>
      </Container>
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
