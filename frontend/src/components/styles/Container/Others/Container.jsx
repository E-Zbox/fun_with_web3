import styled from "styled-components";

export const FlexDivContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
    align-items: ${({ alignItems }) => alignItems || "center"};
`;
