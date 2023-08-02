import { useState } from 'react';
import CadastroConsultaFormComponent from '../../components/Form/CadastroConsulta/CadastroConsulta.form.component';
import { IPaciente } from '../../utils/interfaces/IPaciente';
import * as Styled from './CadastroConsulta.style';
import { PacienteService } from '../../services/Paciente.service';
import InputComponent from '../../components/Input/Input.component';

const CadastroConsultaPage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [pacienteEncontrado, setPacienteEncontrado] = useState<IPaciente | null>(null);

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
                    <CadastroConsultaFormComponent pacienteEncontrado={pacienteEncontrado} />
                </Styled.Card>
            )}
            
        </Styled.Container>
    );
}
 
export default CadastroConsultaPage;