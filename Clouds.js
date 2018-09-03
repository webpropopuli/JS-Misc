'use strict';

let test1 = [
    '2',
    '10 100',
    '5 100',
    '1',
    '4',
    '1'
];

let test2 = [
    '4',
    '10 1 8 3',
    '4 5 7 2',
    '4',
    '3 9 3 5',
    '11 10 8 7'
];

let inputString = test2


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
    let towns = []
    let clouds = []
    // console.error('aTowns', aTowns)
    // console.error('aPops', aPopulations)
    // console.error('aClouds',aClouds)
    // console.error('aRadii', aRadii)
    
    
    // 1) Create Towns
    for(let x=0; x<aTowns.length; x++) {
        let town = {}
        town.location = aTowns[x]
        town.population = aPopulations[x]
        town.isDark = false  //default
        towns.push(town)
        }
    //console.log("Towns", towns)

    // 2) Build Clouds. Create list of clouds that cover any town
    for (let y= 0; y < aClouds.length; y++) {
            let cloud = {}
            cloud.location = aClouds[y]
            cloud.radius = aRadii[y]
            cloud.towns = [];
            //console.log('Cloud-->', cloud)
            if(true === coversTown(cloud))
                clouds.push(cloud);
            }
        console.error('Clouds[]-->', clouds)
        console.error(towns)  //modified towns
        
    // 3) Get maxPopInLight
    let maxPop = 0

    maxPop = Math.max(maxPop, getPopInLight())   //initial state

    // 4) Turn off each cloud and recalculate
    clouds.forEach( function(c) {
        setCloud('OFF', c)
        maxPop = Math.max(maxPop, getPopInLight())
        setCloud('ON', c)
        }) 

    return maxPop;
//} // end main

//** Get number of people in Light towns
function getPopInLight() {
    let totalInLight = 0
    const sum = towns
        .map(function (b) { return b.isDark === false ? b.population : 0 })
        .reduce(function (p, c) { return p + c; });

    // towns.forEach(function(t) {
    //     if(t.isDark === false)
    //         totalInLight += t.population
    // })
    
    console.error("PopLight", totalInLight)
    return sum// totalInLight;
}



function isTownUnderCloud(cloud, town) {
    let cMin = cloud.location - cloud.radius;
    let cMax = cloud.location + cloud.radius;
    console.error(`tloc: ${town.location} min: ${cMin}, max: ${cMax}`)
    if(town.location <= cMax && town.location >= cMin) {
        console.error("dark")
        return true }
    else {
        console.error("light")
    return false }
}

//** Does this cloud cover a town
function coversTown(cloud) { 
    let coversAnyTown = false
    for(let z=0; z< towns.length; z++) {
        if(isTownUnderCloud(cloud, towns[z])) {
            let town  =towns[z]
            town.isDark = true
            //! TBD if town dark then delete town and
            //! and update other Cloud maybe:
            // town.coveringCloud = cloud
            // cloud.removeTown(town)
            // town.delete()
            cloud.towns.push(town)
            coversAnyTown = true  // redundant if towns array exists
            }
        }

    return coversAnyTown
    }


// 'shut off' a cloud
function setCloud(state, cloud) {
    for(let z=0; z< towns.length; z++) 
        if(isTownUnderCloud(cloud, towns[z])) 
            towns[z].isDark = state==="OFF" ? false : true
}
} // end fn main    

