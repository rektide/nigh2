module.exports= function(config, generate){
	var elements= document.querySelectorAll(config.selector)
	for(var i in elements){
		generate(elements[i])
	}
	var observer= new MutationObserver(function(mutations){
		for(var i= 0; i< mutations.length; ++i){
			var mutation= mutations[i]
			for(var j= 0; j< mutation.addedNodes.length; ++j){
				var addedNode= mutation.addedNodes[j]
				var matches= addedNode.querySelectorAll(addedNode)
				for(var k= 0; k< matches.length; ++k){
					generate(matches[k])
				}
			}
		}
	})
	observer.observe(document.body, {
		attributes: true,
		childList: true,
		characterData: true,
		subtree: true
	})
}
