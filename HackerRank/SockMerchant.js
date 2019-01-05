// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let pairs = 0;

  ar.sort((x, y) => {
    const a = parseInt(x);
    const b = parseInt(y);
    return a < b ? 1 : a > b ? -1 : 0; // sorts in reverse bt we don't really care
  });

  console.log(ar);
  for (let z = 0; z < n; z++) {
    let num = ar[z];
    let cnt = 1;

    while (ar[z + 1] === num) {
      // while it matched next items, increment
      cnt++;
      z++;
    }

    console.log(`num=${num}, cnt = ${cnt}`);
    pairs += Math.floor(cnt / 2); // cull fractions
  }

  return pairs;
}
