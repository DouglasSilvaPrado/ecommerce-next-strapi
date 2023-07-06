export const maskZipCode = (zipCode: string): string => {
  const cleanedZipCode = zipCode.replace(/\D/g, '')

  const maskedZipCode = cleanedZipCode.replace(/(\d{5})(\d{3})/, '$1-$2')

  return maskedZipCode
}