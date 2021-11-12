import React from "react";
import PropTypes from "prop-types";
import { StyledLabel } from "./Label.styles";

function Label({children, ...props}) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

Label.propTypes = {};

export default Label;
