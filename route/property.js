var jwt      	=   require('jsonwebtoken');
var express 	= 	require('express')
var routeproperty = express.Router();
var fs 			= 	require('../utils/io.js');
var config 		= 	require('../config.js');
const fileName	=  "propertydata.json";


routeproperty.use((req, res, next)=>{
	
	var token = req.session.token;
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
		
});

// GET
// api/property

routeproperty.get('/property',(req,res)=> {
	    
		fs.getJSONData(fileName,(data) => {
			
			 res.status(200).send(data);
					
		});
});

//GET 
//api/property/id
routeproperty.get('/property/:id',(req,res)=> {
	    
		fs.getJSONData(fileName,(data) => {
			
			 var property = data.find((d)=>{
				 
				 return d.id == req.params.id;
				 
			 });
			 res.status(200).send(property);
					
		});
});

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

module.exports = routeproperty ;