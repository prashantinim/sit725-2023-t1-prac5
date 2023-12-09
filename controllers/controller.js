// how u bind the view and uses the model to fetch the data, 
//sits in between view and database 

let collection = require('../models/swiss');

const postSwiss = (req,res) => {
    let swiss = req.body;
    collection.postSwiss(swiss, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

//callback is coming from here 
const getAllSwiss = (req,res) => {
    collection.getAllSwiss((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteSwiss = (req,res) => {
    let swiss = req.body;
    collection.deleteOne(swiss, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}



module.exports = {postSwiss,getAllSwiss}