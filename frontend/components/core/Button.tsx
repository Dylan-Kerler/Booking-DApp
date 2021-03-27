import styled from "styled-components";

export const Button = styled.div`
    background-color: ${({ theme, secondary }) => secondary ? theme.colors.secondary : theme.colors.primary};
    padding: 12px 18px;
    border-radius: 4px;
    color: white;

    cursor: pointer;
    user-select: none;
    transition: all 0.1s ease-out;
    &:active {
        transform: scale(0.95);
    }

    text-align: center;
`;