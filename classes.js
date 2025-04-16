// class Dog{
//     constructor(DogName, weight, color, breed){
//         this.DogName=DogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("javascript", 2.4, "brown", "chihuahua");
// console.log

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("singhal");
// console.log("hi", p.firstname, p.lastname);

// class Person {
//     constructor(firstname, lastname = "singh") {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("singhal");
// console.log("hi", p.firstname, p.lastname);

// functions on a class are called methods //

class Person {
    constructor(firstname, lastname = "singh") {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        console.log("hi there! I'm", this.firstname)
    }
}
let p = new Person("singhal","singh");
//console.log("hi", p.firstname, p.lastname);
p.greet();