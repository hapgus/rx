import { createContext, useState } from "react";


export const LoadingContext = createContext({
    isLoading:false,
    setIsLoading:() => {}
});

export const LoadingProvider = ({ children }) => {

const initialLoadingState = true;
const [isLoading, setIsLoading] = useState(initialLoadingState);


    return (
        <LoadingContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
}
