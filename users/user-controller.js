var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');

//body parser 
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var user = require('./user');

router.post('/', function(req, res){
    user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function(err, user){
        if(err){
            console.log('Error: ', err);
            res.status(400).send({err: true, errMessage: 'There was a problem while creating a user'})
        } else {
            res.status(200).send({userDetails: user})
        }
    })
})
router.post('/login', function(req, res){
    user.findOne({
            email: req.body.email,
            password: req.body.password
    }, function(err, user){
        if(err){
            res.status(400).send({err:true, errMessage: 'Something went wrong'})  
        } else {
            if(!user){
                res.status(404).send({err: true, errMessage: 'No User Found'})
            }
            //@todo create token
            res.status(200).send({userDetails: user})
        }

    })
});

router.post('/uploadFile', function(req, res){
    // use multer
});
module.exports = router