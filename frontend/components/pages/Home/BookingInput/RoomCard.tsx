import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { MinorTitle } from "../../../core/Typography";

const Container = styled.div<{ isSelected: boolean }>`
    width: 125px;
    padding: 8px;
    border-radius: 4px;
    display: grid;
    row-gap: 4px;

    background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.primary : "white"};
    border: 1px solid ${({ theme, isSelected }) => isSelected ? theme.colors.primary : "rgba(0,0,0,0.1)"};
    color: ${({ isSelected }) => isSelected ? "white" : ""};

    transition: all 0.1s ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        color: white;
    }

    &:active {
        transform: scale(0.95);
    }
`;

interface Props {
    isSelected: boolean,
    onClick: () => void,
}

export const RoomCard = ({ isSelected, onClick }: Props) => {
    const theme = useContext(ThemeContext);

    return (
        <Container onClick={onClick} isSelected={isSelected}>
            <MinorTitle>Room 1</MinorTitle>
            <div>14 waiting</div>
        </Container>
    );
}