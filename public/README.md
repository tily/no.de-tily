# mic.js

## ABSTRACT

 * bridge Flash microphone sample data to JavaScript

## DEMO

 * plot sample data to HTML canvas <http://dl.dropbox.com/u/511116/js-microphone/plot.html>
 * recording <http://dl.dropbox.com/u/511116/js-microphone/rec.html>

## USAGE

 * upload mic.js and mic.swf to your web server
 * write something like this:

        Microphone.embed("/path/to/mic.swf")
        Microphone.ondata = (function(data) {
        	var recorder = new Recorder()
        	return function(data) {
        		recorder.record(data)
        	}
        })()

## REQUIREMENT

 * Flash Player 10.1 or later

## TODO

 * refactor variable names
 * make enable to call Microphone#removeEventListener from JavaScript

## SEE ALSO

 * 最速インターフェース研究会 :: Firefoxでテキストをクリップボードにコピーする方法 <http://la.ma.la/blog/diary_200601100445.htm>
 * LDR、IMEをオフにするGreasemonkeyスクリプト(Flash8限定) - はてなダイアリー <http://d.hatena.ne.jp/brazil/20060904/1157342173>
 * 無限にAmen Breakを再生するウェブサービス - hitode909のダイアリー <http://d.hatena.ne.jp/hitode909/20100813/1281668908>
 * JavaScript から Flash を楽々操作できる FABridge [てっく煮] <http://tech.nitoyon.com/as/fabridge/intro.html>
 * どんなサイトでもミュージックビジュアライザにするInFullVolume.user.js (polog) <http://polog.org/archives/2008/02/24020525.php>
 * マイクテスト (15秒録音→ローカルに保存) - wonderfl build flash online <http://wonderfl.net/c/mYKE>
 * JavaScriptで波をつくろう。リアルタイム波形生成＆再生 - Yanagi Entertainment <http://d.hatena.ne.jp/yanagia/20100323/1269334226>
 * wav ファイルフォーマット <http://www.kk.iij4u.or.jp/~kondo/wave/>

## LICENSE

 * MIT License
