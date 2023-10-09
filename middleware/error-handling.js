exports.errorHandler = (error, req, res, next) => {
  console.error(error);
  res
    .status(error.httpStatus || 500)
    .render("error-page", { pageTitle: "Error", infoError: error.message });
};

exports.notFoundHandler = (req, res) => {
  res.status(404).render("404", { pageTitle: "Not Found" });
};
