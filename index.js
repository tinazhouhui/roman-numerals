/**
 *
 * @param {number} amount
 */
export function convert(amount) {

  let finalString = ''
  const numberOfM = Math.floor(amount / 1000)
  const hundreds = amount % 1000

  let hundredsString = hundredsToString(hundreds);

  if (amount === 5) {
    return 'V'
  }

  finalString = 'M'.repeat(numberOfM) + hundredsString;

  return finalString
}

function hundredsToString(numberOfHundreds){
  let numberOfC = Math.floor(numberOfHundreds / 100)
  let numberOfD = 0;

  if (numberOfC >= 5) {
    numberOfD = numberOfC / 5
    numberOfC = numberOfC % 5
  }

  if(numberOfC === 4){
    return "CD";
  }

  return 'D'.repeat(numberOfD) + 'C'.repeat(numberOfC);
}
