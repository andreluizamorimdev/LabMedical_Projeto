import { FormaterTelefone } from '../../utils/formats/FormaterTelefone';
import * as Styled from './CardPaciente.style';
import { ICardPacienteProps } from './ICardPacienteProps';
import { MdAccountCircle } from 'react-icons/md';
const CardPacienteComponent = ({ paciente, onClick }: ICardPacienteProps) => {
    const { nomeCompleto, dataNascimento, telefone, email, convenio } = paciente;

    const calcularIdade = () => {
        const dataAtual = new Date();
        const dataNasc = new Date(dataNascimento);
        let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
        const mesAtual = dataAtual.getMonth();
        const mesNasc = dataNasc.getMonth();

        if (mesAtual < mesNasc || (mesAtual === mesNasc && dataAtual.getDate() < dataNasc.getDate())) {
            idade--;
        }

        return idade;
    };
    
    const telefoneFormatado = telefone ? FormaterTelefone(telefone) : null;

    return (
        <Styled.CardPaciente>
            <Styled.CardPacienteHeader>
                <Styled.CardPacienteAvatar>
                    <MdAccountCircle/>
                </Styled.CardPacienteAvatar>
                <h3>{nomeCompleto}</h3>
            </Styled.CardPacienteHeader>

            <Styled.CardPacienteContent>
                <p>Idade: {calcularIdade()}</p>
                {telefoneFormatado && <p>Contato: {telefoneFormatado}</p>}
                {!telefoneFormatado && <p>Contato: {email}</p>}
                <p>Plano de Saúde: {convenio || 'Não informado'}</p>
            </Styled.CardPacienteContent>

            <Styled.CardPacienteFooter>
                <Styled.CardPacienteButton onClick={onClick}>Ver mais</Styled.CardPacienteButton>
            </Styled.CardPacienteFooter>
        </Styled.CardPaciente>
    );
}
 
export default CardPacienteComponent;