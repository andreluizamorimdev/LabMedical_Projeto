export interface IExame {
    id?: number;
    pacienteId?: number;
    nomeExame: string;
    dataExame: string; // Formato: "YYYY-MM-DD" (exemplo: "2023-07-31")
    horarioExame: string; // Formato: "HH:mm" (exemplo: "09:30")
    tipoExame: string;
    laboratorio: string;
    urlDocumentoExame?: string;
    resultadosExame: string;
}