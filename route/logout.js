var express    	=   require('express')
var routelogout 	= 	express.Router();


routelogout.use(
		(req, res, next)=>
			{	
				next();		
		    }
);



routelogout.get('/logout',function(req ,res) {
	req.session.destroy((err) => {
		if (err) res.status(400).send({message: err});
		else res.status(200).send({message : 'logout'});
	});
});


module.exports = routelogout ;