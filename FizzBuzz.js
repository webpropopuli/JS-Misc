let fizzbuzz = (n) => {
    outstr = ""    
    if(n === 0)     // special case
        outstr = 0
    else {
        if ((n % 3) === 0)
            outstr = "Fizz"
        if ((n % 5) === 0)
            outstr += "Buzz"
    }
    return (outstr.length) ? outstr : n
}

for (let x=0; x<=16; x++)
    console.log(`${fizzbuzz(x)}`)