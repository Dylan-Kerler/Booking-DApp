import { RoomCard } from "./RoomCard";
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

export const RoomSelect = ({ value, onChange }: Props) => {
    return (
        <Container>
            <div>Select a room</div>
            <CardsContainer>
                {
                    [0, 1,2,3,4,5,6].map(index => 
                        <RoomCard
                            onClick={() => onChange(index)}
                            isSelected={value === index}
                        />
                    )
                }
            </CardsContainer>
        </Container>
    );
}