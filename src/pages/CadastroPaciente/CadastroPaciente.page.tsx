import { useEffect } from "react";
import CadastroPacienteFormComponent from "../../components/Form/CadastroPaciente/CadastroPaciente.form.component";
import { useAuth } from "../../hooks/useAuth";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import * as Styled from './CadastroPaciente.style';
import { Navigate } from "react-router-dom";

const CadastroPacientePage = () => {
    const { authentication } = useAuth();

    const { setTitulo } = useToolbarContext();

    useEffect(() => {
        setTitulo('Cadastro de Paciente');
    }, []);

    const renderCadastroPacientePage = () => {
        
        return (
            <Styled.Container>
                <Styled.Card>
                    <CadastroPacienteFormComponent />
                </Styled.Card>    
            </Styled.Container>
        );
    }

    return authentication.isLogged ? renderCadastroPacientePage() : <Navigate to="/login" />;
}
 
export default CadastroPacientePage;