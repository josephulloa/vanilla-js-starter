import { postData, deleteData } from "../src/API.js";

const ul = document.querySelector("#lista");
const nada = document.querySelector(".vacio");
let contador = document.querySelector("#contador");

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

  let task = { task: text };
  let resultado = await postData(task);
  // li.id = resultado.id;
  console.log(resultado.id);

  li.appendChild(check());
  li.appendChild(p);
  li.appendChild(botonBorrar());
  ul.appendChild(li);

  document.getElementById("ingresar").value = "";
  nada.style.display = "none";
}
//CHECK LIST CHECK DONE//
function check() {
  let checkbox = document.createElement("input");
  checkbox.className = "check";
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", function (e) {
    incrementarContador(e.target.checked);
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

      resta = cuenta;
      resta = resta - 1;
      contador.innerHTML = resta;
    }

    ul.removeChild(item);

    console.log(item.id);

    deleteData(item.id);

    let cosa = ul.querySelectorAll("li");

    console.log(cosa);

    if (cosa.length === 0) {
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
  console.log(e.code);
  if (e.code == "Enter") {
    validar();
  }
}

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

// function obtenerUsuarios() {
//     fetch("http://localhost:3000/users")
//       .then((respuesta) => respuesta.json())
//       .then((data) => {
//         console.log("lista de usuarios", data);
//       })
//       .catch((error) => {
//         console.log("Error no hay lsta", error);
//       });
//   }

export const ingresar = document.querySelector("#ingresar");
