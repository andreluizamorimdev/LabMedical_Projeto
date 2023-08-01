/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import { useEffect } from "react";
import { LocalStorageService } from "../../services/LocalStorage.service";

const HomePage = () => {

    const { authentication } = useAuth();
    const userLogged = LocalStorageService.get('user');

    const { setTitulo } = useToolbarContext();

    useEffect(() => {
        setTitulo('Estatísticas e Informações');
    }, []);

    const renderHomePage = () => {
        
        return (
            <>
                <p>HomePage is Render</p>
            </>
        );
    }

    return userLogged || authentication.isLogged ? renderHomePage() : <Navigate to="/login" />;

}
 
export default HomePage;