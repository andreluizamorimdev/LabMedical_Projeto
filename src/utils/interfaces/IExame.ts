export interface IExame {
    id?: number;
    pacienteId: number;
    nome: string;
    data: string; // Formato: "YYYY-MM-DD" (exemplo: "2023-07-31")
    horario: string; // Formato: "HH:mm" (exemplo: "09:30")
    tipo: string;
    laboratorio: string;
    urlDocumento?: string;
    resultados: string;
}