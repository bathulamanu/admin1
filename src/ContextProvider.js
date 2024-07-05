import React, { createContext, useState } from 'react';
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [trigger, setTrigger] = useState(false);

    const triggerChildUpdate = () => {
        setTrigger(true); 
    };

    return (
        <AppContext.Provider value={{ trigger, triggerChildUpdate }}>
            {children}
        </AppContext.Provider>
    );
};
