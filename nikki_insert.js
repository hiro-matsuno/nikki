/**
 * 
 */
//nikki_insert.js
//使用モジュール jquery-2.1.1・jquery.cookie
//作成日：２０１４−０７−０７
//作成者：松野弘法

//初期化処理
$(function () {
	nowYMD = nowYMDGet();
	nowYMDHM = nowYMDHMGet();
	$('#inputYMD').text(nowYMD);
	$('#inputYMDHM').val(nowYMDHM);
	$('#inputTitle').val('');
	$('#inputContent').val('');
});

//現在日付の取得
function nowYMDGet(){
	//現在日付を取得
	thisDate = new Date();
	//年月日の取得
	thisYear = thisDate.getFullYear();
	thisMonth = thisDate.getMonth() + 1;
	thisDay = thisDate.getDate();
	//フォーマット生成
	thisYMD = thisYear + '年' + thisMonth + '月' + thisDay + '日';
	//値の返信
	return thisYMD;
}

//現在日付と時刻を取得
function nowYMDHMGet(){
	//現在日付の取得
	thisDate = new Date();
	//年月日の取得
	//年の取得
	thisYear = thisDate.getFullYear();
	//月の取得
	thisMonth = thisDate.getMonth() + 1;
	//1〜9は頭に0を付加する
	if(thisMonth >= '1' && thisMonth <= '9'){
		thisMonth = '0' + thisMonth;
	}
	//日の取得
	thisDay = thisDate.getDate();
	//1〜9は頭に0を付加する
	if(thisDay >= '1' && thisDay <= '9'){
		thisDay = '0' + thisDay;
	}
	//現在時刻の取得
	thisHM = new Date();
	//時間の取得
	thisHour = thisHM.getHours();
	//0〜9は頭に0を付加する
	if(thisHour >= '0' && thisHour <= '9'){
		thisHour = '0' + thisHour;
	}
	//分の取得
	thisMinute = thisHM.getMinutes();
	//0〜9は頭に0を付加する
	if(thisMinute >= '0' && thisMinute <= '9'){
		thisMinute = '0' + thisMinute;
	}
	//フォーマットに成形
	thisYMDHM = thisYear + thisMonth + thisDay + thisHour + thisMinute;
	//値の返信
	return thisYMDHM;
}

//値の登録
function content_insert(){
	//データの取得
	id = $('#inputYMDHM').val();
	inputYMD = $('#inputYMD').text();
	inputTitle = $('#inputTitle').val();
	inputContent = $('#inputContent').val();
	//投入データの生成
	data = {'inputYMD':inputYMD,'inputTitle':inputTitle,'inputContent':inputContent};
	//localStorageへの登録
	localStorage.setItem(id,JSON.stringify(data));
	//cookieへの書き込み\
	$.cookie.json = true;
	$.cookie(id, data, {expires: 7});
}

//値のクリア
function content_clear(){
	nowYMD = nowYMDGet();
	nowYMDHM = nowYMDHMGet();
	$('#inputYMD').text(nowYMD);
	$('#inputYMDHM').val(nowYMDHM);
	$('#inputTitle').val('');
	$('#inputContent').val('');	
}

//入力終了ボタンの動作
function content_insertEnd(){
	document.location = 'nikki_ichiran.html';
}
