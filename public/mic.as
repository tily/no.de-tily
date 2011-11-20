package {
	import flash.display.Sprite
	import flash.events.SampleDataEvent
	import flash.media.Microphone
	import flash.external.ExternalInterface
	import flash.utils.ByteArray
	public class mic extends Sprite {
		private var m:Microphone
		public function mic():void {
			m = Microphone.getMicrophone()
			m.rate = 44
<<<<<<< HEAD
			//m.gain = 100
			m.gain = 50
			m.setSilenceLevel(0, 0)
			m.setUseEchoSuppression(true)
			m.setLoopBack(true)
=======
			m.gain = 100
			m.setSilenceLevel(0, 0)
			m.setUseEchoSuppression(true)
			m.setLoopBack(false)
>>>>>>> 15436ce29fcfff2a28d2fb2561f77d8f8aa8c253
			m.addEventListener(SampleDataEvent.SAMPLE_DATA, onSampleData)
		}
		private function onSampleData(e:SampleDataEvent):void {
			var arr:Array = new Array()
			var len:int = e.data.length * 0.25
			e.data.position = 0
			for(var i:int = 0; i < len; i++) {
				var data:int = e.data.readFloat() * 32767
				arr.push(data)
<<<<<<< HEAD
				//arr.push(data)
				//arr.push(e.data.readFloat())
=======
>>>>>>> 15436ce29fcfff2a28d2fb2561f77d8f8aa8c253
			}
			ExternalInterface.call("Mic__sampleDataHandler", arr)
		}
        }
}
