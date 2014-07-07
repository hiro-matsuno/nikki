/**
 * 
 */
//日記閲覧
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

//閉じるボタンの動作
function winClose(){
	document.location='nikki_ichiran.html';
}

//編集ボタンの動作
function editContent(){
	document.location='nikki_edit.html';
}