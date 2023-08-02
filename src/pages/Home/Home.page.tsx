/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import { useEffect, useState } from "react";
import { MdPeopleAlt, MdMedicalInformation, MdMedicalServices } from "react-icons/md"
import { LocalStorageService } from "../../services/LocalStorage.service";
import { IPaciente } from "../../utils/interfaces/IPaciente";
import { PacienteService } from "../../services/Paciente.service";
import CardPacienteComponent from "../../components/CardPaciente/CardPaciente.component";
import * as Styled from './Home.style';
import InputComponent from "../../components/Input/Input.component";
import { IConsulta } from "../../utils/interfaces/IConsulta";
import { ConsultaService } from "../../services/Consultas.service";
import { IExame } from "../../utils/interfaces/IExame";
import { ExameService } from "../../services/Exame.service";
const HomePage = () => {

    const { authentication } = useAuth();
    const userLogged = LocalStorageService.get('user');
    const { setTitulo } = useToolbarContext();

    const navigate = useNavigate();

    const [pacientes, setPacientes] = useState <Array<IPaciente>>([]);
    const [busca, setBusca] = useState('');

    const [consultas, setConsultas] = useState<Array<IConsulta>>([]);
    const [exames, setExames] = useState<Array<IExame>>([]);

    useEffect(() => {
        setTitulo('Estatísticas e Informações');

        const fetchPacientes = PacienteService.GetPacientes();
        const fetchConsultas = ConsultaService.GetConsultas();
        const fetchExames = ExameService.GetExames();
        
        Promise.all([fetchPacientes, fetchConsultas, fetchExames])
            .then(([listaPacientes, listaConsultas, listaExames]) => {
                setPacientes(listaPacientes);
                setConsultas(listaConsultas);
                setExames(listaExames);
            })
            .catch(error => {
                console.error('Erro ao buscar pacientes, consultas e exames: ', error);
            });

    }, []);

    const handleBuscarPacientes = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusca(event.target.value);
    };

    const pacientesFiltrados = pacientes.filter((paciente) => {
        const { nomeCompleto, telefone, email } = paciente;
        return (
          nomeCompleto.toLowerCase().includes(busca.toLowerCase()) ||
          (telefone && telefone.includes(busca)) ||
          (email && email.includes(busca))
        );
    });

    const handleClickVerMais = (id: number) => {
        const pacienteId = id;

        navigate(`/pacientes/${pacienteId}`);
    }

    const renderHomePage = () => {
        
        return (
            <Styled.HomeContainer>
                <Styled.HomeContent>
                    <Styled.HomeContentHeader>
                        <h1>Estatísticas do Sistema</h1>
                        <Styled.CardEstatisticaContainer>
                            <Styled.CardEstatistica>
                                
                                <Styled.CardEstatisticaAvatar>
                                    <MdPeopleAlt /> {pacientes.length}
                                </Styled.CardEstatisticaAvatar>

                                <Styled.TituloCardEstatistica>Pacientes</Styled.TituloCardEstatistica>
                            
                            </Styled.CardEstatistica>
                            <Styled.CardEstatistica>
                                
                                <Styled.CardEstatisticaAvatar>
                                    <MdMedicalInformation /> {consultas.length}
                                </Styled.CardEstatisticaAvatar>

                                <Styled.TituloCardEstatistica>Consultas</Styled.TituloCardEstatistica>
                            
                            </Styled.CardEstatistica>
                            <Styled.CardEstatistica>

                                <Styled.CardEstatisticaAvatar>
                                    <MdMedicalServices /> {exames.length}
                                </Styled.CardEstatisticaAvatar>
                                
                                <Styled.TituloCardEstatistica>Exames</Styled.TituloCardEstatistica>

                            </Styled.CardEstatistica>
                        </Styled.CardEstatisticaContainer>
                    </Styled.HomeContentHeader>
                    
                    <h2>Buscar Pacientes</h2>
                    <InputComponent type="text" placeholder="Digite o nome, telefone ou e-mail" onChange={handleBuscarPacientes} />
                    <Styled.HomeContentBody>
                        {pacientesFiltrados.map((paciente) => (
                            <CardPacienteComponent key={paciente.id} paciente={paciente} onClick={() => handleClickVerMais(paciente.id!)} />
                        ))}
                    </Styled.HomeContentBody>
                </Styled.HomeContent>
            </Styled.HomeContainer>
        );
    }

    return userLogged || authentication.isLogged ? renderHomePage() : <Navigate to="/login" />;

}
 
export default HomePage;