const fs = require("fs");
const { Console } = require("console");
const { response } = require("express");
const Post = require("../models/Post");

const User = require("../models/User");

//Creation d'un post
exports.createPost = (req, res, next) => {
  let imagePath = "";
  if (req.file) {
    imagePath = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  } else {
    imagePath = "";
  }
  const myObject = JSON.parse(req.body.post);
  console.log(myObject);
  const postObject = {
    id: myObject.id,
    userId: myObject.userId, 
    title: myObject.title,
    body: myObject.body,
    image_URL: imagePath, 
 
  };
 
  Post.create(postObject)
    .then(() =>
      res.status(201).json({ message: "Votre post est bien enregistré!" })
    )
    .catch((error) => {
      res.status(400);
      res.json({ error: "error que envoie le serveur:" + error });
    });
};

//Recuperer tous les posts
exports.getAllPost = (req, res, next) => {
  User.findOne({ where: { id: req.user_id } })
    .then((user) => {
      Post.findAll({attributes:['id','userId','title','image_URL','created_date','body'],
        include: [
          {
            model: User,
            attributes: [
              "id",
              "first_name",
              "last_name",
              "image_URL",
              "created_date",
            ],
          },
        ],
        raw: true,
        nest: true,
      }).then((posts) => {
        res.status(200).json(posts);
      });
    })
    .catch((error) => res.status(400).json({ error }));
    
};

//Suppression du post
exports.deletePost = (req, res, next) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((post) => {
      const filename = post.image_URL.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Post.destroy({
          where: {
            id: req.params.id,
          },
        })
          .then((num) => {
            if (num === 1) {
              res.send({ message: "Votre post a été supprimé." });
            } else {
              res.send({ message: num });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      });
    })
    .catch((error) => res.status(404).json({ error }));
};
