export function parseMoneyStringToFloat(stringValue) {
    "R$1.000,00";
    const formattedString = stringValue
        .replace("R$", "")
        .replace(".", "")
        .replace(",", ".");
    const floatValue = parseFloat(formattedString);
    return floatValue;
}

export function parseFloatToMoneyString(floatNumber) {
    const formattedNumber = floatNumber.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    });
    return `R$${formattedNumber}`;
}
