const obj = {
  a: "somestring",
  b: 42,
  c: false,
  1: 50
};

console.log(obj);
// expected output: Array ["a", "b", "c"]
let x = 1;
let y = 20;

if (obj[x] == undefined) obj[x] = 1;
else obj[x]++;
console.log(obj[x]);

if (obj[y] == undefined) obj[y] = 1;
else obj[y]++;
console.log(obj[y]);

// function test(n) {
//   const set1 = [3, 4, 8, 9];

//   if (n > 37) if (set1.includes(parseInt(n % 10))) return Math.ceil(n / 5) * 5;

//   return n;
// }

// console.log(test(68));

// function babbage (bnum, endDigits) {
//     // Good luck!
//     for (let x = 10000; x< 99,737; x++) {

//        bnum = x;

//        let bSq = Math.pow(bnum, 2);

//        if(bSq < endDigits)
//         continue;

//         let myStr = bSq.toString(10)
//         //console.log(x + ":" + bSq + "[" + myStr + "]");
//         if(myStr.endsWith("269696"))
//             return bnum;

//       }
//     return bnum;
//     }

//   babbage(1, 269,696);
