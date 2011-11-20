var Wav = function() {
	this.data = []
}
Wav.prototype = {
	append : function(data) {
		Array.prototype.push.apply(this.data, data)
	},
	clear : function() {
		this.data = []
	},
	getData : function() {
		if(this.data == []) return null
		var body = this.body()
		console.log("bodylen:" + body.length)
		var header = this.header(body.length)
		var len = header.length + body.length
		console.log("rifflen:" + len)
		header = this.riff(len) + header
		return header + body
	},
	riff : function(len) {
		var riff = "RIFF" + String.fromCharCode(
			(len >> 0 & 0xFF),
			(len >> 8 & 0xFF),
			(len >> 16 & 0xFF),
			(len >> 24 & 0xFF)
		)
		return riff
	},
	header : function(len) {
		var header = ""
		header = "WAVEfmt " + String.fromCharCode(16, 0, 0, 0);
		header += String.fromCharCode(1, 0)
		header += String.fromCharCode(1, 0)
		header += String.fromCharCode(68, 172, 0, 0)
		header += String.fromCharCode(68, 172, 0, 0)
		header += String.fromCharCode(1, 0)
		header += String.fromCharCode(8, 0)
		header += "data"
		header += String.fromCharCode(
			(len >> 0 & 0xFF),
			(len >> 8 & 0xFF),
			(len >> 16 & 0xFF),
			(len >> 24 & 0xFF)
		)
		return header
	},
	body : function() {
		var body = ""
		var data = this.data
		var max = 0;
		var min = 0;
		for(var i = 0; i < data.length; i++) {
			//body += String.fromCharCode(data[i])
			body += String.fromCharCode(data[i] >> 0 & 0xFF)
			body += String.fromCharCode(data[i] >> 8 & 0xFF)
		}
		// short 型 (-32768～32767) を 2 つの文字に変換するのどうやるの
		// (buffer.charCodeAt(i) & 0xff) << 8) + (buffer.charCodeAt(i+1) & 0xff
		// たしか最初からマイクつけっぱなしでrec おしてから 1 秒たってから getData した場合はうまく動いた
		return body
	}
}
