const moment = require("moment");

const posts = [
  {
    imageURL: "images/mountains.jpg",
    descriptionImage: "imagen que no aparece en la página",
    textButton: "Fashion",
    postTitle: "Esa imagen no debería aparecer",
    datePublication: "2023-10-01",
  },
  {
    imageURL: "images/hombre-moda.jpg",
    descriptionImage: "moda masculina",
    textButton: "Fashion",
    postTitle: "New york fashion week's continued the evolution",
    datePublication: "2023-10-03",
  },
  {
    imageURL: "images/senderismo.jpg",
    descriptionImage: "senderismo",
    textButton: "Fashion",
    postTitle: "New york fashion week's continued the evolution",
    datePublication: "2023-10-05",
  },
  {
    imageURL: "images/maleta.jpg",
    descriptionImage: "maleta",
    textButton: "Fashion",
    postTitle: "New york fashion week's continued the evolution",
    datePublication: "2023-10-07",
  },
];

posts.forEach((post) => {
  post.timeSincePublication = moment(post.datePublication).fromNow();
});

module.exports = posts;
