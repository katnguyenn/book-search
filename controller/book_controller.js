const db = require("../models");

module.export = {
    findAll: function (req, res) {
        db.Book.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            });
    }, 

    findOne: function(req, res) {
        db.Book.find({id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err);
            res.status(422).json(err);
        })
    
    }
    



}
