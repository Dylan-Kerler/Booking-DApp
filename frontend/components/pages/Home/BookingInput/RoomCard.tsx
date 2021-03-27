import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { MinorTitle } from "../../../core/Typography";

const Container = styled.div`
    width: 135px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 8px;
    border-radius: 4px;
    display: grid;
    row-gap: 4px;

    transition: all 0.1s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        cursor: pointer;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const RoomCard = () => {
    const theme = useContext(ThemeContext);

    return (
        <Container>
            <MinorTitle>Room 1</MinorTitle>
            <div>14 waiting</div>
        </Container>
    );
}