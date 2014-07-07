/**
 * 
 */
//日記編集
//使用モジュール　jquery-2.1.1・jquery-cookie
//作成日：２０１４−０７−０７
//作成者：松野弘法

//global
i=0;

//初期化
$(function () {
	id = localStorage.getItem('nikkiId');
	data = JSON.parse(localStorage.getItem(id));
	//データ取得
	inputYMD = data['inputYMD'];
	inputTitle = data['inputTitle'];
	inputContent = data['inputContent'];
	//データの表示
	$('#inputYMD').text(inputYMD);
	$('#inputTitle').val(inputTitle);
	$('#inputContent').val(inputContent);	
});

//もどすボタンの動作
function contentReverse(){
	//IDの取得
	id = localStorage.getItem('nikkiId');
	//localStorageデータの取得
	data = JSON.parse(localStorage.getItem(id));
	//データ取得
	inputYMD = data['inputYMD'];
	inputTitle = data['inputTitle'];
	inputContent = data['inputContent'];
	//データの表示
	$('#inputYMD').text(inputYMD);
	$('#inputTitle').val(inputTitle);
	$('#inputContent').val(inputContent);	
}

//更新ボタンをおした時の動作
function contentUpdate(){
	//idの取得
	id = localStorage.getItem('nikkiId');
	
	//各データの取得
	//日付データの取得
	inputYMD = $('#inputYMD').text();
	//題目データの取得
	inputTitle = $('#inputTitle').val();
	//内容データの取得
	inputContent = $('#inputContent').val();
	
	//localStorage用データの生成
	data = {'inputYMD':inputYMD,'inputTitle':inputTitle,'inputContent':inputContent};
	
	//localStorageへの格納
	localStorage.setItem(id,JSON.stringify(data));
	//cookieへの書き込み
	$.cookie.json = true;
	$.cookie(id, data, {expires: 7});
	
}

//編集終了ボタンの動作
function contentUpdateEnd(){
	document.location = 'nikki_ichiran.html';
}