
let beerSong = () => {
  for (let i = 99; i >= 0; i--) {
    if (i > 1) {
      const newP = document.createElement("p");
      const newContent = document.createTextNode(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
      newP.appendChild(newContent);
      document.body.appendChild(newP);
    }
    else if (i == 1) {
      const newP = document.createElement("p");
      const newContent = document.createTextNode(`1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.`);
      newP.appendChild(newContent);
      document.body.appendChild(newP);
    }
    else {
      const newP = document.createElement("p");
      const newContent = document.createTextNode(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
      newP.appendChild(newContent);
      document.body.appendChild(newP);
    }
  }
}

beerSong();