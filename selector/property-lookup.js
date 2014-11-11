var nigh2= require('../src/nigh2')

module.exports= function(config, generate){
	var value= config.value
	if(value !== undefined){
		nigh2.on('*', function(e){
			if(e[config.selector] === value)
				generate(e)
		})

	}else{
		nigh2.on('*', function(e){
			if(e[config.selector] !== undefined)
				generate(e)
		})
	}
}
