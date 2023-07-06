import { postData, deleteData, getData, updateData } from "../src/API.js";

const ul = document.querySelector("#lista");
const nada = document.querySelector(".vacio");
let contador = document.querySelector("#contador");
let datos = await getData();

datos?.forEach((element) => {
  let text = element.task;
  let li = document.createElement("li");
  li.classList.add("tarea");
  let p = document.createElement("p");
  p.textContent = text;
  li.id = element.id;

  li.appendChild(check(element));
  li.appendChild(p);
  li.appendChild(botonBorrar());
  ul.appendChild(li);
});

//update task
async function updateTask(id, isChecked) {
  let checked = { checked: isChecked };
  let check = await updateData(id, checked);
}

//INPUT VALUE //
export function validar() {
  let validar = ingresar.value;
  if (validar.trim() == "") {
    alert("Inserte Tarea");
  } else if (emptyValue() == true) {
    alert("tarea repetida");
  } else {
    addTask();
  }
}
//ADD TASK //
export async function addTask() {
  let text = ingresar.value;
  let li = document.createElement("li");
  li.classList.add("tarea");
  let p = document.createElement("p");
  p.textContent = text;

  let task = { task: text, };
  let resultado = await postData(task);
  li.id = resultado.id;

  li.appendChild(check(resultado.id));
  li.appendChild(p);
  li.appendChild(botonBorrar());
  ul.appendChild(li);

  // let datos= {getData: ul}

  document.getElementById("ingresar").value = "";
  nada.style.display = "none";
}

//CHECK LIST CHECK DONE//
function check(id) {
  let checkbox = document.createElement("input");
  checkbox.checked= false
  checkbox.className = "check";
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", function (e) {
    incrementarContador(e?.target?.checked);
    updateTask(id, e?.target?.checked);
  });
  return checkbox;
}

//ERASER BUTTON //
function botonBorrar() {
  const borrar = document.createElement("i");
  borrar.className = "fa fa-trash borrar";

  borrar.addEventListener("click", function (e) {
    const item = e.target.parentElement;
    const valido = item.querySelector("input");

    // const valido = item.querySelector(".check");
    if (valido.checked) {
      let cuenta = Number(contador.textContent);
      let resta = cuenta - 1;
      contador.innerHTML = resta;
    }

    ul.removeChild(item);

    deleteData(item.id);

    let items = ul.querySelectorAll("li");

    if (items.length === 0) {
      nada.style.display = "block";
    }
  });

  return borrar;
}
//COUNNT FUCTION//
function incrementarContador(isChecked) {
  let cuenta = Number(contador.textContent);

  if (isChecked) {
    contador.textContent = cuenta + 1;
  } else {
    contador.textContent = cuenta - 1;
  }
}

export function addItem(e) {
  if (e.code == "Enter") {
    validar();
  }
}

//NOT SAVE THE SAME TASK
function emptyValue() {
  let listaTareas = document.querySelectorAll(".tarea");

  for (let i = 0; i < listaTareas.length; i++) {
    if (
      listaTareas[i].innerText.toLowerCase() === ingresar.value.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

// async function getTaks() {
//  fetch("http://localhost:3000/api/task/")
//  .then(function (response) {
//  console.log(response)
//  })

// }

// function obtenertareas() {
//   obtenertareas()
//     .then((task) => {
//       listaTareas = task;
//       console.log("exitoso");
//     })
//     .catch((error) => {
//       console.log("error");
//     });
// }

// run add task when load page

export const ingresar = document.querySelector("#ingresar");
