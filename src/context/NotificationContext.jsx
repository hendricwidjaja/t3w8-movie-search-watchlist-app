import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
    const [notification, setNotification] = useState(null);

    const showNotification = (message) => {
        setNotification(message);
        // Auto-hide after 3 seconds
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <NotificationContext.Provider value={{ notification, showNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}

export function useNotification() {
    let context = useContext(NotificationContext);
    if (!context) {
        console.log('No new notification.');
    }
    return context;
}