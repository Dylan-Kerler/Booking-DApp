import { RoomCard } from "./RoomCard";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    row-gap: 12px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
        margin-bottom: 12px;
    }
`;

export const RoomSelect = () => {
    return (
        <Container>
            <div>Select a room</div>
            <CardsContainer>
                {
                    [1,2,3,4,5,6].map(index => <RoomCard/>)
                }
            </CardsContainer>
        </Container>
    );
}