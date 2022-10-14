import styled from "styled-components";

export const HeaderText = styled.h4`
    font-size: 2.4rem;
`;

export const SubText1 = styled.h6`
    font-size: 1.8rem;
    font-weight: 800;
`;

export const SubText2 = styled.span`
    font-size: 1.25rem;
    font-weight: 800;
    width: fit-content;
`;

export const NormalText = styled.p`
    text-align: ${({ textAlign }) => textAlign};
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0px var(--seven-px);
    margin: var(--ten-px);
`;

export const UL = styled.ul`
    padding-left: var(--ten-px);
`;

export const List = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: var(--seven-px) 0px;
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0px var(--seven-px);
`;
