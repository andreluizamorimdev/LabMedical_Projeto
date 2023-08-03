export const FormaterRG = (rg: string) => {
    const cleaned = rg.replace(/\D/g, '');
  
    // Se o RG tiver menos de 9 dígitos, não há formatação padrão.
    if (cleaned.length < 9) {
      return cleaned;
    }
  
    // Formatação padrão: XX.XXX.XXX-X
    return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}-${cleaned.slice(8, 9)}`;
  };
  