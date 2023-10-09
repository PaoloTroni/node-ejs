exports.tosController = (req, res, next) => {
  try {
    res.render("tos", { pageTitle: "ToS" });
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};

exports.contactoController = (req, res, next) => {
  try {
    res.render("contacto", { pageTitle: "contacto" });
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};
