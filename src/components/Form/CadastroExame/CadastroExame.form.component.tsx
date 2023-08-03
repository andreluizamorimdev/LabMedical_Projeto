/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getCurrentDate, getFormattedDate, getFormattedTime } from '../../../utils/formats/DateUtils';
import InputComponent from '../../Input/Input.component';
import * as Styled from './CadastroExame.form.style';
import { ICadastroExameFormComponentProps } from './ICadastroExameFormProps';
import { IFormDataCadastroExame } from './IFormDataCadastroExame';
import { ExameService } from '../../../services/Exame.service';
import { IExame } from '../../../utils/interfaces/IExame';


const CadastroExameFormComponent = ({ pacienteEncontrado }: ICadastroExameFormComponentProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormDataCadastroExame>();

    const dataAtual = getCurrentDate();
    const dataExameInicial = getFormattedDate(dataAtual);
    const horarioExameInicial = getFormattedTime(dataAtual);

    const onSubmit: SubmitHandler<IFormDataCadastroExame> = async (data) => {
        try {
            const exameData: IExame = {
                id: 0,
                pacienteId: pacienteEncontrado.id,
                nomeExame: data.nomeExame,
                dataExame: data.dataExame,
                horarioExame: data.horarioExame,
                tipoExame: data.tipoExame,
                laboratorio: data.laboratorio,
                urlDocumentoExame: data.urlDocumentoExame,
                resultadosExame: data.resultadosExame
            }

            await ExameService.CreateExame(exameData);
            toast.success('Exame cadastrado com sucesso');

        } catch (error) {
            toast.error('Erro ao cadastrar o exame');
            console.error('Erro ao cadastrar o exame: ', error);
        }
    };


    return (
        <Styled.FormCadastroExame onSubmit={handleSubmit(onSubmit)}>
            <Styled.FormHeader>
                <h1>Exame de {pacienteEncontrado.nomeCompleto}</h1>
                <Styled.ButtonBox>
                    <Styled.Button type="button" disabled >Editar</Styled.Button>
                    <Styled.Button $outlined type="button" disabled >Deletar</Styled.Button>
                    <Styled.Button $active type="submit">Salvar</Styled.Button>
                </Styled.ButtonBox>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent 
                    label='Nome do Exame' 
                    id='nomeExame' 
                    type='text' 
                    placeholder='Digite o Nome do Exame'
                    register={{...register('nomeExame', { required: "O Nome do Exame é obrigatório", maxLength: { value: 50, message: "O Nome do Exame deve ter no máximo 50 caracteres" }, minLength: { value: 5, message: "O Nome do Exame deve ter no mínimo 5 caracteres" } })}}
                    error={errors.nomeExame}
                />
                <InputComponent 
                    label='Data do Exame' 
                    id='dataExame' 
                    type='date'
                    defaultValue={dataExameInicial}
                    register={{...register('dataExame', { required: "A Data do Exame é obrigatória" })}}
                    error={errors.dataExame}
                />
                <InputComponent 
                    label='Horário do Exame' 
                    id='horarioExame' 
                    type='time'
                    defaultValue={horarioExameInicial}
                    register={{...register('horarioExame', { required: "O Horário do Exame é obrigatório" })}}
                    error={errors.horarioExame}
                />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent 
                    label='Tipo do Exame' 
                    id='tipoExame' 
                    type='text' 
                    placeholder='Digite o tipo do exame' 
                    rows={20}
                    register={{...register('tipoExame', { required: "O Tipo do Exame é obrigatório", maxLength: { value: 30, message: "O Tipo do Exame deve ter no máximo 30 caracteres" }, minLength: { value: 5, message: "O Tipo do Exame deve ter no mínimo 5 caracteres" } })}}
                    error={errors.tipoExame}
                />
                
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent
                    label='Laboratório' 
                    id='laboratorio' 
                    type='text' 
                    placeholder='Digite o Laboratório'
                    register={{...register('laboratorio', { required: "O Laboratório é obrigatório", maxLength: { value: 30, message: "O Laboratório deve ter no máximo 30 caracteres" }, minLength: { value: 5, message: "O Laboratório deve ter no mínimo 5 caracteres" } })}}
                    error={errors.laboratorio}
                />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent
                    label='Url do Documento do Exame' 
                    id='urlDocumentoExame' 
                    type='text' 
                    placeholder='Digite a Url do Documento do Exame'
                    register={{...register('urlDocumentoExame')}}
                    error={errors.urlDocumentoExame}
                />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent 
                    label='Resultados Exame' 
                    id='resultadosExame' 
                    type='textarea' 
                    placeholder='Resultados do Exame'
                    rows={20}
                    register={{...register('resultadosExame', { required: "Resultados do Exame é obrigatório", maxLength: { value: 1000, message: "O Resultados do Exame deve ter no máximo 1000 caracteres" }, minLength: { value: 15, message: "O Resultados do Exame deve ter no mínimo 15 caracteres" } } )}}
                    error={errors.resultadosExame}
                />
            </Styled.InputBox>
        </Styled.FormCadastroExame>
    );
}
 
export default CadastroExameFormComponent;