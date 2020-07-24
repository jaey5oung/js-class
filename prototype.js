function Person(name, first, second, third) {
  ;(this.name = name), (this.first = first), (this.second = second), (this.third = third)
}
//객체를만든다 , 객체의초기세팅값이있다
Person.prototype.sum = function () {
  return "prototype : " + this.first + this.second + this.third
}

var jang = new Person("jang", 10, 20, 30)
jang.sum = function () {
  return "this : " + (this.first + this.second)
}
var kim = new Person("kim", 10, 10, 10)
console.log(jang.name, jang.sum())
console.log(kim.name, kim.sum())
