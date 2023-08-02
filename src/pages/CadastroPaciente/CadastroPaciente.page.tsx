/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import CadastroPacienteFormComponent from "../../components/Form/CadastroPaciente/CadastroPaciente.form.component";
import { useAuth } from "../../hooks/useAuth";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import * as Styled from './CadastroPaciente.style';
import { LocalStorageService } from "../../services/LocalStorage.service";
import { IPaciente } from "../../utils/interfaces/IPaciente";
import { PacienteService } from "../../services/Paciente.service";

const CadastroPacientePage = () => {
    const { id } = useParams();
    const { authentication } = useAuth();
    const userLogged = LocalStorageService.get('user');
    const [paciente, setPaciente] = useState<IPaciente | null>(null);
    
    const { setTitulo } = useToolbarContext();

    useEffect(() => {
        setTitulo(`Cadastro de Paciente ${id ? ' - Editar' : ''}`);

        if (id) {
            PacienteService.GetPacienteById(parseInt(id))
                .then((pacienteData) => {
                    setPaciente(pacienteData);
                })
                .catch((error) => {
                    console.error("Erro ao buscar paciente: ", error);
                });
        }

    }, [id, setTitulo]);

    const renderCadastroPacientePage = () => {
        
        return (
            <Styled.Container>
                <Styled.Card>
                    <CadastroPacienteFormComponent paciente={paciente!} />
                </Styled.Card>    
            </Styled.Container>
        );
    }

    return userLogged || authentication.isLogged ? renderCadastroPacientePage() : <Navigate to="/login" />;
}
 
export default CadastroPacientePage;