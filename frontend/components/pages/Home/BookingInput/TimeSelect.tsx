import styled from "styled-components";

const Container = styled.div`
    display: grid;
    row-gap: 12px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    > div {
        margin-right: 12px;
        margin-bottom: 12px;
    }
`;

interface Props {
    onChange: (value: number) => void,
    value: number,
}

export const TimeSelect = ({ onChange, value }: Props) => {
    return (
        <Container>
            <div>Select a time</div>

            <CardsContainer>
                {
                    new Array(24)
                        .fill(null)
                        .map((_, i) =>
                            <TimeCard
                                onClick={() => onChange(i)}
                                isSelected={value === i}
                                value={i}
                            />
                        )
                }
            </CardsContainer>
        </Container>
    );
};

const TimeCardContainer = styled.div<{ isSelected: boolean }>`
    padding: 12px;
    border-radius: 2px;
    width: 64px;
    text-align: center;
    background-color: ${({ theme, isSelected }) => isSelected ? theme.colors.primary : "rgba(0,0,0,0.04)"};
    color:  ${({ theme, isSelected }) => isSelected ? "white" : ""};

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

const TimeCard = (
    { value, onClick, isSelected }: 
    { value: number, onClick: () => void, isSelected: boolean }
) => {
    return (
        <TimeCardContainer onClick={onClick} isSelected={isSelected}>
            {value}:00
        </TimeCardContainer>
    );
};