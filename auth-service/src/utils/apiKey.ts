import { v4 as uuidv4 } from 'uuid';

export function generateApiKey(): string {
  return `aman_pay_ak_${uuidv4().replace(/-/g, '')}`;
}

export function generateApiSecret(): string {
  return `aman_pay_sk_${uuidv4().replace(/-/g, '')}`;
}