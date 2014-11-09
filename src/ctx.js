var Emisser= require('emisser'),
  EventTypecaster= require('event-typecaster')

var ctx= module.exports= new Emisser()
ctx.map= {
	'https://archive.eldergods.com/nigh2/tracer': 'tracer',
	'https://archive.eldergods.com/nigh2/scraper': 'scraper'
}
EventTypecaster(ctx, ctx.map)
