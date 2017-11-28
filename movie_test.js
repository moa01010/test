/* 終わったら動画を入れ替えるやつ
var movie_url = "SMS_test.mp4";
tar.addEventListener('ended', function(){
	video.scr = movie_url;
	video.load();
	video.play();
})
*/

/*
//再生
function play(){
	m.play();
}

//一時停止
function pause(){
	m.pause();
}

//時間指定
function go(var seconds){
	m.currentTime = seconds;
}
*/

var m = 0;
var p1 = 0;

function koshin(){
	m = document.getElementById("bgvid");
	p1 = document.getElementById("point1");

	/* m関連付け成功してるか確認用
	if(m == 0 || m == null){ //もしIDの取得に失敗したら
		alert("m is 0");
	} else {
		alert("m is not 0");
	}
	*/

	//佐藤のメッセージクリックさせる
	m.addEventListener("timeupdate", satouHyouji, false);
}


function satouHyouji(){
	if(m.currentTime > 10){
		m.pause();
		p1.style.visibility = "visible";
		p1.innerHTML = "<img src='image/icon_hand.png' class='makerMes'>";
		
		p1.addEventListener("click", next1, false);

		m.removeEventListener("timeupdate", satouHyouji, false);
	}

	m.addEventListener("timeupdate", patt1, false);
}

function next1(){
	m.play();
	p1.style.visibility = "hidden";
}

function patt1(){

}








