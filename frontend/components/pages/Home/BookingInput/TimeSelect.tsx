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

export const TimeSelect = () => {
    return (
        <Container>
            <div>Select a time</div>

            <CardsContainer>
                {
                    new Array(24)
                        .fill(null)
                        .map((_, i) =>
                            <TimeCard
                                onClick={() => {}}
                                value={i}
                            />
                        )
                }
            </CardsContainer>
        </Container>
    );
};

const TimeCardContainer = styled.div`
    padding: 12px;
    background-color: rgba(0,0,0,0.04);
    border-radius: 2px;
    width: 64px;
    text-align: center;

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

const TimeCard = ({ value, onClick }: { value: number, onClick: () => void }) => {
    return (
        <TimeCardContainer onClick={onClick}>
            {value}:00
        </TimeCardContainer>
    );
};