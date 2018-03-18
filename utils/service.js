const Fileio = 	require('../utils/io.js');
var _ = require('lodash');

class Service extends Fileio{
	// GET 
	constructor(filename)
	{
		super(filename);

	}
	getAll(callback)
	{
	   try {
	       this.getData((r)=>{ callback(r)})
	   }
	   catch(error)
	   {
		   console.log(error);
	   }
	}
	getByValue(params,callback)
	{
		try{
			if (typeof(params) === "object")
			{
				if (Object.keys(params).length > 0) {
					this.getData((r) => {
					  
					  callback(_.filter(r, params));
						 
					})
				} else 
				{
					callback({"message":"object is Blank"});
				}
			}
			else
			{
				callback({"message":"object is not valid"});
			}
		}
		catch(error)
		{
			console.log(error);
		}
	}
}

module.exports = Service ;