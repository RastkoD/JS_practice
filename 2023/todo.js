let button = document.getElementById('todoBtn');
let input = document.getElementById('todoInput');
let list = document.getElementById('list');

button.onclick = function () {
  let div = document.createElement('div')
  let todoItem = document.createElement('span');
  let list = document.getElementById('list');
  todoItem.appendChild(document.createTextNode(input.value));
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  

  checkbox.onchange = function () {
    if (checkbox.checked) {
      todoItem.style.textDecoration = "line-through";
      todoItem.style.opacity = ".5";
    }
    else {
      todoItem.style.textDecoration = "";
      todoItem.style.opacity = "1";
    }
  }


  let remove = document.createElement('button');
  remove.textContent = 'x';
  remove.style.backgroundColor = "red";
  remove.style.color = "white";
  remove.style.border = "none";

  remove.onclick = function () {
      div.style.display = "none";
  }

  checkbox.style.margin = '.3rem';
  todoItem.style.margin = '.3rem';
  remove.style.margin = '.3rem';

  div.appendChild(checkbox);
  div.appendChild(todoItem);
  div.appendChild(remove);
  list.appendChild(div);
  input.value = "";
}