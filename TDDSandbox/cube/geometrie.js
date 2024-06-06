export function perimetre(lgCote) {
  return 12 * lgCote;
}

export function aireFace(lgCote) {
  return lgCote * lgCote;
}

export function airCube(lgCote) {
  const result = aireFace(lgCote) * 6;
  return result;
}

export function volumeCube(lgCote) {
  return Math.pow(lgCote, 3);
}
