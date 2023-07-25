import { createContext, useState } from "react";
import { IProviderProps } from "../../utils/interfaces/IProviderProps";
import { IAuthContext } from "../../utils/interfaces/IAuthContext";




export const AuthContext = createContext<IAuthContext>({
    authentication: {
        user: {
            email: "",
            password: "",
        },
        isLogged: false
    },
    setAuthentication: () => {return}
} as IAuthContext);

export const AuthProvider = ({ children }: IProviderProps) => {
    const [authentication, setAuthentication] = useState({
        user: {
            email: "",
            password: "",
        },
        isLogged: false
    });
    
    return(
        <AuthContext.Provider value={{authentication, setAuthentication}}>
            { children }
        </AuthContext.Provider>
    )
}