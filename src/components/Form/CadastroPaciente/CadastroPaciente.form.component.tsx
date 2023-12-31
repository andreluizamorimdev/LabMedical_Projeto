/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import InputComponent from '../../Input/Input.component';
import * as Styled from './CadastroPaciente.form.style';
import { IFormCadastroPaciente } from './IFormCadastroPaciente';
import { ViaCepService } from '../../../services/ViaCepService';
import { IPaciente } from '../../../utils/interfaces/IPaciente';
import { PacienteService } from '../../../services/Paciente.service';
import { FormaterTelefone } from '../../../utils/formats/FormaterTelefone';
import { FormaterCPF } from '../../../utils/formats/FormaterCPF';
import { FormaterRG } from '../../../utils/formats/FormaterRG';

const CadastroPacienteFormComponent = ({ paciente }: { paciente: IPaciente}) => {
    const [isFetching, setIsFetching] = useState(false);

    const [isEditMode, setIsEditMode] = useState(false);
    const [isCadastroMode, setIsCadastroMode] = useState(true);

    const navigate = useNavigate();

    const [cepValue, setCepValue] = useState('');
    
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm<IFormCadastroPaciente>();

    useEffect(() => {
        if (paciente) {
            setIsCadastroMode(false);
            setIsEditMode(true);
            setValue('nomeCompleto', paciente.nomeCompleto);
            setValue('genero', paciente.genero);
            setValue('dataNascimento', paciente.dataNascimento);
            setValue('cpf', paciente.cpf);
            setValue('rg', paciente.rg);
            setValue('estadoCivil', paciente.estadoCivil);
            setValue('telefone', paciente.telefone);
            setValue('contatoEmergencia', paciente.contatoEmergencia);
            setValue('email', paciente.email);
            setValue('naturalidade', paciente.naturalidade);
            setValue('alergias', paciente.alergias);
            setValue('cuidadosEspecificos', paciente.cuidadosEspecificos);
            setValue('convenio', paciente.convenio);
            setValue('numeroConvenio', paciente.numeroConvenio);
            setValue('validadeConvenio', paciente.validadeConvenio);
            setCepValue(paciente.endereco.cep);
            setValue('endereco.cidade', paciente.endereco.cidade);
            setValue('endereco.estado', paciente.endereco.estado);
            setValue('endereco.logradouro', paciente.endereco.logradouro);
            setValue('endereco.numero', paciente.endereco.numero);
            setValue('endereco.complemento', paciente.endereco.complemento);
            setValue('endereco.bairro', paciente.endereco.bairro);
            setValue('endereco.pontoReferencia', paciente.endereco.pontoReferencia);
        } else {
            setIsEditMode(false);
        }
    }, [paciente]);

    const buscarEnderecoPorCep = (async (cep: string) => {
        try {
            const response = await ViaCepService.Get(cep);
            if (response) {
                setValue('endereco.cidade', response.localidade);
                setValue('endereco.estado', response.uf);
                setValue('endereco.logradouro', response.logradouro);
                setValue('endereco.bairro', response.bairro);
            }
        } catch (error) {
            console.error('Erro ao buscar o CEP: ', error);
        } finally {
            setIsFetching(false);
        }
    });

    const handleCepBlur = (cep: string) => {
        setIsFetching(true);
        const debounceTimer = setTimeout(async () => {
            await buscarEnderecoPorCep(cep);
        }, 500);
        
        setCepValue(cep);

        return () => clearTimeout(debounceTimer);
    };

    const handleEditarClick = () => {
        setIsEditMode(true);
    };

    const handleCancelarClick = () => {
        setIsEditMode(false);
        if (paciente) {
            setValue('nomeCompleto', paciente.nomeCompleto);
            setValue('genero', paciente.genero);
            setValue('dataNascimento', paciente.dataNascimento);
            setValue('cpf', FormaterCPF(paciente.cpf));
            setValue('rg', FormaterRG(paciente.rg));
            setValue('estadoCivil', paciente.estadoCivil);
            setValue('telefone', FormaterTelefone(paciente.telefone));
            setValue('contatoEmergencia', FormaterTelefone(paciente.contatoEmergencia));
            setValue('email', paciente.email);
            setValue('naturalidade', paciente.naturalidade);
            setValue('alergias', paciente.alergias);
            setValue('cuidadosEspecificos', paciente.cuidadosEspecificos);
            setValue('convenio', paciente.convenio);
            setValue('numeroConvenio', paciente.numeroConvenio);
            setValue('validadeConvenio', paciente.validadeConvenio);
            setCepValue(paciente.endereco.cep);
            setValue('endereco.cidade', paciente.endereco.cidade);
            setValue('endereco.estado', paciente.endereco.estado);
            setValue('endereco.logradouro', paciente.endereco.logradouro);
            setValue('endereco.numero', paciente.endereco.numero);
            setValue('endereco.complemento', paciente.endereco.complemento);
            setValue('endereco.bairro', paciente.endereco.bairro);
            setValue('endereco.pontoReferencia', paciente.endereco.pontoReferencia);
        }
    };

    const handleDeletarClick = async () => {
        if (paciente) {
            try {
                await PacienteService.DeletePaciente(paciente.id!);
                toast.success('Paciente deletado com sucesso!');
                navigate('/');
            } catch (error) {
                console.error('Erro ao deletar o paciente: ', error);
                toast.error('Erro ao deletar o paciente!');
            }
        }
    };

    const onSubmit: SubmitHandler<IFormCadastroPaciente> = async (data) => {
        try {

            const endereco = {
                cep: cepValue,
                cidade: getValues('endereco.cidade'),
                estado: getValues('endereco.estado'),
                logradouro: getValues('endereco.logradouro'),
                numero: getValues('endereco.numero'),
                complemento: getValues('endereco.complemento'),
                bairro: getValues('endereco.bairro'),
                pontoReferencia: getValues('endereco.pontoReferencia'),
            };

            const pacienteData: IPaciente = {
                id: 0,
                nomeCompleto: data.nomeCompleto,
                genero: data.genero,
                dataNascimento: data.dataNascimento,
                cpf: data.cpf,
                rg: data.rg,
                estadoCivil: data.estadoCivil,
                telefone: data.telefone,
                contatoEmergencia: data.contatoEmergencia,
                email: data.email,
                naturalidade: data.naturalidade,
                alergias: data.alergias,
                cuidadosEspecificos: data.cuidadosEspecificos,
                convenio: data.convenio,
                numeroConvenio: data.numeroConvenio,
                validadeConvenio: data.validadeConvenio,
                endereco: endereco,
            };

            if(isEditMode) {
                await PacienteService.UpdatePaciente(paciente.id!, pacienteData);
                toast.success('Paciente atualizado com sucesso!');
                setIsEditMode(false);
            } else {
                await PacienteService.CreatePaciente(pacienteData);
                toast.success('Paciente cadastrado com sucesso!');
            }

        } catch (error) {
            console.error('Erro ao cadastrar o paciente: ', error);
            toast.error('Erro ao cadastrar o paciente!');
        }
    }

    return (
        <Styled.FormCadastroPaciente onSubmit={handleSubmit(onSubmit)}>
            <Styled.FormHeader>
                <h1>Identificação</h1>
                <Styled.ButtonBox>
                    {!isEditMode && <Styled.Button $active={!isEditMode && !isCadastroMode} type="button" disabled={isCadastroMode} onClick={handleEditarClick}>Editar</Styled.Button>}
                    {!isEditMode && <Styled.Button $active={!isEditMode && !isCadastroMode} disabled={isCadastroMode} $outlined type="button" onClick={handleDeletarClick}>Deletar</Styled.Button>}
                    {isEditMode && <Styled.Button $active type="button" onClick={handleCancelarClick}>Cancelar</Styled.Button>}
                    {isEditMode && <Styled.Button $active={isEditMode} $outlined type="button" onClick={handleDeletarClick}>Deletar</Styled.Button>}
                    {isEditMode && <Styled.Button $active type="submit">Salvar</Styled.Button>}
                    {!isEditMode && <Styled.Button $active type="submit">Salvar</Styled.Button>}
                    
                </Styled.ButtonBox>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent 
                    label='Nome Completo' 
                    id='nomeCompleto' 
                    type='text' 
                    placeholder='Digite seu nome completo'
                    register={{...register('nomeCompleto', {required: "O nome completo é obrigatório", maxLength: {value: 50, message: "O nome deve ter no máximo 50 caracteres"}, minLength: {value: 5, message: "O nome deve ter no mínimo 5 caracteres"}})}}
                    error={errors.nomeCompleto}
                />
                <Styled.SelectBox>
                    <Styled.Label $hasError={ !!errors.genero } >Gênero</Styled.Label>
                    <Styled.Select $hasError={!!errors.genero} id='genero' defaultValue='' {...register('genero', {required: "É obrigatório selecionar uma das opções" })} >
                        <Styled.Option value="" disabled>Selecione</Styled.Option>
                        <Styled.Option value="Masculino">Masculino</Styled.Option>
                        <Styled.Option value="Feminino">Feminino</Styled.Option>
                        <Styled.Option value="PrefiroNaoInformar">Prefiro não informar</Styled.Option>    
                    </Styled.Select>
                    <Styled.Error>{errors.genero?.message}</Styled.Error>
                </Styled.SelectBox>
                <InputComponent 
                    label='Data de Nascimento' 
                    id='dataNascimento' 
                    type='date'
                    register={{...register('dataNascimento', {required: "A data de nascimento é obrigatória", validate: {validDate: (value) => {
                        const selectedDate = new Date(value);
                        const currentDate = new Date();
        
                        if (isNaN(selectedDate.getTime())) {
                            return 'A data de nascimento deve ser uma data válida';
                        }
        
                        if (selectedDate > currentDate) {
                            return 'A data de nascimento não pode ser no futuro';
                        }
                            return true;
                        } 
                    }})}}
                    error={errors.dataNascimento}
                />
            </Styled.InputBox>
            
            <Styled.InputBox>
                <InputComponent 
                    label='CPF' 
                    id='cpf' 
                    type='text' 
                    placeholder='Digite seu CPF'
                    register={{...register('cpf', {required: "O CPF é obrigatório", pattern: {value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, message: "O CPF deve estar no formato 000.000.000-00"} })}}
                    error={ errors.cpf }
                />
                <InputComponent 
                    label='RG' 
                    id='rg' 
                    type='text' 
                    placeholder='Digite seu RG'
                    register={{...register('rg', {required: "O RG é obrigatório", pattern: {value: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/, message: "O RG deve estar no formato 00.000.000-0"}, maxLength: {value: 20, message: "O RG deve ter no máximo 20 caracteres"} })}}
                    error={ errors.rg }
                />
                <Styled.SelectBox>
                    <Styled.Label $hasError={ !!errors.estadoCivil } >Estado Civil</Styled.Label>
                    <Styled.Select $hasError={!!errors.estadoCivil} id='estadoCivil' defaultValue='' {...register('estadoCivil', {required: "É obrigatório selecionar uma das opções" })} >
                        <Styled.Option value="" disabled>Selecione</Styled.Option>
                        <Styled.Option value="Solteiro(a)">Solteiro(a)</Styled.Option>
                        <Styled.Option value="Casado(a)">Casado(a)</Styled.Option>
                        <Styled.Option value="Separado(a)">Separado(a)</Styled.Option>
                        <Styled.Option value="Divorciado(a)">Divorciado(a)</Styled.Option>
                        <Styled.Option value="Viuvo(a)">Viúvo(a)</Styled.Option>    
                        <Styled.Option value="Amasiado(a)">Amasiado(a)</Styled.Option>    
                    </Styled.Select>
                    <Styled.Error>{errors.estadoCivil?.message}</Styled.Error>
                </Styled.SelectBox>
            </Styled.InputBox>

            <Styled.InputBox>
                <InputComponent 
                    label='Telefone' 
                    id='telefone' 
                    type='text' 
                    placeholder='Digite seu telefone'
                    register={{...register('telefone', {required: "O telefone é obrigatório", pattern: {value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/, message: "O telefone deve estar no formato (00) 00000-0000"} })}}
                    error={ errors.telefone }
                />
                <InputComponent 
                    label='Contato de Emergência' 
                    id='contatoEmergencia' 
                    type='text' 
                    placeholder='Digite o contato de emergência' 
                    register={{...register('contatoEmergencia', {required: "O contato de emergência é obrigatório", pattern: {value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/, message: "O contato de emergência deve estar no formato (00) 00000-0000"} })}}
                    error={ errors.contatoEmergencia }
                /> 
                <InputComponent 
                    label='E-mail' 
                    id='email' 
                    type='email' 
                    placeholder='Digite seu e-mail'
                    register={{...register('email', {pattern: {value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: "O email deve estar no formato como no exemplo: seuemail@gmail.com "} })}}
                    error={ errors.email }
                />
                <InputComponent 
                    label='Naturalidade' 
                    id='naturalidade' 
                    type='text' 
                    placeholder='Digite sua naturalidade'
                    register={{...register('naturalidade', {required: "A naturalidade é obrigatória", maxLength: {value: 50, message: "A naturalidade deve ter no máximo 50 caracteres"}, minLength: {value: 5, message: "A naturalidade deve ter no mínimo 5 caracteres"}})}}
                    error={ errors.naturalidade }
                />
            </Styled.InputBox>

            <Styled.InputBox>
                <InputComponent 
                    label='Lista de Alergias' 
                    id='alergias' 
                    type='textarea' 
                    placeholder='Digite suas alergias' 
                    register={{...register('alergias', {maxLength: {value: 500, message: "A lista de alergias deve ter no máximo 500 caracteres"}})}}
                    error={ errors.alergias }
                />
                <InputComponent 
                    label='Lista de Cuidados Específicos' 
                    id='cuidadosEspecificos' 
                    type='textarea' 
                    placeholder='Digite cuidados específicos'
                    register={{...register('cuidadosEspecificos', {maxLength: {value: 500, message: "A lista de cuidados específicos deve ter no máximo 500 caracteres"}})}}
                    error={ errors.cuidadosEspecificos }
                />
            </Styled.InputBox>

            <Styled.FormHeader>
                <h1>Convênio</h1>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent 
                    label='Convênio' 
                    id='convenio' 
                    type='text' 
                    placeholder='Digite seu convênio'
                    register={{...register('convenio', {maxLength: {value: 50, message: "O convênio deve ter no máximo 50 caracteres"}})}}
                    error={ errors.convenio}
                />
                <InputComponent 
                    label='Número do Convênio' 
                    id='numeroConvenio' 
                    type='text' 
                    placeholder='Digite o número do convênio'
                    register={{...register('numeroConvenio', {maxLength: {value: 50, message: "O número do convênio deve ter no máximo 50 caracteres"}})}}
                    error={ errors.numeroConvenio }
                />
                <InputComponent 
                    label='Validade do Convênio' 
                    id='validadeConvenio' 
                    type='text'
                    placeholder='Digite a validade do convênio'
                    register={{...register('validadeConvenio')}}
                />
            </Styled.InputBox>

            <Styled.FormHeader>
                <h1>Dados de Endereço</h1>
            </Styled.FormHeader>

            <Styled.InputBox>
                <InputComponent 
                    label='CEP' 
                    id='cep' 
                    type='text' 
                    placeholder='Digite seu CEP'
                    onBlur={(e) => handleCepBlur(e.target.value)}
                    isLoading={isFetching}
                    value={cepValue}
                    onChange={(e) => setCepValue(e.target.value)}
                />
                <InputComponent 
                    label='Cidade' 
                    id='cidade' type='text'
                    placeholder='Digite sua cidade'
                    register={{...register('endereco.cidade', {required: "A cidade é obrigatória", maxLength: {value: 50, message: "A cidade deve ter no máximo 50 caracteres"}, minLength: {value: 5, message: "A cidade deve ter no mínimo 5 caracteres"}})}}
                    error={ errors.endereco?.cidade }
                />
                <InputComponent 
                    label='Estado' 
                    id='estado' 
                    type='text' 
                    placeholder='Digite seu estado' 
                    register={{...register('endereco.estado', {required: "O estado é obrigatório"})}}
                    error={ errors.endereco?.estado }
                />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent 
                    label='Logradouro' 
                    id='logradouro' 
                    type='text' 
                    placeholder='Digite seu logradouro'
                    register={{...register('endereco.logradouro', {required: "O logradouro é obrigatório", maxLength: {value: 250, message: "O logradouro deve ter no máximo 250 caracteres"}, minLength: {value: 5, message: "O logradouro deve ter no mínimo 5 caracteres"}})}}
                    error={ errors.endereco?.logradouro }
                />
                <InputComponent 
                    label='Número' 
                    id='numero' 
                    type='text' 
                    placeholder='Digite o número'
                    register={{...register('endereco.numero', {required: "O número é obrigatório", maxLength: {value: 10, message: "O número deve ter no máximo 10 caracteres"}, minLength: {value: 1, message: "O número deve ter no mínimo 1 caracteres"}})}}
                    error={ errors.endereco?.numero } 
                />
            </Styled.InputBox>
            <Styled.InputBox>
                <InputComponent 
                    label='Complemento' 
                    id='complemento' 
                    type='text' 
                    placeholder='Digite o complemento'
                    register={{...register('endereco.complemento', {maxLength: {value: 50, message: "O complemento deve ter no máximo 50 caracteres"}})}} 
                    error={ errors.endereco?.complemento }
                />
                <InputComponent 
                    label='Bairro' 
                    id='bairro' 
                    type='text' 
                    placeholder='Digite seu bairro'
                    register={{...register('endereco.bairro', {required: "O bairro é obrigatório", maxLength: {value: 50, message: "O bairro deve ter no máximo 50 caracteres"}, minLength: {value: 5, message: "O bairro deve ter no mínimo 5 caracteres"}})}}
                    error={ errors.endereco?.bairro } 
                />
                <InputComponent 
                    label='Ponto de Referência' 
                    id='pontoReferencia' 
                    type='text' 
                    placeholder='Digite o ponto de referência'
                    register={{...register('endereco.pontoReferencia', {maxLength: {value: 250, message: "O ponto de referência deve ter no máximo 250 caracteres"}})}}
                    error={ errors.endereco?.pontoReferencia } 
                />
            </Styled.InputBox>
        </Styled.FormCadastroPaciente>
    );
}
 
export default CadastroPacienteFormComponent;