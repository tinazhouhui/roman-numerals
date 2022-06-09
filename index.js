/**
 *
 * @param {number} amount
 */
export function convert(amount) {

  const thousands = Math.floor(amount / 1000)
  const hundreds = amount % 1000
  const tens = amount % 100

  let thousandsString = thousandsToString(thousands)
  let hundredsString = sectionToString(hundreds, 100, "C", "D", "M");
  let tensString = sectionToString(tens, 10, "X", "L", "C");

  if (amount === 5) {
    return 'V'
  }

  return thousandsString + hundredsString + tensString
}

function thousandsToString(numberOfThousands) {
  return 'M'.repeat(numberOfThousands);
}

function sectionToString(sectionAmount, divider, low,mid,high){
  let numberOfLow = Math.floor(sectionAmount / divider)
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
