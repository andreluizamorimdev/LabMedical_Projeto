import InputComponent from '../../Input/Input.component';
import * as Styled from './CadastroPaciente.form.style';

const CadastroPacienteFormComponent = () => {
    return (
        <Styled.FormCadastroPaciente>
            <Styled.FormHeader>
                <h1>Identificação</h1>
                <Styled.ButtonBox>
                    <Styled.Button $active type="button">Editar</Styled.Button>
                    <Styled.Button $outlined type="button">Deletar</Styled.Button>
                    <Styled.Button $active type="submit">Salvar</Styled.Button>
                </Styled.ButtonBox>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent label='Nome Completo' id='nomeCompleto' type='text' placeholder='Digite seu nome completo'  />
                
                <InputComponent label='Data de Nascimento' id='dataNascimento' type='date' />
            </Styled.InputBox>
            
            <Styled.InputBox>
                <InputComponent label='CPF' id='cpf' type='text' placeholder='Digite seu CPF' />
                
                <InputComponent label='RG' id='rg' type='text' placeholder='Digite seu RG' />
            </Styled.InputBox>

            <Styled.InputBox>
                <InputComponent label='Telefone' id='telefone' type='text' placeholder='Digite seu telefone' />
                <InputComponent label='Contato de Emergência' id='contatoEmergencia' type='text' placeholder='Digite o contato de emergência' /> 
                <InputComponent label='E-mail' id='email' type='email' placeholder='Digite seu e-mail' />
                <InputComponent label='Naturalidade' id='naturalidade' type='text' placeholder='Digite sua naturalidade' />
            </Styled.InputBox>

            <Styled.FormHeader>
                <h1>Convênio</h1>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent label='Convênio' id='convenio' type='text' placeholder='Digite seu convênio' />
                <InputComponent label='Número do Convênio' id='numeroConvenio' type='text' placeholder='Digite o número do convênio' />
                <InputComponent label='Validade do Convênio' id='validadeConvenio' type='text' />
            </Styled.InputBox>

            <Styled.FormHeader>
                <h1>Dados de Endereço</h1>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent label='CEP' id='cep' type='text' placeholder='Digite seu CEP' />
                <InputComponent label='Cidade' id='cidade' type='text' placeholder='Digite sua cidade' />
                <InputComponent label='Estado' id='estado' type='text' placeholder='Digite seu estado' />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent label='Logradouro' id='logradouro' type='text' placeholder='Digite seu logradouro' />
                <InputComponent label='Número' id='numero' type='text' placeholder='Digite o número' />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent label='Complemento' id='complemento' type='text' placeholder='Digite o complemento' />
                <InputComponent label='Bairro' id='bairro' type='text' placeholder='Digite seu bairro' />
                <InputComponent label='Ponto de Referência' id='pontoReferencia' type='text' placeholder='Digite o ponto de referência' />
            </Styled.InputBox>
        </Styled.FormCadastroPaciente>
    );
}
 
export default CadastroPacienteFormComponent;