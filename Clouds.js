'use strict';

let test0 = [
    '2',
    '10 100',
    '5 100',
    '1',
    '4',
    '1'
];

let test1 = [
    '4',
    '10 1 8 3',
    '4 5 7 2',
    '4',
    '3 9 3 5',
    '11 10 8 7'
];

let test2 = [
    '5',
    '9 9 1 5 8',
    '1 7 7 11 7',
    '2',
    '2 3',
    '4 11'
];

let test3 = [
    '79',
    '924727444 911676561 169183958 897078398 197644693 538864153 355078085 889963367 83057550 386683981 26342675 800161701 689799167 681927173 379159292 984457892 947202373 509930585 683350765 761366159 75423188 28462578 170528689 738631913 490971235 394262494 293758941 658136433 158741937 28558012 170526498 64286998 169962696 156036061 389978105 872307350 56926670 656931501 972575280 183056889 407033143 529473597 185968073 654041649 310157067 186907788 538626404 424545722 376609930 792595754 758591028 820595189 669585469 259366482 521350503 502309931 106303678 198884505 587442970 57013182 943783933 944037097 789431599 212550057 465006301 911574737 533103950 46149137 367680701 529535349 831595712 353330388 226505143 311012252 567701279 194405968 877360590 227840600 378576648',
    '560799 310162 208664 938414 687224 891417 600662 199154 330321 253335 140615 568407 205389 758436 278695 98068 852756 32988 243728 638336 523575 47219 66904 326937 518953 408541 114027 525244 464622 505242 898052 379632 509996 247812 7266 13143 682834 455178 795643 822338 563744 839849 454995 503921 730348 391661 688834 92392 70245 492703 528582 631631 726542 816562 875935 284715 173067 3025 280946 451754 784695 603759 165712 722617 916791 33489 970244 564118 603712 514706 901510 575815 204217 611552 644876 608781 671283 557674 221054',
    '10',
    '475331 345528 475693 684678 868956 41411 38633 849320 279489 467035',
    '945512111 441291696 300844551 383815348 97820045 811145419 44099295 294598293 237045792 255752277'
];

let test6 = [
    '47',
    '674887446 921852046 5893856 40881486 894383259 109696488 998398424 426925564 795618791 477089750 177330400 753327758 382818603 421867876 92049242 745214244 275513473 810520965 641402038 367719419 477526346 152066565 79903905 113808813 336232857 278865422 909548054 78147488 821601786 949410949 921944880 885879115 283362247 350398425 797614564 488632625 631221587 656695868 735438628 385151008 482940214 35315529 830760647 884484212 112769026 430790536 523145200',
    '420634683 225209202 143203050 566492210 140727249 543874378 384821966 931048044 608605356 328218596 785420598 752948949 539333168 931492443 987144337 292696683 597392582 726894178 638496649 615188899 997827939 919845713 850609463 882278623 627526675 63018833 566500846 254968078 837458171 963292780 292637836 940949597 728637722 698669905 260949630 71888799 107494664 846250346 331580400 332431059 43653102 173734374 926059620 667910973 580594750 624639774 515122451',
    '2',
    '665306027 707496587',
    '169197109 72791347'
]


let inputString = test3

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

