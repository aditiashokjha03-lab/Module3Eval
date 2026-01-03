import { createContext, useState, useContext } from "react";

const AuthContext =
createContext ();

export const AuthProvider =
({children}) => {
    const [user, setUser] =
    useState(null);

const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234")
    {
        setUser ({email, role: "admin"});
        return "admin";
    }
    else if (email === "customer@gmail.com" && password === "customer1234") {
        setUser ({email, role: "customer"});
        return"customer";
    }
    else {
        alert("Invalid email or password")
        return null;
    }
};

const logout = () => setUser(null);
return (
    <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
);
};

export const useAuth = () =>
    useContext(AuthContext);