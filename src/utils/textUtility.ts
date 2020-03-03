export function capitalize([firstLetter, ...rest]: string) {
  return [firstLetter.toLocaleUpperCase(), ...rest].join('');
}
