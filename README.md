1- Importar Módulos:
Comenzamos importando el módulo `fs` de Node.js, que nos permite trabajar con el sistema de archivos. Esto es necesario para leer y escribir archivos en nuestro proyecto.

2 - Definir Datos Iniciales:
Creamos un array de objetos llamado `tareas`, donde cada objeto representa una tarea con una propiedad `text` que describe la tarea.

3- **Escribir Datos en un Archivo:**
Usamos `fs.writeFileSync` para escribir el array `tareas` en un archivo llamado `tareas.json`. Convertimos el array a formato JSON usando `JSON.stringify` para que pueda ser almacenado en el archivo.

4. **Leer Datos de un Archivo:**
   Leemos el contenido del archivo `tareas.json` usando `fs.readFileSync` y lo convertimos de nuevo a un objeto JavaScript con `JSON.parse`.

5. **Imprimir Tareas:**

   - Iteramos sobre cada tarea en el array y la imprimimos en la consola usando `console.log`.

----------mascotas-----------

1.  **Trabajar con Argumentos de Línea de Comandos:**

- Usamos `process.argv` para capturar argumentos que se pasan al ejecutar el script desde la línea de comandos. Estos argumentos nos permiten decidir qué acción realizar (por ejemplo, "escribir" o "leer").

2.  **Definir Funciones para Escribir y Leer Mascotas:**

- Creamos una función `escribir` que lee un archivo `mascotas.json`, agrega una nueva mascota al array y vuelve a escribir el archivo.

3. \*\*
   - Dependiendo del argumento de opción (`opcion`), llamamos a la función `escribir` o `leer`.\*\*

_ejemplo : node index.js escribir perro limon 4 comilon_
