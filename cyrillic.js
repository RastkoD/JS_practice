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
        array3.push({value: letters[j][cyr]});
      }
    }
  }

  let other = array3.map(object => object.value).join('');

  output.value = other;
};

