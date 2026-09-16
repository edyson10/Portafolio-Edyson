/**
 * Ofuscación simple y reversible para evitar que email/teléfono
 * queden como texto plano en el HTML servido o en el bundle.
 *
 * No es seguridad real (cualquiera con DevTools puede revertirla),
 * pero frena el scraping automatizado básico basado en regex sobre
 * el HTML/JSON estático, que es el objetivo pedido.
 *
 * Estrategia: shift de char code + reverso de string + base64.
 * La reconstrucción ocurre 100% en el cliente, al momento del click.
 */

const SHIFT = 3;

function shiftEncode(input: string): string {
  return input
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + SHIFT))
    .join("");
}

function shiftDecode(input: string): string {
  return input
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) - SHIFT))
    .join("");
}

/** Usado offline (script) para generar los valores de data/profile.ts */
export function encodeContactValue(plain: string): string {
  const reversed = plain.split("").reverse().join("");
  const shifted = shiftEncode(reversed);
  return btoa(shifted);
}

/** Usado en el cliente, al hacer click, para reconstruir el valor real */
export function decodeContactValue(encoded: string): string {
  const shifted = atob(encoded);
  const reversed = shiftDecode(shifted);
  return reversed.split("").reverse().join("");
}
