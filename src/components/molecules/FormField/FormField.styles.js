import { StyledLabel } from "components/atoms/Label/Label.styles";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${StyledLabel} {
        margin: 10px 0;
    }
`;