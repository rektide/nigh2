var Emisser= require('emisser'),
  EventTypecaster= require('event-typecaster')
var TypecastMap= require('./typecast-map')

// ctx captures all rule-processors and rule-sets, making them broadly known to anyone asking for 'context'
// actual generated semantics are emitted by nigh2

var ctx= module.exports= new Emisser()
EventTypecaster(ctx)
