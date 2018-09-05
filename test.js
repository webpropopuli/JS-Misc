class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(text) {
        return (`${text}${this.name}`);
    };
}

var person = { name: "Jimmy", lastName: "Doe", age: 50, eyeColor: "blue" };
let arr = []

var first = new Student('John', 26)
first.fred=3

arr[1]= first

arr[2] = person
arr[2].eyeColor = 'Burnished pamplemousse'
arr[2].newThingy = 56

person = { name: "steve", lastName: "smith", age: 3};

arr[6] = { name: "steve", lastName: "smith", age: 3 };
arr[8] = person;
arr[8].newThingy = 88

first = new Student('dav', 44 )
arr[4]= first
console.log(first.speak("Hello there "))


console.table(arr)