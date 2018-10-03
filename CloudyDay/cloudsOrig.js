'use strict';

let tests = require('./cloudTESTS.json');
let inputString = tests['T1']

let currentLine = 0;
main();
function readLine() { return inputString[currentLine++]; }
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
function maximumPeople(aPopulations, aTowns, aClouds, aRadii) {
    const PROD = true   // Production mode

    let towns = []
    let clouds = []
    // PROD || console.error('aTowns', aTowns)
    // PROD || console.error('aPops', aPopulations)
    // PROD || console.error('aClouds',aClouds)
    // PROD || console.error('aRadii', aRadii)
    
    
    // 1) Create Towns
    for(let x=0; x<aTowns.length; x++) {
        let town = {}
        town.location = parseInt(aTowns[x], 10)
        town.population = parseInt(aPopulations[x], 10)
        town.isDark = false  //default
        towns.push(town)
        }
    towns.sort( (a, b) => b.location - a.location )
    //PROD || console.table(towns)

    let firstTown = towns[towns.length - 1].location
    let lastTown = towns[0].location
    PROD || console.error(`firstlastTown: `,firstTown, lastTown) 

//     var duplicates = towns.reduce(function (acc, el, i, arr) {
//         if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) 
//             acc.push(el); return acc;
//     }, []);

//    console.log(duplicates);

    // 2) Build Clouds. Create list of clouds that cover any town
    for (let y= 0; y < aClouds.length; y++) {
        let cloud = {}
        cloud.location = parseInt(aClouds[y], 10)
        const rad = parseInt(aRadii[y], 10)
        cloud.min = Math.max(cloud.location - rad, firstTown)
        cloud.max = Math.min(cloud.location + rad, lastTown)
        cloud.towns = []
        //PROD || console.error('Cloud-->', cloud)
        if(0 != coversTown(cloud)) {
            PROD||console.log(cloud)
            clouds.push(cloud)
            }
        }

    PROD || console.error('Towns[]-->\n')  //modified towns
    PROD || console.table(towns)  //modified towns
    PROD || console.error('Clouds[]-->\n')
    PROD || console.table(clouds)
        
    // 3) Get maxPopInLight
    let maxPop = 0

    maxPop = Math.max(maxPop, getPopInLight())   //initial state
    PROD || console.error('initial Pop:', maxPop)

    // 4) Turn off each cloud and recalculate
    clouds.forEach( function(c) {
        setCloud('HIDE', c)
        maxPop = Math.max(maxPop, getPopInLight())
        //PROD || console.error('-- Pop:', maxPop)
        setCloud('SHOW', c)
        }) 

    return maxPop;
//} // end main

//! ** Get number of people in Light towns
function getPopInLight() {
    let totalInLight = 0

   towns.forEach(function (t) {
       //PROD || console.error("gPIL:", t)
       if (t.isDark == false)
           totalInLight += t.population
    })
    
    PROD || console.error("PopLight", totalInLight)
    return totalInLight // totalInLight;
}

//! ** Does this cloud cover any town? Return0 if no
function coversTown(cloud) { 
    for(let z= towns.length-1; z >= 0 ; z--) {
        let town = towns[z]
        if(town.location > cloud.max)
            break;  // don't check towns beyond cloud edge
        
        if (town.location >= cloud.min) {  // ...covered
            //! TBD update other Cloud maybe:
            if(! town.isDark){
                town.isDark = true
                cloud.towns.push(town)
            }
            else 
                towns.splice(z, 1)   //Delete it -a town with >1 cloud will never be light
        }
    }

    return cloud.towns.length;
}


//! HIDE or SHOW a cloud
function setCloud(state, cloud) {
    for(let z=0; z< cloud.towns.length; z++) 
        switch (state) {
            case "HIDE":
                cloud.towns[z].isDark = false
                break

            case "SHOW":
                cloud.towns[z].isDark = true
                break
        }
    }
} // end fn main    

