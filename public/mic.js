var Mic = {
	embed : function(path) {
		var embed = document.createElement("embed")
		with(embed) {
			src = path
			width = "300px"
			height = "200px"
			name = "mic"
			id = "mic"
			setAttribute("allowScriptAccess", "always")
			setAttribute("wmode", "transparent")
		}
		var div = document.createElement("div")
		with(div) {
			id = "container"
			style.zIndex = "10000"
			style.position = "absolute"
			style.top = "0px"
			style.right = "0px"
			appendChild(embed)
		}
		document.body.appendChild(div)
	}
}
var Mic__sampleDataHandler = function(data) {
	if(!Mic.mute && Mic.ondata) Mic.ondata(data)
}
