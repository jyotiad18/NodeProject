var fs = require('fs');
var config = require('../config.js'); 

module.exports = {
	
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