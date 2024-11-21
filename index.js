const fs = require("fs"); // Importa el módulo 'fs' para trabajar con el sistema de archivos

/* 
const { saludar, darLasGracias } = require("./modales"); // Importa funciones de otro módulo (comentado)
const tareas = [
  { text: "Ir al gimnasio" },
  { text: "Buscar al niño al colegio" },
  { text: "Pagar los gastos comunes" },
  { text: "Pagar los gastos comunes" },
];
fs.writeFileSync("tareas.json", JSON.stringify(tareas)); // Escribe las tareas en un archivo JSON
const Leertareas = fs.readFileSync("tareas.json", "utf-8"); // Lee el archivo JSON
JSON.parse(Leertareas).forEach((tarea) => {
  console.log(tarea.text); // Imprime cada tarea en la consola
});
saludar("rosa"); // Llama a la función 'saludar' (comentado)
darLasGracias("rosa"); // Llama a la función 'darLasGracias' (comentado)
*/

console.log(process.argv); // Imprime los argumentos de la línea de comandos
let opcion = process.argv[2]; // Almacena el segundo argumento como 'opcion'
let mascota = process.argv[3]; // Almacena el tercer argumento como 'mascota'
let nombre = process.argv[4]; // Almacena el cuarto argumento como 'nombre'
let edad = process.argv[5]; // Almacena el quinto argumento como 'edad'
let poder = process.argv[6]; // Almacena el sexto argumento como 'poder'

const escribir = () => {
  const lista = fs.readFileSync("mascotas.json", "utf-8"); // Lee el archivo 'mascotas.json'
  const listaParseada = JSON.parse(lista); // Parsea el contenido del archivo a un objeto
  listaParseada.push({ mascota, nombre, edad, poder }); // Agrega un nuevo objeto al array
  fs.writeFileSync("mascotas.json", JSON.stringify(listaParseada)); // Escribe el array actualizado en el archivo
};

const leer = () => {
  const lista = fs.readFileSync("mascotas.json", "utf-8"); // Lee el archivo 'mascotas.json'
  console.log(lista); // Imprime el contenido del archivo
};

if (opcion === "escribir") {
  escribir(); // Llama a la función 'escribir' si la opción es 'escribir'
}

if (opcion === "leer") {
  leer(); // Llama a la función 'leer' si la opción es 'leer'
}
