// create context
import { createContext, useState } from "react";
import API from "../utils/API";

// create context
const SplitwiseContext = createContext();

// create provider
export const SplitwiseProvider = ({ children }) => {
    return (
        <SplitwiseContext.Provider value={{}}>
            {children}
        </SplitwiseContext.Provider>
    );
}
