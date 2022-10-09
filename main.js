$(function() {
  $('#mainCanvas').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	let c = Shape.Circle(50,50,50);
	c.fillColor = 'rgba(102,255,51,0.5)';
	let text = new PointText(50,55) //テキストを中央に
    text.fillColor = '#000033';
    text.fontSize = '15';
	text.fontWeight = "bold"; //文字の太さ
    text.justification = 'center'; //センタリング
    text.content = 'ページ上部'; //文字列
	paper.view.draw
});


