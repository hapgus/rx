import { useContext, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

export const useAuthHook = () => {
    return useContext(AuthContext);
};

export const useAuthUser = () => {
    const { token } = useAuthHook();

    // Decode token safely and initialize only once
    const decodedToken = useMemo(() => {
        if (!token) return null;
        try {
            return jwtDecode(token);
        } catch (error) {
            console.error("Failed to decode token", error);
            return null;
        }
    }, [token]);

    return decodedToken;

    // const { token } = useAuthHook();
    // const decodedToken = useMemo(() => {return token ? jwtDecode(token) : null;}, [token]);
    // return decodedToken;

};

export const useLogout = () => {
    const { logout } = useAuthHook(); // Assuming AuthContext provides a logout function

    const handleLogout = () => {
        logout(); // Calls the logout function from context
    };

    return handleLogout;
};


export const useAuth = () => {
    const { token } = useAuthHook();
    const decodedToken = useAuthUser();
    const authUserId = decodedToken?.userId;
    const isAuthenticated = !!token && !!decodedToken;
    const isAdmin = isAuthenticated && (decodedToken.role === 'admin' || decodedToken.role === 'superAdmin');
    const isSuperAdmin = isAuthenticated && decodedToken.role === 'superAdmin';
    const isApprovedUser = isAuthenticated && decodedToken.role === 'user' && decodedToken.status === 'approved';
    
    return { isAuthenticated, isAdmin, isSuperAdmin, isApprovedUser, authUserId };
};