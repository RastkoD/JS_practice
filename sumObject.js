input = {
  "prvi": 122,
  "drugi": 18,
  "treci": "NotAnInteger",
  "cetvrti": -2,
  "peti": 322,
  "sesti": 32.0
  }

  let result = () => {
    let sum = 0;
    for (let i in input) {
       let isNum = `${input[i]}`;
       if (isNaN(isNum) === false) {
        sum += parseFloat(isNum);
       }
       console.log(sum)

  }
}

  result(input);
