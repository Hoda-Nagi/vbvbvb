  $(window).load(function () {
  	 $(".loading,.loading .spinner").fadeOut(3000);
   });
//carsoule time
// $('.carousel').carousel({
// 		  interval:6000
// 	  });
//start jq code in redy fun

  $(document).ready(function() {
	// nice scroll
	 $("body").niceScroll(); 
	 // $("body").niceScroll({
// cursorcolor:"red",
// cursorwidth:"10px"


   
	// 
// });
// show color with click by js
/*var color=document.getElementById('colors');
var checkk=document.getElementById('checkk');
checkk.onclick=function () {
	color.style.display="inline-block"

}*/
   
 // show color with click by jquery
 $('.check').click(function () {
 	$('.color-option').fadeToggle()

  });
  // shange color with click by jquery
  var colrLi=$(".color-option ul li");
 colrLi
 .eq(0).css("backgroundColor","#de0b0b").end()
 .eq(1).css("backgroundColor","#6e84f3de").end()
 .eq(2).css("backgroundColor","#16de0b").end()
 .eq(3).css("backgroundColor","#f7db4bde").end()
 .eq(4).css("backgroundColor","#ef09c6");

  colrLi.click(function () {
  	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
  });
 
// scrollto top
var scrollbutton=$('.scrolltop');
// show and hide button
$(window).scroll(function () {
	if($(this).scrollTop()>= 700){ //this=> window
		scrollbutton.show();
	}
	else{
		scrollbutton.hide();
	}
});
// click to scrollTop
	scrollbutton.click(function() {
		$('html,body').animate({scrollTop : 0},600);
	});
});



