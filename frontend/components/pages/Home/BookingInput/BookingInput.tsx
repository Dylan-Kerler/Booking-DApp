import { MainTitle } from "../../../core/Typography"
import { RoomSelect } from "./RoomSelect"
import styled from "styled-components";
import { TimeSelect } from "./TimeSelect";
import { Button } from "../../../core/Button";

const Container = styled.div`
    display: grid;
    row-gap: 12px;
`;

export const BookingInput = () => {
    return (
        <Container>
            <MainTitle>Book a room.</MainTitle>

            
            <RoomSelect/>
            <TimeSelect/>

            <Button style={{ width: 240, justifySelf: "right", }}>
                Book Room
            </Button>
        </Container>
    );
};