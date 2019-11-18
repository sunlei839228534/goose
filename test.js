class Animal {
  constructor(name,age) {
    this.name = name,
    this.age = age,
  }
  walk() {
    console.log(this.name + 'is walking')
  }
  speak() {
    console.log('I am ' + this.name + ',' + 'I am ' + this.age)
  }
}

class Cat extends Animal {
  constructor(name,age,gender,jiji) {
    super(name,age)
    this.gender = gender
    this.jiji = jiji
  }
  showgender() {
    console.log(this.gender)
    console.log(this.jiji)
    console.log(this.__proto__ === this.__proto__.constructor.prototype)
  }
}

const cat = new Cat('cat',12,120,1292)
cat.showgender()

