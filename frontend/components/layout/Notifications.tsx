import { useEffect } from "react";
import { atom, useRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";

export const notificationsState = atom({
    key: 'notificationsState', 
    default: [],
});

const Container = styled.div`
    position: absolute;
    left: 12px;
    bottom: 12px;
    display: flex;
    flex-direction: column-reverse;

    > div {
        margin-top: 12px;
    }
`;

export const Notifications = () => {
    const [notifications, setNotifications] = useRecoilState(notificationsState);

    return (
        <Container>
            {
                notifications.map(({ content, timestamp, isError }) => 
                    <Notification 
                        content={content} 
                        isError={isError}
                        timestamp={timestamp}
                        clearNotification={() => setNotifications(n => n.filter(({ timestamp: _timestamp }) => _timestamp !== timestamp))}
                        key={timestamp}
                    />
                )
            }
        </Container>
    );
}

const NotificationContainer = styled.div<{isError: boolean | undefined}>`
    width: 240px;
    background-color: ${({ theme, isError }) => isError ? "red" : theme.colors.secondary};
    border-radius: 4px;
    padding: 12px;
    color: white;
    display: grid;
    row-gap: 6px;

    transition: all 0.1s ease-out;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.95);
    }
`;

const Notification = ({ content, timestamp, clearNotification, isError }) => {
    const [notifications, setNotifications] = useRecoilState(notificationsState);

    useEffect(() => {
        setTimeout(() => {
            clearNotification();
        }, 3000);
    }, []);

    return (
        <NotificationContainer isError={isError} onClick={clearNotification}>
            <div>{new Date(timestamp).toLocaleTimeString()}</div>
            <div>{content}</div>
        </NotificationContainer>
    )
};