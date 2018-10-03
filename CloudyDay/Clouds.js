'use strict';

let tests = require('./cloudTESTS.json');
let inputString = tests['T0']

let currentLine = 0;
main();

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);
    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));
    const x = readLine().split(' ').map(xTemp => parseInt(xTemp, 10));
    const m = parseInt(readLine(), 10);
    const y = readLine().split(' ').map(yTemp => parseInt(yTemp, 10));
    const r = readLine().split(' ').map(rTemp => parseInt(rTemp, 10));
    let result = maximumPeople(p, x, y, r);
    console.info(result + "\n");
}
//***************************************************** */



// Complete the maximumPeople function below.
function maximumPeople(aPopulations, aTownAddrs, aCloudAddrs, aRadii) {

    const TIMER_ON = (s) => console.time(s)
    const TIMER_OFF = (s) => console.timeEnd(s)
    const PROD = 0 //true   // Production mode

    let clouds = []
    let towns = []

    PROD || TIMER_ON('Loading up Towns')
    //! CREATE TOWNS ARRAY then SORT
    for (let x = 0; x < aPopulations.length; x++) {
        let town = {
            hasCloud: false
        }
        town.population = aPopulations[x]
        town.address = aTownAddrs[x]
        towns.push(town)
    }
    PROD || TIMER_OFF('Loading up Towns')

    PROD || TIMER_ON('Sorting towns')
    var townSort = (a, b) => {
        const A = a.address;
        const B = b.address;

        let comp = 0;
        if (A > B)
            comp = 1;
        else if (A < B)
            comp = -1;
        return comp;
    }
    towns.sort(townSort)
    PROD || TIMER_OFF('Sorting towns')

    //! Combine population for towns at same address
    for (let x = 0; x < towns.length - 2; x++) {
        next = x + 1
        while (towns[x].address == towns[next].address || 0) {
            towns[x].population += towns[next].population
            towns.splice(next, 1)
        }
    }
    PROD || console.table(towns)

    //! Get town minmax
    let firstTown = towns[0].address
    let lastTown = towns[towns.length - 1].address
    PROD || console.error(`firstTown: ${firstTown}, lastTown: ${lastTown}`)


    //! BUILD CLOUDS
    var townInRange = (town, cloud) => town.address >= cloud.min && town.address <= cloud.min

    function findNextTownUnderCloud(cloud, ndx, addr) {
        for (let x = ndx; x < towns.length; x++)
            if (townInRange(towns[x], cloud)) {
                if (town[x].hasCloud == true) { // >1 clouds = permanent darkness
                    towns.splice(x, 1)
                    x--
                } else {
                    town[x].hasCloud = true
                    return (ndx + 1)
                }

                return -1
            }


        PROD || console.time('Loading up Clouds')
        PROD || console.log(`Processing clouds..... `)
        for (let y = 0; y < aCloudAddrs.length; y++) {
            let cloud = {
                address: 0,
                min: -1,
                max: -1,
                population: 0
            }
            const rad = parseFloat(aRadii[y], 10)
            cloud.address = parseFloat(aCloudAddrs[y], 10)
            cloud.min = Math.max(cloud.address - rad, firstTown)
            cloud.max = Math.min(cloud.address + rad, lastTown)

            PROD || console.error(cloud)

            // FIND TOWNS IN RANGE
            for (let cNdx = cloud.min; cNdx <= cloud.max; cNdx++) {
                let ndx = 0

                do {
                    console.log('B')
                    ndx = findNextTownUnderCloud(cloud, ndx, cNdx)
                    console.log('C')
                    if (ndx < 0)
                        break
                    console.log('D')
                    cloud.population += towns[y].population;
                }
                while (1)
                console.log('E')

                if (cloud.population > 0)
                    clouds.push(cloud)

            }
        }
        PROD || console.timeEnd('Loading up Clouds')
    }

    //! FIND MAX IN LIGHT
    let maxInLight = 0
    let alwaysLight = 0
    let coveredPop = 0

    //let  maxPop == pop of all towns
    for (let z = 0; z < clouds.length; z++)
        coveredPop += clouds[z].population

    alwaysLight = maxPop - coveredPop;


    return maxInLight
} // end fn main