// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
const pie = require('../db').import('../models/pie');
const validateSession = require('../middleware/validate-session');

// router.get('/', (req, res) => res.send('I love pie'));

router.get('/', (req, res) => {
    pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({
        error: err
    }))
})

router.post('/', validateSession, (req, res) => {
    const pieFromRequest = {
        nameOfPie: req.body.nameOfPie,
        baseOfPie: req.body.baseOfPie,
        crust: req.body.crust,
        timeToBake: req.body.timeToBake,
        servings: req.body.servings,
        rating: req.body.rating
    }

    pie.create(pieFromRequest)
        .then(pie => res.status(200).json(pie))
        .catch(err => res.json(req.errors));
})

/// Broken Code


// Broken code:
router.get('/name', (req, res) => {         
    pie.findOne({ where: { nameOfPie: req.body.nameOfPie }}) //1 uppercase findOne //1 fixed .params to .body
      .then(pie => res.status(200).json(pie))
      .catch(err => res.status(500).json({
        error: 'err' //1 
    }))
  })
  
  router.put('/:id', validateSession, (req, res) => {
    pie.update(req.body, { where: { id: req.body.id }})
                //req.body -- 1 
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors)); //1 semicolon
  })


  // delete by ID

  router.delete('/:id', validateSession, (req, res) => {
      pie.destroy({
          where: {
              id: req.params.id
          }
      })
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json({
          error: err
      }))
  })

module.exports = router;
