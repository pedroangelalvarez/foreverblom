import type { GuestData } from '@/types';

// Mock function - in a real application, use a secure JWT library and server-side validation.
export function decodeAndVerifyJwt(token: string): GuestData | null {
  try {
    // Simulate JWT decoding (base64 decode)
    const decodedJson = atob(token);
    const data = JSON.parse(decodedJson) as GuestData;

    // Basic validation of structure
    if (
      typeof data.firstName !== 'string' ||
      typeof data.lastName !== 'string' ||
      typeof data.confirmation !== 'boolean' ||
      typeof data.expirationDate !== 'string' ||
      !isValidISODate(data.expirationDate)
    ) {
      console.error("JWT structure invalid or expirationDate malformed:", data);
      return null;
    }
    
    // No actual signature verification in this mock
    return data;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    return null;
  }
}

function isValidISODate(dateString: string): boolean {
  // Basic check for ISO format, e.g., YYYY-MM-DDTHH:mm:ss.sssZ
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([+-]\d{2}:\d{2}))$/;
  if (!isoDateRegex.test(dateString)) return false;
  
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

export function isRsvpExpired(expirationDateString: string): boolean {
  const expirationDate = new Date(expirationDateString);
  return new Date() > expirationDate;
}
