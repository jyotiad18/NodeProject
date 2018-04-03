var jwt      	=   require('jsonwebtoken');
var express 	= 	require('express')
var _routerhome     = express.Router();

const tablename = "propertydata.json";
const Service = require('../utils/service.js');
const sc = new Service(tablename);

_routerhome.use((req, res, next)=>{


	next();

});

// GET
// api/home

_routerhome.get('/home',(req,res)=> {


      res.status(200).send({
      	'result' : 'okay'
      })

});



module.exports = _routerhome ;
