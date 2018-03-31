class Person {
    constructor(name, age) {
        this.id = Math.random() + '';
        this.name = name;
        this.age = age + 1;
    }

    sayHello() {
        console.log(`Hello, I am ${this.name}, ${this.age} years old.`);
    }
}

class Child extends Person {
    constructor(name, age, height) {
        super(name, age);
        this.height = height;
    }
    sayHi() {
        console.log('Hiiii, height = ', this.height);
    }
    sayHello() {
        super.sayHello();
        console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
    }
}

const teo = new Child('Teo Nguyen', 10, 100);
teo.sayHello();
teo.sayHi();
