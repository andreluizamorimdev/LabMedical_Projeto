export interface IConsulta {
    id?: number;
    pacienteId: number; 
    motivoConsulta: string;
    dataConsulta: string; // Formato: "YYYY-MM-DD" (exemplo: "2023-07-31")
    horarioConsulta: string; // Formato: "HH:mm" (exemplo: "09:30")
    descricaoProblema: string;
    medicaoReceitada?: string;
    dosagemPrecaucoes: string;
}  