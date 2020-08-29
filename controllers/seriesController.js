const db = require('../database/models');

module.exports = {
    getAll : function(req,res){
        db.Serie.findAll()
        .then(function(result){
            return res.status(200).json(result)
        })
    },
    getById: function(req,res){
        db.Serie.findByPk(req.params.id)
        .then(function(result){
            return res.status(200).json(result)
        })
    },
    create: function(req,res){
        db.Serie.create({
            title: req.body.title,
            end_date: req.body.end_date,
            release_date: req.body.release_date
        })
        .then(function(result){
            return res.status(201).json(result)
        })
    }


}