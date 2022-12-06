// seleccionar los elementos del dom
let input = document.querySelector("input");
let select = document.querySelector("select");
let addBtn = document.querySelector(".btn-add");
let ul = document.querySelector("ul");
let empty = document.querySelector(".empty");
let b = document.querySelector(".li-container > b");
let count = 10;


addBtn.addEventListener("click", (e) => {

  //detener el evento del form
  e.preventDefault();

  //capturar texto del input
  let text = input.value;
  let optionValue = select.options[select.selectedIndex].value;
  let optionText = select.options[select.selectedIndex].text;

  //si el texto no esta vacio agregar nota
  if (text !== "") {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = text;


    li.appendChild(p);
    li.appendChild(colorChange());
    li.appendChild(deleteBtn());

    //Color segun categoria
    for (let i = 0; i < optionText.length; i++) {
      if (optionValue[i]) {
        li.style.background = optionValue;
        console.log(optionValue);
      }
    }
    ul.appendChild(li);


    count--;
    Counter(count);

    input.value = "";
    empty.style.display = "none";

  } else {
    alert('Por favor ingrese una tarea!')
  }

console.log(count)
});

//funcion de contador para crear notas hasta el la tona 10
function Counter(count){
  let str = count.toString();
  b.textContent = 'Capacidad restante '+str+' notas';

  if(count == 0){
    input.disabled = true;
    b.style.color = 'red';
  }
}

//funcion para cambiar color a verde como tarea realizada!
function colorChange() {
  let colorBtn = document.createElement("button");
  colorBtn.textContent = "V";
  colorBtn.className = "btn-hecho";

  colorBtn.addEventListener("click", (e) => {
    let item = e.target.parentElement;
    item.style.background = "rgba(0, 128, 0, 0.79)";
  });

  return colorBtn;
}

// funcion de eliminar cada tarea
function deleteBtn() {
  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    let item = e.target.parentElement;
    ul.removeChild(item);

    let items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

