//
//cliff.js
//str1, str2 have equal length
// What is the difference between strings doing a char-by-char comparision
//

const myDiff = (strA, strB) => {
  const arrA = strA.split("");

  let totalDiff = 0;
  const len = arrA.length;

  arrA.map((c, x = 0) => {
    diff = Math.abs(c.charCodeAt(0) - strB[x].charCodeAt(0));
    //console.log(diff);
    totalDiff += diff;
  });

  //   for (let x = 0; x < len; x++) {
  //     diff = Math.abs(arrA[x].charCodeAt(0) - strB[x].charCodeAt(0));
  //     //console.log(diff);
  //     totalDiff += diff;
  //   }
  return totalDiff;
};

console.log("Diff = ", myDiff("bear", "this"));
