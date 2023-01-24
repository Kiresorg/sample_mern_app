const db = require('../sequelize/models')
const Address = db.Address

exports.create = (req, res) => {
  Address.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occurred while creating new address.',
      })
    })
}

exports.findAll = (req, res) => {
  Address.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occurred while retrieving addresses.',
      })
    })
}

exports.findById = (req, res) => {
  const id = req.params.id;
  Address.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Address with id=" + id
      });
    });
};