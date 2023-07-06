import { schemaCheckout } from '@/schema/schemaCheckout';
import { z } from 'zod';

export type FormCheckoutProps = z.infer<typeof schemaCheckout>