class Animal {
    constructor(name){
        this.name = name
    }

    voice() {
        console.log(`${this.name}` + "  " + "voice is")
    }

    eat(){
        console.log(`${this.name}` + "  " + "eating")
    }

    walk(){
        console.log(`${this.name}` + "  " + "walking")
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    
    voice() {
        super.voice();
        
        console.log("haf");
    }

}

class Cat extends Animal{
    constructor(name){
        super(name)
    }
    
    voice() {
        super.voice();
        console.log("pyu")
    }
}

bulldog = new Dog("quto")
bulldog.voice()
bulldog.eat()
bulldog.walk()