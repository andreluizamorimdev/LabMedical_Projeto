/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getCurrentDate, getFormattedDate, getFormattedTime } from '../../../utils/formats/DateUtils';
import InputComponent from '../../Input/Input.component';
import * as Styled from './CadastroConsulta.form.style';
import { IFormDataCadastroConsulta } from './IFormDataCadastroConsulta';
import { IConsulta } from '../../../utils/interfaces/IConsulta';
import { ConsultaService } from '../../../services/Consultas.service';
const CadastroConsultaFormComponent = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormDataCadastroConsulta>();

    const dataAtual = getCurrentDate();
    const dataConsultaInicial = getFormattedDate(dataAtual);
    const horarioConsultaInicial = getFormattedTime(dataAtual);

    const onSubmit: SubmitHandler<IFormDataCadastroConsulta> = async (data) => {
        try {
            const consultaData: IConsulta = {
                id: 0,
                pacienteId: 0,
                motivoConsulta: data.motivoConsulta,
                dataConsulta: data.dataConsulta,
                horarioConsulta: data.horarioConsulta,
                descricaoProblema: data.descricaoProblema,
                medicaoReceitada: data.medicacaoReceitada,
                dosagemPrecaucoes: data.dosagemPrecaucao
            }

            await ConsultaService.CreateConsulta(consultaData);
            toast.success('Consulta cadastrada com sucesso');

        } catch (error) {
            toast.error('Erro ao cadastrar a consulta');
            console.error('Erro ao cadastrar a consulta: ', error);
        }
        console.log(data);
    };

    return (
        <Styled.FormCadastroConsulta onSubmit={handleSubmit(onSubmit)}>
            <Styled.FormHeader>
                <h1>Consulta de (Nome Paciente)</h1>
                <Styled.ButtonBox>
                    <Styled.Button type="button" disabled >Editar</Styled.Button>
                    <Styled.Button $outlined type="button" disabled >Deletar</Styled.Button>
                    <Styled.Button $active type="submit">Salvar</Styled.Button>
                </Styled.ButtonBox>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent 
                    label='Motivo da Consulta' 
                    id='motivoConsulta' 
                    type='text' 
                    placeholder='Digite o motivo da consulta'
                    register={{...register('motivoConsulta', { required: "O motivo da consulta é obrigatório", maxLength: { value: 60, message: "O motivo da consulta deve ter no máximo 60 caracteres" }, minLength: { value: 6, message: "O motivo da consulta deve ter no mínimo 6 caracteres" } })}}
                    error={errors.motivoConsulta}
                />
                <InputComponent 
                    label='Data da Consulta' 
                    id='dataConsulta' 
                    type='date'
                    defaultValue={dataConsultaInicial}
                    register={{...register('dataConsulta', { required: "A data da consulta é obrigatória" })}}
                    error={errors.dataConsulta}
                />
                <InputComponent 
                    label='Horário da Consulta' 
                    id='horarioConsulta' 
                    type='time'
                    defaultValue={horarioConsultaInicial}
                    register={{...register('horarioConsulta', { required: "O horário da consulta é obrigatório" })}}
                    error={errors.horarioConsulta}
                />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent 
                    label='Descrição do Problema' 
                    id='descricaoProblema' 
                    type='textarea' 
                    placeholder='Digite a descrição do problema' 
                    rows={20}
                    register={{...register('descricaoProblema', { required: "A descrição do problema é obrigatória", maxLength: { value: 1000, message: "A descrição do problema deve ter no máximo 1000 caracteres" }, minLength: { value: 15, message: "A descrição do problema deve ter no mínimo 15 caracteres" } })}}
                    error={errors.descricaoProblema}
                />
                
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent
                    label='Medicação Receitada' 
                    id='medicacaoReceitada' 
                    type='textarea' 
                    placeholder='Digite a medicação a ser receitada'
                    register={{...register('medicacaoReceitada')}}
                    error={errors.medicacaoReceitada}
                />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent 
                    label='Dosagem e Precauções' 
                    id='dosagemPrecaucao' 
                    type='textarea' 
                    placeholder='Digite a dosagem e as precauções referentes ao medicamento'
                    register={{...register('dosagemPrecaucao', { required: "Dosagem e precauções é obrigatório", maxLength: { value: 250, message: "A descrição do problema deve ter no máximo 250 caracteres" }, minLength: { value: 15, message: "A descrição do problema deve ter no mínimo 15 caracteres" } } )}}
                    error={errors.dosagemPrecaucao}
                />
            </Styled.InputBox>
        </Styled.FormCadastroConsulta>
    );
}
 
export default CadastroConsultaFormComponent;