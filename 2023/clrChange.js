let clr1 = prompt('Enter 1st color:');
let clr2 = prompt('Enter 2nd color:');
let clr3 = prompt('Enter 3rd color:');
let clr4 = prompt('Enter 4th color:');

let bgr = document.body;

clrArr = [];
clrArr.push(clr1, clr2, clr3, clr4);

clrArr = clrArr.map(function(x) {
  return x.toUpperCase();
})

let boxes = (clrs) => {
  for (let i = 0; i < clrs.length; i++) {
    let box = document.createElement('div');

    box.style = `width: 150px; height: 150px; background-color: ${clrs[i]}; margin: 10px; display: grid; place-items: center; font-size: 18px; font-weight: 700;`;

    document.body.appendChild(box);

    box.onclick = () => {
      bgr.style.backgroundColor = clrArr[i];
      let boxArr = document.querySelectorAll('div');

      box.style.color = 'black';

      boxArr.forEach(b => {
        b.textContent = '';
        box.style.backgroundColor = `${clrs[i]}`;
      });
      box.textContent = `${clrArr[i]}`
    }
  }
}


boxes(clrArr);