import { IPaciente } from '../../../utils/interfaces/IPaciente';

export interface ICadastroConsultaFormComponentProps {
    pacienteEncontrado: IPaciente;
    idConsulta?: string;
}