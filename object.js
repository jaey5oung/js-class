var memberArray = ["jang", "kang", "bak"]
console.log("memberArray[1]", memberArray[1])

var memberArray2 = {
  HTML: "jang",
  CSS: "kang",
  JavaScript: "bak",
}

//이름변경하는것
memberArray2.JavaScript = "bakjin"
console.log(memberArray2.JavaScript)
console.log(memberArray2["CSS"])
//이름삭제하는것
delete memberArray2.CSS
console.log(memberArray2.CSS)
