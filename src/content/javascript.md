---
title:  Convenciones Javascript. 
author: Giovani Fouz Jiménez
description: Como escribir código Javascript...
img: xxx.jpg
position: center
date: march 27, 2022
---

## Introducción
Hay muchas convenciones de codificación cuando se trata de usar el
lenguaje de programación JavaScript. Las convenciones de codificación
son pautas de estilo para la programación. Seguir esas convenciones
mejorará su codificación JavaScript y hará que su código sea fácil de
mantener y de leer. Entonces, en este artículo, decidí mostrarte
algunas convenciones de codificación simples que debes conocer.

## Denominación de variables
El uso de variables en JavaScript parece ser una tarea muy simple,
pero debe seguir algunas reglas al nombrar sus variables, por ejemplo,
tendrá que usar camelCase para los nombres de los identificadores.
Todos los nombres deben comenzar con una letra . El siguiente ejemplo
sigue estas reglas:

```js

 let firstName = "giovani";
 let lastName = "fouz"
 let price = 19.99;
 let tax = 0.15;
 let fullPrice = price + (price * tax);

```
## Longitud de la línea
Para mayor legibilidad, asegúrese de evitar líneas de más de 80
caracteres. pero si su declaración de JavaScript no cabe en una línea,
el mejor lugar donde puede romperla es después de una coma o un
operador. Eche un vistazo al siguiente ejemplo:

```js
 /*Estas reglas harán que nuestro código
   sea fácil de leer y comprender. */
   document.getElementById("id").innerHTML = 
   "Hello World!";  

```
## Espacios alrededor de los operadores
Siempre ponga espacios entre operadores ( = + - * / ) en su código
JavaScript porque hace que se vea agradable y fácil de leer. Si lo
hace como lo hicimos en el ejemplo siguiente, está bien.
```js
let x = y + z;
let fullName = ["giovani", "fouz", "jiménez"];
const fn = (params) => {};

```
## Utilice nombres de archivo en minúsculas
La mayoría de los servidores web (apache…) distinguen entre mayúsculas
y minúsculas en los nombres de archivos. Por otro lado, algunos
servidores web (Microsoft) no distinguen entre mayúsculas y minúsculas
en los nombres de archivos. Entonces, digamos que se mudó del servidor
Apache al servidor de Microsoft donde estaba usando mayúsculas para
los nombres de archivo. Apache distingue entre mayúsculas y
minúsculas, por lo que puede dañar su sitio web. Para evitar esa
confusión, utilice siempre nombres de archivo en minúsculas (si es
posible).

## Reglas de declaración
Existen algunas convenciones de codificación que debe tener en cuenta
al escribir sus declaraciones de JavaScript:

Siempre termine una declaración simple con un punto y coma.
Coloque el corchete de apertura al final de la primera línea.
Utilice un espacio antes del soporte de apertura.
Coloque el corchete de cierre en una nueva línea, sin espacios iniciales.

```js
// objetos y matrices.
let frutas = ["mango", "peras", "manzana"];

let person = {
    firstName: "giovani",
    lastName: "fouz",
    age: 46,
    hairColor: "brown"
};

```

```js
// condicionales en javascript.
if(weather === "sunny") {
    time = true;
}else {
    time = false;
}

```
## Conclusión
De modo que , seguir las convenciones de codificación en JavaScript
hace que nuestro código sea mantenible y fácil de leer por otros
desarrolladores. Solo quería enumerar estas reglas simples, porque
todos los desarrolladores de JavaScript deberían considerarlas. Así
que eso es todo para este artículo, si está utilizando todas estas
convenciones, eso es genial, está en camino de convertirse en un buen
desarrollador, o tal vez ya sea un buen desarrollador de JavaScript.