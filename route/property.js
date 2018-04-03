var jwt      	=   require('jsonwebtoken');
var express 	= 	require('express')
var _router     = express.Router();

const tablename = "propertydata.json";
const Service = require('../utils/service.js');
const sc = new Service(tablename);

_router.use((req, res, next)=>{

	/*var token = req.session.token;
	if (token)
	{
		jwt.verify(token, config.secret, function(err, decoded) {
		  if (err) {
			 return res.json({ success: false, message: 'Failed to authenticate token.' });
		  } else {

			req.decoded = decoded;
			next();
		  }
		});

	}
	else
	{
		res.status(400).send({success: false, message: 'authenticate fail'});
	}
	net
	*/

	next();

});

// GET
// api/property

_router.get('/property',(req,res)=> {


	  //fs.getData((data)=>{
		//  res.status(200).send(data)
	  //});

		sc.getAll((data) => {
			 res.status(200).send(data);
		});

});

//GET
//api/property/id
_router.get('/property/:id',(req,res)=> {

		sc.getByValue(req.params,(data)=>{
			 res.status(200).send(data);
		});
});
//GET
//api/property/id/name
_router.get('/property/:id/:name',(req,res)=> {

		sc.getByValue(req.params,(data)=>{
			 res.status(200).send(data);
		});
});

//GET 

//api/property/_search

//POST
//api/property
_router.post('/property',(req,res) => {

    var params = JSON.parse(req.body.property);
	sc.insert(params,(response)=>{
		 res.send(response);
	});
});

//PUT
//api/property/:id
_router.put('/property/:id',(req,res) => {

	var params = JSON.parse(req.body.property);
	var id = req.params.id;
	sc.update(params, id ,(response)=>{
		 res.send(response);
	});

});


//DELETE
//property/:id
_router.delete('/property/:id',(req,res) => {

	var id = req.params.id;
	sc.delete(id ,(response)=>{
		 res.send(response);
	});
	/*fs.getJSONData(fileName,(v) => {
       var data = [];
       v.forEach((property,index,arr) =>
	   {
		   if (property.id != req.params.id)
			   data.push(property);
	   });
       fs.writeJSONData(fileName,data);
	   res.status(200).send();
	});
	*/
});

module.exports = _router ;
