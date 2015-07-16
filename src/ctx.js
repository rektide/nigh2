var Emisser= require('emisser'),
  EventTypecaster= require('event-typecaster')
var TypecastMap= require('./typecast-map')

// ctx captures all rule-processors and rule-sets, making them broadly known to anyone asking for 'context'
// actual generated semantics are emitted by nigh2

function Nigh2Ctx(){
	if(isGlobal(this)){
		return new Night2Ctx()
	}

	Emisser.mixin(this)
	EventTypecaster.mixin(this)
}

module.exports= Night2Ctx
