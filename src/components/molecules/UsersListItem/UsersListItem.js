import React from "react";
import PropTypes from "prop-types";
import { Container, StyledP, Wrapper } from "./UsersListItem.styles";
import AvarageGrade from "components/atoms/AvarageGrade/AvarageGrade";
import StudentButton from "components/atoms/StudentButton/StudentButton";
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
          <StudentButton onClick={() => deleteUser(index)} />
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
  deleteUser: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
};

export default UsersListItem;
