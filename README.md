# Rick y Morty API
<img src="src/img/preview rick-morty.png"/>

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)




### Requisitos:
- Make sure you are using node version 10

1. Instala los paquetes:
```
$ npm install
```
2. Crea a .env file:
```
$ cp .env.example .env
```
3. Empieza a programar!

```bash
$ npm run start
```

## 📝 Instrucciones.
1) Utiliza los componentes de bootstrap (Card, Buttons, etc.), prácticamente no necesitarás casi CSS propio.
2) Tomate un tiempo para entender la API que vamos a utilizar https://rickandmortyapi.com/ y para obtener la información.
3) Utiliza la función Fetch para consumir la API y obtener los Personajes  y Localizaciones y mostrarlos en tu web.
4) Deberás tener un store centralizado con tu información.
5) Para resolver la funcionalidad de "favoritos" te recomendamos declarar un arreglo favorites en el store y tener alli la lista de todo.



## ✨ Sobre el Proyecto.
El proyecto consiste en desarrollar una página web consumiento la API de Rick y Morty.Lo he organizado de la siguiente manera:
### Vistas (views).
- Home: Aquí aparecen tanto los personajes como las localizaciones.
- Personaje: En ella aparecerá información más completa del personaje que queramos ver.
- Localización: Al igual que la anterior pero en este caso se muestran las localizaciones.
- Not found: Por el momento solo se muestra si la ruta no está definida, pero tengo que implementar que también se muestre a la hora de buscar un personaje/localización del que no se disponga información.
### Componentes.
- Navbar: En la barra de navegación tenemos 2 elementos, por un lado el logo que sirve para volver a la página principal y por otro el botón de favoritos donde se almacenan aquellos elementos que el usuario guarda.
- Cards : Cuando se muestran en la página principal tenemos una imagen, el nombre del personaje/localización y dos botones, uno para guardar en favoritos y el otro para cambiar de vista y obtener más información.
- Input de búsqueda: Este componente aún no es funcional, estoy trabajando en ello ya que lo que pretendo es que cuando el usuario escriba aparezca un listado de los personajes y localizaciones coincidentes con el texto y que una vez pulse el botón de buscar le redirija a la vista correspondiente.
- Footer: Sobre este componente no hay mucho que decir, se puede ver mi nombre, el mes y el año en el que se ha realizado el proyecto.
### Flux.
En un primer momento, las variables de estado,funciones y los fetch estaban cada uno en su componente, una vez empezamos a trabajar con flux, centralicé todas las variables, peticiones y funciones para que el código fuese lo mas limpio posible y el poder pasar la información entre componentes fuese mas sencillo.
### Bonus
 Llevo días intentando implementar la paginación para poder controlar el número de elementos que quiero visualizar en cada página para hacer más comoda la navegación del usuario pero me esta dando algún quebradero de cabeza, no obstante es algo que incluiré en el momento que consiga hacerlo funcionar correctamente.


