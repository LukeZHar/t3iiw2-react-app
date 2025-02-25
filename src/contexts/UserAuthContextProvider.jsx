import { createContext, useContext } from "react";

// This context will store the JWT token
const UserAuthContext = createContext("");

// Provider
export function UserAuthContextProvider({children}) {
    // Ideally the value of the toke comes from local storage and gets stored there
    let [token, setToken] = useState("");

    // Then we have useEffect to update the toke value when it changes 

    return (
        <UserAuthContext.Provider value={[token, setToken]}>
            {children}
        </UserAuthContext.Provider>
    )
}

// Create a custom hook
export function useUserAuthContext() {
    return useContext(UserAuthContext);
}
