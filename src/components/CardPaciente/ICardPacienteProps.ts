import { IPaciente } from "../../utils/interfaces/IPaciente";

export interface ICardPacienteProps {
    paciente: IPaciente;
    onClick: () => void;
}