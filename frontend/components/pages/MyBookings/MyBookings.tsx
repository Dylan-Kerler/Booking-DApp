import { MainTitle } from "../../core/Typography"

import styled from "styled-components";

const Container = styled.div`
    display: grid;
    row-gap: 24px;
`;

export const MyBookings = () => {
    return (
        <Container>
            <MainTitle>My Bookings.</MainTitle>
        </Container>
    );
}