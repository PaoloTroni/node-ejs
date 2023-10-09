const contentHomepage = require("../data/contentHomepage");
const posts = require("../data/posts");

exports.homepageController = (req, res, next) => {
  try {
    const lastPosts = posts.slice(-3).reverse();

    res.render("index", {
      pageTitle: "homepage",
      imageHome: contentHomepage.imageURL,
      descriptionImage: contentHomepage.descriptionImage,
      postTitle: contentHomepage.postTitle,
      postSubtitle: contentHomepage.postSubtitle,
      datePost: contentHomepage.datePost,
      lastPosts: lastPosts,
    });
  } catch (error) {
    console.error("Error en el controlador homepageController:", error);
    next(error); // Pasa el error al middleware de manejo de errores
  }
};
