import { z } from 'zod';

export const schemaCheckout =  z.object({
  contact: z.object({
    email: z.string().email('Please provide a valid email')
  }),
  shippingAddress: z.object({
    firstName: z.string().min(3, 'Please enter valid first name'),
    lastName: z.string().min(3, 'Please enter valid last name'),
    zipCode: z.string().min(8, 'Please enter valid zipCode'),
    phoneNumber: z.string().min(11 , 'Please enter valid phone Number'),
  })
}).transform(field => ({
  contact: {
    email: field.contact.email
  }, 
  shippingAddress: {
    firstName: field.shippingAddress.firstName,
    lastName: field.shippingAddress.lastName,
    zipCode: field.shippingAddress.zipCode,
    phoneNumber: field.shippingAddress.phoneNumber
  },
}))
