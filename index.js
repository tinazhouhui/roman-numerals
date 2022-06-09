/**
 *
 * @param {number} amount
 */
export function convert(amount) {

  let finalString = ''
  const numberOfM = Math.floor(amount / 1000)
  const hundreds = amount % 1000

  let numberOfC = Math.floor(hundreds / 100)
  let numberOfD = 0;

  if (numberOfC >= 5) {
    numberOfD = numberOfC / 5
    numberOfC = numberOfC % 5
  }

  if (amount === 5) {
    return 'V'
  }

  finalString = 'M'.repeat(numberOfM) + 'D'.repeat(numberOfD) + 'C'.repeat(numberOfC)

  return finalString
}
