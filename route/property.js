var jwt      	=   require('jsonwebtoken');
var express 	= 	require('express')
var routeproperty = express.Router();
const tablename = "propertydata.json";
const Service = require('../utils/service.js');
const sc = new Service(tablename);
var _ = require('lodash');
routeproperty.use((req, res, next)=>{
	
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

routeproperty.get('/property',(req,res)=> {
	   
	   
	  //fs.getData((data)=>{
		//  res.status(200).send(data)
	  //});
	    
		sc.getAll((data) => {
			 res.status(200).send(data);
		});
	   
});

//GET 
//api/property/id
routeproperty.get('/property/:id',(req,res)=> {
	    
		req.params.id = parseInt(req.params.id);
		sc.getByValue(req.params,(data)=>{
			 res.status(200).send(data);
		});
});
//GET
//api/property/id/name
routeproperty.get('/property/:id/:name',(req,res)=> {
	    
		req.params.id = parseInt(req.params.id);
		sc.getByValue(req.params,(data)=>{
			 res.status(200).send(data);
		});
});
/*
//POST
//api/property
routeproperty.post('/property',(req,res) => {	

    var property = JSON.parse(req.body.property);
	fs.getJSONData(fileName,(data) => {
		     property['id'] = data.length + 1;
			 data.push(property);
			 fs.writeJSONData(fileName,data);
			 res.send(property);
            
		});		
});

//PUT
//api/property/:id
routeproperty.put('/property/:id',(req,res) => {	

    var property = JSON.parse(req.body.property);
	fs.getJSONData(fileName,(data) => {
			
			data.forEach((d,i,arr) => {
				if (d.id == req.params.id)
				{
					data[i] = property ;
					fs.writeJSONData(fileName,data);
			        res.send(property);
				}
			})
		     
            
		});		
});

//DELETE
//property/:id
routeproperty.delete('/property/:id',(req,res) => {
	
	fs.getJSONData(fileName,(v) => {
       var data = [];	
       v.forEach((property,index,arr) =>
	   {
		   if (property.id != req.params.id)
			   data.push(property);
	   });
       fs.writeJSONData(fileName,data);   	   
	   res.status(200).send();
	});
});
*/

module.exports = routeproperty ;