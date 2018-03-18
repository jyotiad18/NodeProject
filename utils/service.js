const Fileio = 	require('../utils/io.js');
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
				this.getData((r) => {
					
					
					
					/*r.find((d) => {
						
						foreach(var k in keys)
						{
							
						}
					})
					/* load ash 
					var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
So the solution for the original question would be just one liner:

var result = _.filter(data, ['website', 'yahoo']);
					*/
					r.filter(function (entry) {
						return entry.website === 'yahoo';
					});
					
				})
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