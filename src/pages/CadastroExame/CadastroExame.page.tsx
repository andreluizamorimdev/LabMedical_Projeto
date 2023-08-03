/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { IPaciente } from '../../utils/interfaces/IPaciente';
import * as Styled from './CadastroExame.style';
import { PacienteService } from '../../services/Paciente.service';
import InputComponent from '../../components/Input/Input.component';
import { useToolbarContext } from '../../hooks/useToolbarContext';
import { useAuth } from '../../hooks/useAuth';
import { LocalStorageService } from '../../services/LocalStorage.service';
import CadastroExameFormComponent from '../../components/Form/CadastroExame/CadastroExame.form.component';

const CadastroExamePage = () => {

    const { authentication } = useAuth();
    const userLogged = LocalStorageService.get('user');
    const {setTitulo} = useToolbarContext();

    const [searchTerm, setSearchTerm] = useState('');
    const [pacienteEncontrado, setPacienteEncontrado] = useState<IPaciente | null>(null);

    useEffect(() => {
        setTitulo('Cadastro de Exame');
    }, []);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            return;
        }

        PacienteService.GetPacientes()
            .then((pacientes: Array<IPaciente>) => {
                const pacienteEncontrado = pacientes.find((paciente) =>
                    paciente.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (paciente.telefone && paciente.telefone.includes(searchTerm)) ||
                    (paciente.email && paciente.email.includes(searchTerm))
                );

                setPacienteEncontrado(pacienteEncontrado!);
            })
            .catch((error) => {
                console.error('Erro ao buscar pacientes:', error);
        });
    };

    const renderCadastroExamePage = () => {
        return (
            <Styled.Container>
                <Styled.InfoBusca>Digite o nome do paciente e clique em buscar.</Styled.InfoBusca>
                <Styled.InputComponentContainer>
                    <Styled.InputBox>
                        <InputComponent
                            type="text"
                            placeholder="Digite o nome completo do paciente..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        
                        <Styled.SearchButton $active={!!searchTerm} onClick={handleSearch} disabled={!searchTerm.trim()}>Buscar</Styled.SearchButton>
                    </Styled.InputBox>
                </Styled.InputComponentContainer>
                {!pacienteEncontrado ? (
                    <Styled.InfoBusca>Paciente não encontrado.</Styled.InfoBusca>
                ) : (
                    <Styled.Card>
                        <CadastroExameFormComponent pacienteEncontrado={pacienteEncontrado} />
                    </Styled.Card>
                )}
                
            </Styled.Container>
        );
    }

    return userLogged || authentication.isLogged ? renderCadastroExamePage() : <Navigate to="/login" />;
    
}
 
export default CadastroExamePage;