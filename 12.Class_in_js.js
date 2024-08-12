class Me{
    constructor(name,year){ //Always add constructor after creating class
        this.name = name,
        this.year = year
    }
    age(){
        let date = new Date()
        return date.getFullYear() - this.year
    }
}

let myAbout = new Me("Debadarshan",2002)
console.log(`My name is ${myAbout.name} and I am ${myAbout.age()} years old`)