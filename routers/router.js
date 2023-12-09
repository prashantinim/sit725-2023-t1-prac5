let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postSwiss(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllSwiss(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllSwiss(req,res);
});


module.exports = router;