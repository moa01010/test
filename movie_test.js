//var tar = document.getElementById("bgvid");
//document.getElementById('bgvid') = "tar";
/*
if(document.getElementById("bgvid") == null){ //もしIDの取得に失敗したら
	alert("tar is null");
} else {
	alert("tar not null");
}
*/

/* 終わったら動画を入れ替えるやつ
var movie_url = "SMS_test.mp4";
tar.addEventListener('ended', function(){
	video.scr = movie_url;
	video.load();
	video.play();
})
*/

function koshin(){
	document.write("<p>JavaScript Koshin</p>");
	//document.div.innerHTML += "<p>JavaScript Test</p>";
	var tar = document.getElementById("bgvid");
	if(document.getElementById("bgvid") == null){ //もしIDの取得に失敗したら
		alert("tar is null");
	} else {
		alert("tar not null");
	}

	setTimeout(tar.pause(), 3000);

	tar.addEventListener("timeupdate", function(){
		if(media.currentTime > 5){
			document.write("<p>ok</p>");
		}
	})
	/*
	for(var n = 0;tar.currentTime > 0;){
		document.write("<p>1ok</p>");

		//参考 https://teratail.com/questions/11111
		if (tar.currentTime > 3){
			document.write("<p>2ok</p>");
			satouHyouji();
		}

	}
	*/
	
}

//再生
function play(){
	tar.play();
}

//一時停止
function pause(){
	//document.write("<p>pause</p>");
	tar.pause();
}

//時間指定
function go(seconds){
	tar.currentTime =seconds;
}


function satouHyouji(){
	var tar = document.getElementById("bgvid");
	document.write("<img src'icon_hand.png' id='makerMes'>");
	pause();
	//setTimeout(document.write("<img src='icon_hand.png' id='makerMes'>"), 5000);
	//pause();
}



//setTimeout(pause, 3000);

