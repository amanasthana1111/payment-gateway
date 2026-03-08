import { v4 as uuidv4 } from 'uuid';

export function generateApiKey(): string {
  return `ak_${uuidv4().replace(/-/g, '')}`;
}

export function generateApiSecret(): string {
  return `sk_${uuidv4().replace(/-/g, '')}`;
}