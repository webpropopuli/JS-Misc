function updateInventory(arr1, arr2) {
  let newArr = arr1.concat(arr2); //one big array
  // Sort early so I can terminate inner loop early
  newArr.sort(function(a, b) {
    return a[1] > b[1] ? 1 : b[1] > a[1] ? -1 : 0;
  });

  let namesArr = [];
  newArr.map(i => namesArr.push(i[1]));

  let len = newArr.length;

  for (let x = 0; x < len - 1; x++) {
    let name = newArr[x][1];
    //console.log(`x: ${x}, srchname = ${name}`);
    for (let y = x + 1; y < len; y++) {
      //console.log(`inner loop x:${x}, y:${y}`);

      let ndx = namesArr.indexOf(name, y);
      if (-1 === ndx) {
        //console.log(`no match.`);
        break;
      } else {
        newArr[x][0] += newArr[y][0];
        newArr.splice(y, 1);
        namesArr.splice(y, 1);
        len--;
        //console.log(`match on ${name} --> ${newArr[x]}`);
        y--;
      }
    }
  }
  //console.log(newArr);
  return arr1;
}

//##########################333
// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
