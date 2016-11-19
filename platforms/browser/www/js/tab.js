$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
	
	$('.button_div ul.tabs .cost').click(function(){
		$(".tab-link1").addClass('current');
	});
	$('.button_div ul.tabs .management').click(function(){
		$(".tab-link2").addClass('current');
	});
	$('.button_div ul.tabs .category').click(function(){
		$(".tab-link3").addClass('current');
	});
	$('.button_div ul.tabs .music').click(function(){
		$(".tab-link4").addClass('current');
	});
	$('.button_div ul.tabs .extraDetail').click(function(){
		$(".tab-link5").addClass('current');
	});
	$('.button_div ul.tabs .remark').click(function(){
		$(".tab-link6").addClass('current');
	});

})