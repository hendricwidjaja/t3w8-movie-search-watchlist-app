import React from 'react';
import { useNotification } from '../context/NotificationContext';

export default function NotificationBar() {
    const { notification } = useNotification();

    if (!notification)
        return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                backgroundColor: 'green',
                color: 'white',
                padding: '10 px 20px',
                borderRadius: '5px',
                zIndex: 5
            }}
        >
            {notification}
        </div>
    )
}