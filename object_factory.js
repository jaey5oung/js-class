// var jang = {
//   name: "jang",
//   first: 10,
//   second: 20,
//   third: 30,
//   sum: function (f, s) {
//     return this.first + this.second + this.third
//   },
// }
// var kim = {
//   name: "kim",
//   first: 10,
//   second: 20,
//   third: 10,
//   sum: function (f, s) {
//     return this.first + this.second + this.third
//   },
// }
// console.log("jang.sum(jang.first, jang.second)", jang.sum(jang.first, jang.second))
// console.log("jang.sum()", jang.sum())
// console.log("kim.sum()", kim.sum())

//자신이 속해있는객체를 가르키는것 this
//this,는 메소드(함수가)속해져있는 그 객체를 가르키도록 약속한것 특수한약속

// var d1 = new Date("2020-7-24") //여깃는 데이트는 new라는 객체를 만들어서 리턴해주고있다
// console.log("d1.getMonth()", d1.getMonth())
// console.log("Date", Date)

function Person(name, first, second, third) {
  ;(this.name = name),
    (this.first = first),
    (this.second = second),
    (this.third = third),
    (this.sum = function () {
      return this.first + this.second + this.third
    })
}

var jang = new Person("jang", 10, 20, 30)
var kim = new Person("kim", 10, 20, 30)
console.log(jang.name, jang.sum())
console.log(kim.name, kim.sum())

//constructor 앞에 new가붙어있으면 무조건 컨트스럭터 생성자 함수이다
// console.log("new Person()", new Person())
