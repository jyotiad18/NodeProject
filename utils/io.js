var fs = require('fs');
var config = require('../config.js');


class Fileio {
	 constructor (filename) {
		this.fullpath = config.datapath + filename;
     }
	 checkFile(callback)
	 {
		 if (fs.existsSync(this.fullpath))
		 {
			 callback(true);
		 }
		 else 
		 {
			 callback(false);
		 }
	 }
	 createJSONFile(callback)
	 {
		 fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
			  if (err){
				  console.log(err);
				  return(false);
			  }
			  else 
				  return(true);
		});
	 }
	 getData(callback)
	 {
		 this.checkFile((r)=> {
			  if (r)
			  {
				  fs.readFile(this.fullpath,(err,data)=>
				  {
					  if (!err){
					    callback(JSON.parse(data.toString()));
					  }else
					  {
						 
						  callback({'message':'no record found'});
					  }
				  });
			  }
			  else 
			  {
				  
				  callback({'message':'file not found'});
			  }
		 })
	 }
	 
	 writeData(data,callback)
	 {
		 this.checkFile((r)=>{
			if (r)
			{
				
				fs.writeFile(this.fullpath,JSON.stringify(data) , function(err) {
					if(err) {
						callback({'message':err});
					}
					else 
						callback({'message':'file write'})
					
				});
						
			}
			else 
			{
				callback({'message':'file not found'});
			}
		 })
	 }
}

module.exports = Fileio ;

/*module.exports = {
	
	getJSONData : function(filename,callback)
		{
		    const fullpath = config.datapath + filename;
			if (fs.existsSync(fullpath)){
				   
				   fs.readFile(fullpath,(err ,data) =>{
					if (!err)
					{
						callback(JSON.parse(data.toString()));				
					}
				  });
						  
			   } else 
			   {
					callback(null);
			   }
		} ,
	writeJSONData : function(filename,data)
	{
		fs.writeFile(config.datapath + filename ,JSON.stringify(data));
	}
}
*/
