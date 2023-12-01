const arrOutlierOne = [2, 4, 0, 100, 4, 11, 2602, 36];
const arrOutlierTwo = [160, 3, 1719, 19, 11, 13, -21];

export function findOutlierValue(arrOutlier) {
  let branchrrOutlierOddnum = arrOutlier.filter((item) => {
    if (item % 2 === 1) return true;
  });
  let branchrrOutlierEvenNum = arrOutlier.filter((item) => {
    if (item % 2 === 0) return true;
  });

  if (branchrrOutlierOddnum.length > 1) {
    return branchrrOutlierEvenNum;
  } else {
    return branchrrOutlierOddnum;
  }
}
