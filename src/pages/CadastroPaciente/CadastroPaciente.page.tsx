/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import CadastroPacienteFormComponent from "../../components/Form/CadastroPaciente/CadastroPaciente.form.component";
import { useAuth } from "../../hooks/useAuth";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import * as Styled from './CadastroPaciente.style';
import { Navigate } from "react-router-dom";
import { LocalStorageService } from "../../services/LocalStorage.service";

const CadastroPacientePage = () => {
    const { authentication } = useAuth();
    const userLogged = LocalStorageService.get('user');
    
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

    return userLogged || authentication.isLogged ? renderCadastroPacientePage() : <Navigate to="/login" />;
}
 
export default CadastroPacientePage;