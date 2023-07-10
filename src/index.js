import { validar, addItem } from "./funciones.js";
import { getTasks } from "./API.JS";

const btn = document.getElementById("btn-ingresar");
const ingresar = document.getElementById("ingresar");

btn.addEventListener("click", validar);
ingresar.addEventListener("keypress", addItem);

let get = await getTasks();

let valores = JSON.stringify(get);