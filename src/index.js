import { validar, addItem } from "./funciones.js";
import { getTasks } from "./API.JS";

const btn = document.querySelector(".btn");
btn.addEventListener("click", validar);
ingresar.addEventListener("keypress", addItem);



let get = getTasks()

console.log(get)

let valores= JSON.stringify(get)


