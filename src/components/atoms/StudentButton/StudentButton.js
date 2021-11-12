import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import { StyledButton } from "./StudentButton.styles";

const StudentButton = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default StudentButton;
