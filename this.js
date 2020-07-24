var jang = {
  name: "jang",
  first: 10,
  second: 20,
  sum: function (f, s) {
    return this.first + this.second
  },
}
// console.log("jang.sum(jang.first, jang.second)", jang.sum(jang.first, jang.second))
console.log("jang.sum(jang.first, jang.second)", jang.sum())

//자신이 속해있는객체를 가르키는것 this
//this,는 메소드(함수가)속해져있는 그 객체를 가르키도록 약속한것 특수한약속
