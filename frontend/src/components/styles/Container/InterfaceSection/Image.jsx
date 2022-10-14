import styled from "styled-components";

export const Loader = styled.img`
    --size: 50px;
    width: var(--size);
    height: var(--size);
    align-self: center;
    background-position: center;
`;

export const HeaderLogo = styled.img`
    --size: 40px;
    width: var(--size);
    height: var(--size);
`;

export const ContentImage = styled.img`
    --size: 300px;
    width: ${({ width }) => width || "var(--size)"};
    height: ${({ height }) => height || "var(--size)"};
`;
