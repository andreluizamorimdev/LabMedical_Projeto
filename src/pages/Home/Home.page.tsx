import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import { useEffect } from "react";

const HomePage = () => {

    const { authentication } = useAuth();

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

    return authentication.isLogged ? renderHomePage() : <Navigate to="/login" />;

}
 
export default HomePage;