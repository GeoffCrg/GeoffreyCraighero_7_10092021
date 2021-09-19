//Verification du token fournis a l'utilisateur lors d'opérations telle que la suppression la création de post

const jwt = require('jsonwebtoken'); 

module.exports = (req, res, next) => {
  console.error('erreur')
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log('TOKEN', decodeToken);
    const { dataValues, id } = decodeToken;
    if (req.body.dataValues && req.body.dataValues !== dataValues) {

      throw 'User ID non valable!';
    } else {

      req.user_id = id;
      next();
    }
  } catch (error) {

    res.status(401).json({ error: error | 'Requete non authentifiée' });
  }
};



