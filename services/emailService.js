require("dotenv").config();
const nodemailer = require("nodemailer");

// Los datos sensibles los pasamos a traves del .env
const { OWN_MAIL_HOST, OWN_MAIL_PORT, OWN_MAIL_ADDRESS, OWN_MAIL_PASS } =
  process.env;

const transporter = nodemailer.createTransport({
  host: OWN_MAIL_HOST, // Servidor SMTP  - datos ocultos
  port: OWN_MAIL_PORT, // Puerto utilizado por el servidor de email en cuestion
  secure: false, // En el caso de mi servidor de email es necesario poner false. Cambiar según sea necesario.
  auth: {
    user: OWN_MAIL_ADDRESS, // La direccion de email del remitente - datos ocultos
    pass: OWN_MAIL_PASS, // La contraseña del email del remitente  - datos ocultos
  },
});

// Definimos la función para enviar el correo
function sendMailConfirmation(email, htmlText) {
  const mailOptions = {
    from: `"Sensitive" ${OWN_MAIL_ADDRESS}`,
    to: email,
    subject: "formulario de contacto recibido",
    html: htmlText,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo para", email, error);
      console.log("");
    } else {
      const responseArray = info.response.split(" ");
      const status1 = responseArray[0];
      const status2 = responseArray[1];
      const message = responseArray[2];
      console.log(
        `Correo enviado para: ${email}, con la siguiente respuesta del servidor: ${status1} ${status2}, ${message}`
      );
      console.log("");
    }
  });
}

module.exports = {
  sendMailConfirmation,
};
