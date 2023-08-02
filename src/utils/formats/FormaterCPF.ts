export const FormaterCPF = (cpf: string) => {
    const cleaned = cpf.replace(/\D/g, '');
  
    return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}`;
};