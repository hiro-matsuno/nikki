/**
 * 
 */
//日記一覧
//使用モジュール　jquery-2.1.1/jquery-cookie/json2.js
//作成日：２０１４−０７−０７
//作成者：松野弘法

//global
i=0;

//初期化
$(function () {
	$('.nikkiBody').empty();
	i = 0;
	$('.nikkiBody').eq(-1).append("<tr><td width='20%'><a href='nikki_read.html' class='nikki_link' onclick='nikki_read("+i+")'></a></td><td width='20%'><label class='nikkiDate'></label></td><td width='25%'><label class='nikkiTitle'></label></td><td width='35%'><label class='nikkiContent'></label></td></tr>"); 
	nikkiIchiranShow();
});

//一覧表示
function nikkiIchiranShow(){

	for (i = 0; i < localStorage.length; i++){
		//LocalStorageのキー項目の取得
		id = localStorage.key(i);
		
		//localStorageデータの取得
		str = JSON.parse(localStorage.getItem(id));

		//データの取得
		//年月日
		inputYMD = str['inputYMD'];
		
		//題目
		inputTitle = str['inputTitle'];
		
		//内容
		inputContent = str['inputContent'];
		
		//データの投入
		if(id.match(/^[1-9][0-9]*$/)){
			$('.nikkiBody tr .nikki_link').eq(i).text(id);
			$('.nikkiBody tr .nikkiDate').eq(i).text(inputYMD);
			$('.nikkiBody tr .nikkiTitle').eq(i).text(inputTitle);
			$('.nikkiBody tr .nikkiContent').eq(i).text(inputContent);
			
			//行の挿入
			$('.nikkiBody').eq(-1).append("<tr><td width='20%'><a href='nikki_read.html' class='nikki_link' onclick='nikki_read("+i+")'></a></td><td width='20%'><label class='nikkiDate'></label></td><td width='25%'><label class='nikkiTitle'></label></td><td width='35%'><label class='nikkiContent'></label></td></tr>"); 
		}
	}
}

//日記内容を引き渡す
function nikki_read(i){
	nikkiId = $('.nikkiBody tr .nikki_link').eq(i).text();
	localStorage.setItem('nikkiId',nikkiId);
}



