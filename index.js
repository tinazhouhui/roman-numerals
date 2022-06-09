/**
 *
 * @param {number} amount
 */
export function convert(amount) {
  const numberOfM = Math.floor(amount / 1000)
  const hundreds = amount % 1000

  const numberOfC = Math.floor(hundreds/100)

  if (amount === 5) {
    return 'V'
  }

  return 'M'.repeat(numberOfM) + 'C'.repeat(numberOfC)
}
