const bcrypt = require("bcrypt"); // Plugin de hash pour la sécurité des password
const jwt = require("jsonwebtoken"); // Token de protection

const User = require("../models/User"); // Chemin d'accès au modèle USER

//Récupération des data lors de l'inscription

exports.signup = (req, res, next) => {
  console.error("console from signup", req.body);
  let imagePath = "";
  if (req.file) {
    imagePath = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  } else {
    imagePath = null; // l'image n'est pas requise pour l'inscritpion
  }

  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    image_URL: imagePath,
    isAdmin: 0,
  };

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          //Bcrypt recupère le password le hash pour augmenter la sécurité
          userData.password = hash;
          User.create(userData)
            .then((userCreated) => {
              res.json({ status: `${userCreated.email} enregistré!` });
            })
            .catch((errCreate) => {
              res.send(`error: ${errCreate}`);
            });
        });
      } else {
        res.json({ error: `${req.body.email} existe déjà!` });
      }
    })
    .catch((errGlo) => {
      res.send(`error message: ${errGlo}`);
    });
};

//Récupération de l'email et bcrypt compare la requete a celle deja enregistrer

exports.login = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ error: "Utilisateur ou mot de passe erroné" });
      }
      bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res
            .status(401)
            .json({ error: "Utilisateur ou mot de passe erroné" });
        }
        res.status(200).json({
          token: jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
            expiresIn: "24h",
          }),
          userId: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          image_URL: user.image_URL,
          isAdmin: user.isAdmin,
        });
        console.log(`${user.email} s'est connecté`);
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

// suppression de l'utilisateur
exports.deleteAccount = (req, res, next) => {
  //suppression??
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then((num) => {
    if (num === 1) {
      res.send({ message: "Votre compte a été supprimé." });
    } else {
      res.send({ message: num });
    }
  });
};

//recuperation d'un utilisateur
exports.oneUser = (req, res, next) => {
  User.findOne({
    where: {
      email: req.params.email,
    },
  })
    .then((user) => {
      if (user) {
        const userInfo = {
          userId: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          image_URL: user.image_URL,
          isAdmin: user.isAdmin,
        };
        res.status(200).json(userInfo);
      }
    })
    .catch((error) => res.status(404).json({ error }));
};

//recuperation de tous les utilisateurs
exports.allUser = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => res.status(404).json({ error }));
};

//modification  de l'utilisateur
exports.updateUser = (req, res, next) => {
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    
  };
  if (req.file) {
    user.image_URL = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  }
    User.update(userObject, {
      where: {
        id: req.params.id,
      },
    })
      .then(() => res.status(200).json(userObject))
      .catch((error) => res.status(400).json({ error }));
};
