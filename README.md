# Página web realizada con Node.js, Express y Ejs

### Protótipo de blog/tienda online

## Funcionalidades

El servidor renderiza 3 páginas principales en las siguientes rutas:

- "/home" o "/"
- "/tos"
- "/contacto"

La página que responde a la ruta "/contacto" permite el envío de un formulario con consecuente almacenamiento de los datos en una Base de Datos.
Para la validación de datos, además del control del lado del cliente también se controla los datos del lado del servidor con la librería Joi.
Al enviar el formulario el usuario es dirigido a una página diciendo que el mensaje ha sido enviado con éxito.
Al enviar el formulario, el sistema envía automatiamente un email a la dirección de correo indicada en el formulario.

Para eso se ha usado la librería nodemailer.

Además, en caso de rutas inexistentes hay una página para el error 404 y otra para demás errores.

## Pasos para probar este proyecto:

Para probar ese proyecto en un entorno local, después de clonar o descargar el repositorio, es necesario seguir los siguientes pasos:

### Crear base de datos

- Crear una base de datos con MySQL o MariaDB con el comando "CREATE DATABASE {nombre_database};

### Crear y rellenar el archivo .env

- Crear y rellenar el archivo .env siguiendo el molde del archivo .env example. Para el envío de email será necesario datos sensibles de correo electrónico (contraseña) para poder realizar los envíos. Sin estos datos esa funcionalidad no se ejecutará correctamente.

### Instalación de dependencias

Para el funcionamento del proyecto se requieren las siguientes dependencias:

- express
- ejs
- path
- dotenv
- joi
- moment
- mysql2
- nodemailer.
  Además se puede instalar nodemon para facilitar el desarollo.

- Para instalar las dependencias es necesario el comando "npm install".
- Para arrancar el servidor con Nodemon, utiliza "npm start".
- Para parar el servidor, usa "CRTL + C"

### Después de estos pasos la aplicación debería estar corriendo en el entorno local.
