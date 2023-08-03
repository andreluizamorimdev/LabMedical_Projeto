/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { useToolbarContext } from "../../hooks/useToolbarContext";
import { LocalStorageService } from "../../services/LocalStorage.service";
import { MdArrowCircleRight } from "react-icons/md"
import * as Styled from './ListaProntuario.style';
import InputComponent from "../../components/Input/Input.component";
import { IPaciente } from "../../utils/interfaces/IPaciente";
import { PacienteService } from "../../services/Paciente.service";

const ListaProntuarioPage = () => {
    const { authentication } = useAuth();
    const userLogged = LocalStorageService.get('user');
    const {setTitulo} = useToolbarContext();

    const [pacientes, setPacientes] = useState<Array<IPaciente>>([]);
    const [busca, setBusca] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setTitulo('Listagem de Prontuários');

        fetchPacientes();

    }, []);

    const fetchPacientes = () => {
        PacienteService.GetPacientes()
            .then((listaPacientes) => {
                setPacientes(listaPacientes);
            })
            .catch(error => {
                console.error('Erro ao buscar pacientes: ', error);
            }); 
    };

    const handleBuscarPacientes = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setBusca(event.target.value);
    }

    const pacientesFiltrados = pacientes.filter((paciente) => {
        const { nomeCompleto, id } = paciente;
        return (
            nomeCompleto.toLowerCase().includes(busca.toLowerCase()) ||
            id!.toString().toLowerCase().includes(busca.toLowerCase())
        );
    });

    const handleClickPacienteCard = (id:string) =>{
        navigate(`/prontuarios/${id}`);
    }

    const renderCardsPacientes = () => {
        return pacientesFiltrados.map((paciente) => (
            <Styled.Card key={paciente.id} onClick={() => handleClickPacienteCard(paciente.id!.toString())}>
                <Styled.CardContent>
                    <Styled.CardTitulo>{paciente.id}</Styled.CardTitulo>
                    <Styled.CardTitulo>{paciente.nomeCompleto}</Styled.CardTitulo>
                    <Styled.CardTitulo>{paciente.convenio}</Styled.CardTitulo>
                    <Styled.CardButton>
                        <MdArrowCircleRight />
                    </Styled.CardButton>
                </Styled.CardContent>
                
            </Styled.Card>
        ));
    };

    const renderListaProntuarioPage = () => {
        return (
            <Styled.ListaProntuarioContainer>
                <Styled.ListaProntuarioContent>
                    <h2>Utilize a barra de pesquisa para buscar</h2>
                    <InputComponent type="text" placeholder="Busque pelo nome ou identificador do paciente" onChange={handleBuscarPacientes} />

                    <Styled.ListaProntuarioContentBody>
                        <Styled.CardBox>
                            <Styled.TitulosListaCardBox>
                                <h3>Registro</h3>
                                <h3>Nome do Paciente</h3>
                                <h3>Convênio</h3>
                            </Styled.TitulosListaCardBox>
                            {renderCardsPacientes()}
                        </Styled.CardBox>
                    </Styled.ListaProntuarioContentBody>
                </Styled.ListaProntuarioContent>
            </Styled.ListaProntuarioContainer>
        );
    }

    return userLogged || authentication.isLogged ? renderListaProntuarioPage() : <Navigate to="/login" />;
}
 
export default ListaProntuarioPage;