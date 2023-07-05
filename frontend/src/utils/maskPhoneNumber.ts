export const maskPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, '') // Remove todos os caracteres não numéricos
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/) // Divide o número em código de área, prefixo e sufixo

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}` // Formata o número no padrão (99) 99999-9999
  }

  return phoneNumber
}