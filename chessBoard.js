let totalSq = parseFloat(prompt("Number of squares: (Best:1 4 9 16 25 36 49 64 81 100 121 144 169...)"));
let chessBoard = document.createElement("div");

chessBoard.style = "background-color: #CFA76E; width: 480px; height: 480px; display: flex; flex-wrap: wrap"
document.body.appendChild(chessBoard);

/*if (totalSq % 2 != 0) {
  alert("Please enter an even number");
  location.reload();
}*/

let sqrtTotal = Math.sqrt(totalSq);
let numOfSq = totalSq / sqrtTotal;


   for (var i = 0; i < sqrtTotal; i++) {
      for (var j = 0; j < numOfSq; j++) {
         var chessSquare = document.createElement('div');
         chessSquare.style = `float: left; background-color: rgba(0, 0, 0, 0); width: calc(480px / ${sqrtTotal}); height: calc(480px / ${sqrtTotal})`
         if ((i + j) % 2 == 0) {
            chessSquare.style.backgroundColor = '#6B2504';
         }
         chessBoard.appendChild(chessSquare);
      }
   }
