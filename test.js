
class Person {
  constructor(age) {
    this.age = age
  }
  static speak(v) {
    console.log(v)
  }
  ni(v) {
    console.log(v)
  }
}

class Man extends Person {

}
const a = new Man()
a.tobb = () => {
  console.log(1)
}
const b = a.__proto__

