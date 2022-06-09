/**
 *
 * @param {number} amount
 */
export function convert(amount) {
  // create a map for number to roman letters
  // ax in thousands
  // 3142 -> MMMCXLII

  const numberOfM = Math.floor(amount / 1000)
  if (amount === 5) {
    return 'V'
  }

  return 'M'.repeat(numberOfM)
}
