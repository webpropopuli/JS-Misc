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
//***************************************************** */

// Complete the maximumPeople function below.
function maximumPeople(aPopulations, aTownLocations, aClouds, aRadii) {

    const PROD = 0//true   // Production mode

    let maxCloud = 0  // the end of the cloudy road is the max edge of the last cloud
    let maxInLight = 0
    let permanentLight = 0

    let road = []       // the Road only holds potentially cloudy spots....
    let clouds = []

    //! 0 PUT TOWNS ON THE ROAD
    for(let x = 0; x < aPopulations.length; x++) {
        const addr = aTownLocations[x]
        if (road[addr] == undefined)   // NEW TOWN ON ROAD
            road[addr] = { hasTown: true, hasCloud: false, population: aPopulations[x], address: addr };
        else                           // UPDATE TOWN ON ROAD
            road[addr].population += aPopulations[x]
    }
   
    let tmpArr = aTownLocations
    tmpArr.sort((a, b) => a - b)

    let firstTown = tmpArr[0]
    let lastTown = tmpArr[tmpArr.length-1]
    PROD|| console.error(`firstTown: ${firstTown}, lastTown: ${lastTown}`) 
 
    //! FLATTEN THE ROAD
    // road.forEach(function (item, index) {
    //     console.log('k ')
    //     item.address = index;
    // })

    //! 1 PUT CLOUDS ON THE ROAD. 
    //! Is a spot on the road under any cloud? The index value into road[] is the location value

    PROD || console.log(`Processing clouds..... `)
    for (let y = 0; y < aClouds.length; y++) {
        let cloud = {}
        const rad = parseFloat(aRadii[y], 10)
        cloud.address = parseFloat(aClouds[y], 10)
        cloud.min = Math.max(cloud.address - rad, firstTown)
        cloud.max = Math.min(cloud.address + rad, lastTown)

        PROD || console.error(cloud)
        PROD || console.error('A')

        const flatRoad = road.filter(v => { return v !== undefined });
        console.table(flatRoad)
        PROD || console.error('B')
        for (let x = cloud.max; x >= cloud.min; x--) {
            // if (road[x] == undefined)
            //     console.log(`no `)
            // else 
            {
                if(road[x].hasTown) {
                    if (road[x].hasCloud == true) { // If it already had a cloud, this spot will always be dark
                        road[x] = undefined   //another cloud here
                         //PROD || console.log(`road[addr] ${x} dup & deleted`)
                    }
                    else {
                        road[x].hasCloud= true;
                        //PROD || console.log(`town ${x} has cloud`)
                    }
                    clouds.push(cloud)
                }    
            }
        }
     }

    //! 2 VISIT TOWNS
    //! if town not listed in road[] add town pop to permanentLight
    //! else add population to road[location
    for(let addr=1; addr<road.length; addr++) {
        if (road[addr] != undefined) {
            let pop = road[addr].population
            
            if (road[addr].hasCloud == false) {
                permanentLight += pop  // location has no clouds ever
            }
        }
        // else {
        //     PROD ||console.error(addr, 'undefined addr')

        //     //PROD || console.error(`road ${addr} pop is ${road[addr].population} `)
        // }
    }
    PROD|| console.error(`permLight: ${permanentLight}`)
    PROD|| console.table(road)

    //! 3 EXAMINE CLOUDS AND BUILD TOTAL POP UNDER EACH CLOUD
    for (let y = 0; y < clouds.length; y++) {
        let popUnderThisCloud = 0
        for (let addr = Math.max(0, clouds[y].min); addr <= clouds[y].max; addr++) {
            if(road[addr] != undefined)
                popUnderThisCloud += road[addr].population || 0
        }

        maxInLight = Math.max(maxInLight, permanentLight + popUnderThisCloud)
    }
return maxInLight
} // end fn main 