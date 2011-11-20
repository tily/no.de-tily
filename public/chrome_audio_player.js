
var ChromeAudioPlayer = function() {
	this.buffers = []
	this.context = new webkitAudioContext()
}
ChromeAudioPlayer.prototype = {
	play: function() {
		var that = this
<<<<<<< HEAD
		var node = this.context.createJavaScriptNode(4096, 1, 1)
		//var node = this.context.createJavaScriptNode(2048, 1, 1)
		node.onaudioprocess = function(e) {
			var data = e.outputBuffer.getChannelData(0)
			var i = 0
			console.log("hello")
			while(that.buffers.length > 0) {
				data[i] = that.buffers.unshift() / 32767
				if(that.buffers.length == 2) console.log(data[i])
				i++
			}
=======
		var node = this.context.createJavaScriptNode(2048, 1, 1)
		node.onaudioprocess = function(e) {
			var results = []
			var dataL = e.outputBuffer.getChannelData(0)
			var dataR = e.outputBuffer.getChannelData(1)
			i = 0
			while(that.buffers.length > 0) {
				var data = that.buffers.shift()
				for(var j = 0; j < data.length; j++) {
					results.push(dataR[i] = dataL[i] = data[j] / 128)
					i++
				}
			}
			return results
>>>>>>> 15436ce29fcfff2a28d2fb2561f77d8f8aa8c253
		}
		node.connect(this.context.destination)
	},
	write: function(data) {
		this.buffers.push(data)
	}
}
