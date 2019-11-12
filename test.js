class Animal {
  constructor(name,age) {
    Object.assign(this,{
      name,
      age
    })
  }
  walk() {
    console.log(`${this.name} is walking`)
  }
}

class Cat extends Animal {
  constructor() {
    super()
  }
}
const a = new Cat('name',1)
