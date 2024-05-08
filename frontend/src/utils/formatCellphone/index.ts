export const formatCellphone = (phone: string | number) => {
    const formattedPhone = typeof phone == 'string' ? phone.replace(/\D/g, '') : phone.toString();
    
    if (formattedPhone.length !== 10 && formattedPhone.length !== 11) {
        return '';
    }

    let result;

    if (formattedPhone.length === 10) {
        result = `(${formattedPhone.slice(0, 2)}) ${formattedPhone.slice(2, 6)}-${formattedPhone.slice(6)}`;
    } else {
        result = `(${formattedPhone.slice(0, 2)}) ${formattedPhone.slice(2, 3)}${formattedPhone.slice(3, 7)}-${formattedPhone.slice(7)}`;
    }

    return result;
};