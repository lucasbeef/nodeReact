const MySequelize = require('../sequelize')
const sequelInstance = MySequelize.getInstance()
let Gift = sequelInstance.import("../models/Gift.js")
const mailer = require('../mailer.js')

const Gifts = {
    create: (req, res, next) => {
      Gift.create({
        name: req.body.name
      })
      .then((createdGift) => {
        res.json(createdGift)
      })
      .catch((error) => {console.log(error)});
    },
    read: (req, res, next) => {
      Gift.findAll()
      .then((allGifts) => {
        res.json(allGifts);
      })
      .catch((error) => {console.log(error)});
    },
    delete: (req, res, next) => {
      Gift.destroy({
        "where": { "id": req.params.giftId }
      })
      .then((nbRowsDeleted) => {
        res.json({"id": req.params.giftId})
      })
      .catch((error) => {console.log(error)});
    },
    notify: (req, res, next) => {
      mailer.sendMail(req.body.gifts)
      console.log('Mail Sent. Check server logs for a preview.')
      res.end();
    }
}

module.exports = Gifts;
