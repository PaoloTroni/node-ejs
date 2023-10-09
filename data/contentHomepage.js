const moment = require("moment");

const formattedDate = moment("2018-12-12").format("MMMM D, YYYY");

const contentHomepage = {
  imageURL: "/images/mountains.jpg",
  descriptionImage: "Montañas nevadas",
  postTitle: "Tours & Travels",
  postSubtitle: "Amazing Places on earth",
  datePost: formattedDate,
};
module.exports = contentHomepage;
