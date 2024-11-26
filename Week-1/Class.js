class Animal{
    constructor(name,legCount,speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks
    }
    static myType(){
        console.log("Animal");
        
    }
    speak(){
        console.log(`Hi there ${this.speaks}`);
        
    }
}
// static says I am associated with classes (Blueprint ) but not with Objects

let dog = new Animal("dog",4,"bhow-bhow");
let cat = new Animal("cat",4,"meow-meow");
console.log(Animal.myType());

cat.speak()

/*

Classes are useful because they let you:

-Bundle data and behavior together.
-Encapsulate details to hide complexity.
-Use inheritance for reusability and polymorphism for flexibility.
-Manage state per object instance.
-Organize large programs more effectively.
-In small scripts, functions can be enough, but classes shine in larger projects
 for structure and reusability.

*/

// https://chatgpt.com/c/672709b4-5240-8006-911b-b7641a1bf1cb

