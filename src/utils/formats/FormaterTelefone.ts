export const FormaterTelefone = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, '');

    const isLongDistance = cleaned.length > 10;

    // Formatação com base na quantidade de dígitos
    if (isLongDistance) {
        // (XX) XXXXX-XXXX
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
    } else {
        // (XX) XXXX-XXXX
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6, 10)}`;
    }
};