let string = prompt('Enter parens:');

var isValid = function(str) {
  str = str.split("");
  let strArr = [];
  for (let s of str) {
      if (s === "(" || s === "{" || s === "[") {
          strArr.push(s);
      } else {
          let prev = strArr[strArr.length - 1];
          if (s === ")" && prev === "(" || s === "]" && prev === "[" || s === "}" && prev === "{") {
              strArr.pop();
          }    
          else {
            strArr.push("s")
          }              
      }
      console.log(strArr)
  }
   if (strArr.length === 0) {
    alert("Valid Input");
  } else {
    alert("NOT a Valid Input");
  }
}




isValid(string);