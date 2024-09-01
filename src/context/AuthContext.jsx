import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode"


let logoutTimer;

export const AuthContext = createContext({
    token: '',
    currentUser: null,

    // login: (token) => { },
    login: () => { },
    logout: () => { },

    loggedInUser: null,
    setLoggedInUser: () => null,


    registeredUser: null,
    setRegisteredUser: () => { },

})

// -----------------------------------------------------
// LOGIC TO CREATE TOOL: TOKEN EXPIRATION 
// -----------------------------------------------------

//configure dates for token expiration
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

const getUserIdFromToken = (token) => {
    const decodedToken = token ? jwtDecode(token) : null;
    return decodedToken?.userId;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('TOKEN-LOGIN-HANDLER');
    const storedExpirationDate = localStorage.getItem('EXP-LOGIN-HANDLER');

    if (!storedToken || !storedExpirationDate) {
        return null;
    }

    const remainingTime = calculateRemainingTime(storedExpirationDate);
    //30 mins
    // if (remainingTime <= 1800000) {
    if (remainingTime <= 0) {


        localStorage.removeItem('TOKEN-LOGIN-HANDLER');
        localStorage.removeItem('EXP-LOGIN-HANDLER');
        const currentUserIdFromToken = getUserIdFromToken(storedToken);
        if (currentUserIdFromToken) {
            localStorage.removeItem(`USER_DATA_${currentUserIdFromToken}`);
        }
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
    }
};

// -----------------------------------------------------
// PROVIDER WRAPPING APP AND PROVIDING VALUES TO CHILD COMPONENTS
// -----------------------------------------------------
export const AuthProvider = ({ children }) => {
    const redirect = useNavigate();
    const tokenData = retrieveStoredToken();
    // const [token, setToken] = useState(initialToken);
    const [token, setToken] = useState(tokenData ? tokenData.token : null);

    const myUserIsLoggedIn = !!token;
    const [loggedInUser, setLoggedInUser] = useState(null);
    const currentUserId = getUserIdFromToken(token);

    // let initialToken;
    // if (tokenData) { initialToken = tokenData.token; }




    //---------------------------------------
    //---LOGGING USERS OUT
    //---------------------------------------

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('TOKEN-LOGIN-HANDLER');
        localStorage.removeItem('EXP-LOGIN-HANDLER');
        if (currentUserId) {
            localStorage.removeItem(`USER_DATA_${currentUserId}`);
        }
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
        redirect('/member/login');
    }, [redirect, currentUserId]);


    //---------------------------------------
    //---LOGGING USERS IN
    //---------------------------------------
    const loginHandler = (token, expirationTime) => {
        setToken(token);

        localStorage.setItem('TOKEN-LOGIN-HANDLER', token);//what we se in local storage
        localStorage.setItem('EXP-LOGIN-HANDLER', expirationTime);//what we se in local storage
        // localStorage.setItem('USER-LOGIN-HANDLER', JSON.stringify(user));//what we se in local storage
        const remainingTime = calculateRemainingTime(expirationTime);
        //  logoutTimer = setTimeout(logoutHandler, 9000); // testing - log you out in 3 seconds
        logoutTimer = setTimeout(logoutHandler, remainingTime); // testing - log you out in 3 seconds

    };
    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }

        // Cleanup function to clear the timer when the component unmounts or the dependencies change
        return () => {
            if (logoutTimer) {
                clearTimeout(logoutTimer);
            }
        };
    }, [tokenData, logoutHandler]); // Added logoutHandler as a dependency

    // useEffect to check token expiration regularly and redirect if needed
    useEffect(() => {
        const interval = setInterval(() => {
            if (token) {
                const tokenExpirationTime = localStorage.getItem('EXP-LOGIN-HANDLER');
                const remainingTime = calculateRemainingTime(tokenExpirationTime);

                if (remainingTime <= 0) {
                    logoutHandler(); // Call logoutHandler to handle token expiration
                }
            }
        }, 1000); // Check every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [token, logoutHandler]);

    // useEffect(() => {
    //     if (tokenData) {

    //         logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    //     }
    // }, [tokenData]);

    const value = {
        token: token,
        currentUser: myUserIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        loggedInUser,
        setLoggedInUser,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}