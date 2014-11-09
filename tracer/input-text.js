module.exports= {
	'@id': 'https://archive.voodoowarez.com/night2/tracer/input-submit',
	'@type': 'https://archive.voodoowarez.com/nigh2/tracer',
	selector: 'input[type="submit"]',
	tracer: function(e, tracer){
		e.addEventListener('submit', tracer)
	}
}
