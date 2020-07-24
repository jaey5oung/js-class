class Person {
  constructor(name, first, second) {
    this.name = name
    this.first = first
    this.second = second
  }
  sum() {
    return "prototype : " + (this.first + this.second)
  }
}

//new 객체를 생성할때 클래스에서 constructor함수를생성해줘야한다

var jang = new Person("jang", 10, 20)
jang.sum = function () {
  return "this : " + (this.first + this.second)
}
console.log("jang", jang.sum())
var kim = new Person("kim", 30, 40)
console.log("kim", kim.sum())

// jang.sum = function () {
//   return "this : " + (this.first + this.second)
// }
// var kim = new Person("kim", 10, 10, 10)
// console.log(jang.name, jang.sum())
// console.log(kim.name, kim.sum())
