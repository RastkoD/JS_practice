let input = document.querySelector('#input');
let output = document.querySelector('#output');
let button = document.querySelector('#button');


const letters = [
  {a: 'a'},
  {A: 'А'},
  {b: 'б'},
  {B: 'Б'},
  {c: 'ц'},
  {C: 'Ц'},
  {d: 'д'},
  {D: 'Д'},
  {e: 'е'},
  {E: 'Е'},
  {f: 'ф'},
  {F: 'Ф'},
  {g: 'г'},
  {G: 'Г'},
  {h: 'х'},
  {H: 'Х'},
  {i: 'и'},
  {I: 'И'},
  {j: 'ј'},
  {J: 'Ј'},
  {k: 'к'},
  {K: 'К'},
  {l: 'л'},
  {L: 'Л'},
  {m: 'м'},
  {M: 'М'},
  {n: 'н'},
  {N: 'Н'},
  {o: 'о'},
  {O: 'О'},
  {p: 'п'},
  {P: 'П'},
  {r: 'р'},
  {R: 'Р'},
  {s: 'с'},
  {S: 'С'},
  {t: 'т'},
  {T: 'Т'},
  {u: 'у'},
  {U: 'У'},
  {z: 'з'},
  {Z: 'З'},
  {v: 'в'},
  {V: 'В'},
  {ǉ: 'љ'},
  {ǈ: 'Љ'},
  {ǌ: 'њ'},
  {Ǌ: 'Њ'},
  {š: 'ш'},
  {Š: 'Ш'},
  {č: 'ч'},
  {Č: 'Ч'},
  {ć: 'ћ'},
  {Ć: 'Ћ'},
  {đ: 'ђ'},
  {Đ: 'Ђ'},
  {ž: 'ж'}, 
  {Ž: 'Ж'}, 
  {ǆ: 'џ'},
  {ǅ: 'Џ'},
  {ǳ: 'џ'},
  {ǲ: 'Џ'},
  {',': ','},
  {".": "."},
  {" ": " "},
  {x: "□"},
  {X: "□"},
  {y: "□"},
  {Y: "□"},
  {q: "□"},
  {Q: "□"},
  {w: "□"},
  {W: "□"}
];

button.onclick = () => {
  let lat = Array.from(input.value);
  let array3 = [];

  for (let i = 0; i < lat.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      let cyr = Object.keys(letters[j])[0];
      if (lat[i] === cyr) {
        array3.push({value2: letters[j][cyr]});
      }
    }
  }

  let other = array3.map(object => object.value2).join('');

  output.value = other;
};





/*for (let j in letters) {

    console.log(letters[j])
  }


  console.log(typeof(lat[4]) == typeof(letters.g))
  console.log(lat[4], letters.g)

/*
function matchProperties(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i].property === array2[j].property) {
        array3.push({property: array1[i].property, value1: array1[i].value, value2: array2[j].value});
      }
    }
  }
  return array3;
}

*/