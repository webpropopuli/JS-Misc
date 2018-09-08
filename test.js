const towns = [
    { Location: "Mon", population: 33}, 
    { Location: "Mon", population: 2}, 
    { Location: "Tue", population: 60}, 
    { Location: "Tue", population: 100}, 
    { Location: "Wed", population: 30}
];

console.log(towns)
for(x=0; x< towns.length-2; x++) {
    next=x+1
    while(towns[x].Location == towns[next].Location || 0){
        towns[x].population += towns[next].population
        towns.splice(next, 1)
    }
}

// var idx = towns
//     .map(x => x.Location)
//     .indexOf("Tue");

// console.log(idx)





console.log(`###################################################>>`)
console.log(towns);