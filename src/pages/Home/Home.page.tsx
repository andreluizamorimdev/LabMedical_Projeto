import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const HomePage = () => {

    const { authentication } = useAuth();

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