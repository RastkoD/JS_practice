//shortest but not empty
array = ["aaa", "bbbb", "cc", ""];

for (let i = 0; i < array.length; i++) {
  if (array[i].length === 0) {
    delete array[i];
  }
}

let strMin = array.reduce(function(a, b) {
  return a.length <= b.length ? a : b;
})
  console.log(strMin);
