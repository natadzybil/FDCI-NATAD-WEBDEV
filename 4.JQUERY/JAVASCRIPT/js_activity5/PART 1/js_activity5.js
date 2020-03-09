$(function(){
	$("a").click(function(){
		var temp = $(this);
		temp.next("p").toggle(200);

		$("a").each(function(){
			if($(this)[0] != temp[0]) {
				if($(this).next("p").is(":visible"))
					$(this).next("p").toggle(200);
			}	
		});
	});	
});
