const Fileio = 	require('../utils/io.js');
var _ = require('lodash');
const uuidv1 = require('uuid/v1');

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
	//Insert
	insert(params,callback)
	{
		try {
			
			params['id'] = uuidv1();
			this.getAll((r)=>{
				r.push(params);
				this.writeData(r,(v)=>{
					callback(v);
				});
				
			});
			
		}
		catch(error)
		{
			console.log(error);
		}
	}
	//Update
	update(params,id,callback)
	{
		try {
			if (id == null || id == 0) callback({'message':'id isnot valid'});
			this.getAll((response)=> {
				var index = _.findIndex(response, function(r) { return r.id == id; });
				if (index >= 0)
				{
					response[index] = params;
					this.writeData(response,(res)=>{
						callback(res);
					});
				}
				else
				{
					callback({'message':'Data not found'});
				}
			})
			
		}
		catch(error)
		{
			console.log(error);
		}
	}
	//Delete
	delete(id,callback)
	{
		try {
			
			if (id == null || id == 0) callback({'message':'id isnot valid'});
			this.getAll((response)=> {
				var index = _.findIndex(response, function(r) { return r.id == id; });
				if (index >= 0)
				{
					response.splice(index, 1)
					this.writeData(response,(res)=>{
						callback(res);
					});
				}
				else
				{
					callback({'message':'Data not found'});
				}
			})
		}
		catch(error)
		{
			console.log(error);
		}
	}
	
	
}

module.exports = Service ;