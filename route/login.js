var jwt      	=   require('jsonwebtoken');
var express    	=   require('express')
var query      	= 	require('array-query');
var routelogin 	= 	express.Router();
var config 		= 	require('../config.js'); //get our config file
var fs 			= 	require('../utils/io.js');
const fileName	=  'userdata.json';

routelogin.use(
		(req, res, next)=>
			{	
				next();		
		    }
);

routelogin.post('/login',function(req ,res) {
	
	
	var username = req.query.username ;
	var passwords = req.query.passwords;

	
	fs.getJSONData(fileName,(v) => {
	
                 var data = query('username').is(username).on(v);
				 if (data.length > 0)
				 {
					 var token = jwt.sign(data[0], config.secret, {});	
					 
					 req.session.token = token  ;
					 req.session.username = data[0].username;					 
					 
					 res.status(200).json({
								  success: true,
								  message: 'Enjoy your token!',
								  token: token
								});	
								
					
				 }
				 else 
				 {
					res.status(400).json({								 
								  message: 'Authenication Failed !',
								  token: null
								});	
				 }
				 
														
			});
});


module.exports = routelogin ;