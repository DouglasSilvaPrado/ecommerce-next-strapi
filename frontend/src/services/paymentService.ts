import { Payment } from '@/@types/Payment'

export const generateCheckoutLink = async(data: Payment) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/mercadopago`
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}