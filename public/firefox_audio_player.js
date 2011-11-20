// based on http://komasshu-demo.googlecode.com/svn/trunk/musicstreaming/html/audiodatapai.js

var AudioWriter = function(audio) {
	this.interval = null
	this.p_flag = false
	this.audio = audio
	this.audio.mozSetup(1, 44100)
	this.buffers = []
}
AudioWriter.prototype = {
	write: function(data) {
		try {
			var _len = data.length
			var signal = new Float32Array(_len)
			for(var i = 0; i < _len; i++) {
				signal[i] = data[i] / 128 // / 32768
			}
			this.buffers.push(signal)
		} catch(e) {}
	},
	startPlaying: function() {
		(this.play())()
	},
	play: function() {
		var that = this
		return function() {
			var buflen = that.buffers.length
			if(!that.p_flag && buflen > 20) 
				that.p_flag = true
			if(that.p_flag && buflen < 10) 
				that.p_flag = false
			var _interval = buflen > 30 ? that.interval - 10 : that.interval
			if(that.p_flag) {
				that.writeAudio(that.buffers.shift())
			}
			setTimeout(that.play(), _interval)
		}
	},
	writeAudio: function(audio) {
		this.buffers.push(audio)
		while(this.buffers.length > 0) {
			var buffer = this.buffers.shift()
			console.log("writing", buffer)
			var written = this.audio.mozWriteAudio(buffer)
			if(written < buffer.length) {
				this.buffers.unshift(buffer.slice(written))
				return
			}
		}
	}
}
