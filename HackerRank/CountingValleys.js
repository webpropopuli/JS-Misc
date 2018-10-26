// Complete the countingValleys function below.
function countingValleys(n, sStr) {


    let alt = 0             // altitude rel sea level (0)
    let valleyCnt = 0
    let inValley = false

    const steps = sStr.split('')
    steps.forEach(s => {
        (s === 'U') ? alt++ : alt--

        if(alt < 0) {
            if(!inValley) {         // enter new valley
                inValley = true
            }
        }

        else if (alt >= 0) {
            if(inValley) {          // leaving valley
                inValley = false
                valleyCnt++
            }
        }
    })

    return (valleyCnt)
}