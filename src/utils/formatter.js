export function parseMoneyStringToFloat(stringValue) {
    const formattedString = stringValue
        .replace('R$', '')
        .replace('.', '')
        .replace(',', '.')
    const floatValue = parseFloat(formattedString)
    return floatValue
}

export function parseFloatToMoneyString(floatNumber) {
    const formattedNumber = floatNumber.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
    })
    return `R$${formattedNumber}`
}

export function formatWppNumber(rawNumber) {
    return rawNumber.replace(/[^\d]/g, '')
}
