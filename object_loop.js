var memberArray = ["jang", "kang", "bak"]
var i = 0
console.group("array loop")

while (i < memberArray.length) {
  console.log(i, memberArray[i])

  i = i + 1
}
console.groupEnd("array loop")

var memberArray2 = {
  HTML: "jang",
  CSS: "kang",
  JavaScript: "bak",
}
//객체에서 for문은 for in 문을 써줘야한다 in 뒤에는 객체가와야한다
console.group("object loop")
for (var name in memberArray2) {
  console.log(name, memberArray2[name])
}

console.groupEnd("object loop")
