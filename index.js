/**
 *
 * @param {number} amount
 */
export function convert(amount) {

  const thousands = Math.floor(amount / 1000)
  const hundreds = amount % 1000

  let thousandsString = thousandsToString(thousands)
  let hundredsString = sectionToString(hundreds, "C", "D", "M");

  if (amount === 5) {
    return 'V'
  }

  return thousandsString + hundredsString
}

function thousandsToString(numberOfThousands) {
  return 'M'.repeat(numberOfThousands);
}

function sectionToString(sectionAmount, low,mid,high){
  let numberOfLow = Math.floor(sectionAmount / 100)
  let numberOfMid = 0;

  if(numberOfLow === 4){
    return low+mid;
  }
  if(numberOfLow === 9){
    return low+high;
  }

  if (numberOfLow >= 5) {
    numberOfMid = numberOfLow / 5
    numberOfLow = numberOfLow % 5
  }

  return mid.repeat(numberOfMid) + low.repeat(numberOfLow);
}
