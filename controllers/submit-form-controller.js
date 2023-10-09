const { getDB } = require("../db/getDB");
const { sendMailConfirmation } = require("../services/emailService");
const Joi = require("joi");

exports.submitFormController = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(50).required(),
      email: Joi.string().email().min(5).max(50).required(),
      subject: Joi.string().min(3).max(25).required(),
      message: Joi.string().min(5).max(1000).required(),
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      throw new Error(validation.error.message);
    }
    const { name, email, subject, message } = req.body;

    const connection = await getDB();

    const result = await connection.query(
      "INSERT INTO contacto (name, address, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );

    console.log(
      `Datos ("${name}", "${email}", "${subject}" y "${message}") insertados con ID ${result[0].insertId}`
    );

    connection.release();

    //envío del mail
    const htmlText = `<h1>Hola ${name}</h1>
<br>
<h2>Gracias por contactarnos</h2>
<br>
<p>Pronto nos pondremos en contacto con usted</p>`;

    sendMailConfirmation(email, htmlText);

    res.render("confirmacion", { pageTitle: "Mensaje recibido" });
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};
