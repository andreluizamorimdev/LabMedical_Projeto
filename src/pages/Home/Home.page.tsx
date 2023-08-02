/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import { useEffect, useState } from "react";
import { LocalStorageService } from "../../services/LocalStorage.service";
import { IPaciente } from "../../utils/interfaces/IPaciente";
import { PacienteService } from "../../services/Paciente.service";
import CardPacienteComponent from "../../components/CardPaciente/CardPaciente.component";
import * as Styled from './Home.style';
const HomePage = () => {

    const { authentication } = useAuth();
    const userLogged = LocalStorageService.get('user');
    const { setTitulo } = useToolbarContext();

    const navigate = useNavigate();

    const [pacientes, setPacientes] = useState <Array<IPaciente>>([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        setTitulo('Estatísticas e Informações');

        const fetchPacientes = PacienteService.GetPacientes();
        
        fetchPacientes.then(listaPacientes => {
            setPacientes(listaPacientes);
        })
        .catch(error => {
            console.error('Erro ao buscar pacientes: ', error);
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
                <h1>Estatísticas do Sistema</h1>
                {/* Aqui você pode adicionar as estatísticas do sistema */}
                <h2>Buscar Pacientes</h2>
                <input type="text" placeholder="Digite o nome, telefone ou e-mail" onChange={handleBuscarPacientes} />
                {pacientesFiltrados.map((paciente) => (
                    <CardPacienteComponent key={paciente.id} paciente={paciente} onClick={() => handleClickVerMais(paciente.id!)} />
                ))}
            </Styled.HomeContainer>
        );
    }

    return userLogged || authentication.isLogged ? renderHomePage() : <Navigate to="/login" />;

}
 
export default HomePage;