import {addTask, validar}  from "./index.js";
const btn = document.querySelector(".btn");

console.log(addTask)
btn.addEventListener("click", addTask);
ingresar.addEventListener("keypress", validar);

