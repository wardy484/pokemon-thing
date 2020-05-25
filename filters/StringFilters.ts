export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function padStart(
  value: string | number,
  characters: number,
  padWith: string
): string {
  if (typeof value !== 'string') {
    value = value.toString()
  }

  return value.padStart(characters, padWith)
}
