import React from "react";
import PropTypes from "prop-types";
import { StyledTitle, Wrapper } from "../UsersList/UsersList.styles";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button.styles";

const AddUserForm = ({handleAdduser, inputsValues, onInputChange}) => {
  return (
    <Wrapper as="form" onSubmit={(e) => handleAdduser(e)}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField
        label="Name"
        name="name"
        id="name"
        value={inputsValues.name}
        onChange={onInputChange}
      />
      <FormField
        label="Attendance"
        name="attendance"
        id="attendance"
        value={inputsValues.attendance}
        onChange={onInputChange}
      />
      <FormField
        label="Avarage"
        name="avarage"
        id="avarage"
        value={inputsValues.avarage}
        onChange={onInputChange}
      />
      <Button type="submit">Add</Button>
    </Wrapper>
  );
}

AddUserForm.propTypes = {
  handleAdduser: PropTypes.func.isRequired,
  inputsValues: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default AddUserForm;
