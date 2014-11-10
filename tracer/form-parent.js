module.exports= {
	"@id": "https://archive.voodoowarez.com/trace/selector/form-parent",
	"@type": "https://archive.voodoowarez.com/trace",
	trace: [{
		"@type": "https://archive.voodoowarez.com/selector/property-lookup",
		selector: "target"
	//	"@type": "https://archive.voodoowarez.com/selector/type-match",
	//	selector: "event"
	}, {
		"@type": "https://archive.voodoowarez.com/discriminator/xpath",
		selector: ".//form"
	}]
}
