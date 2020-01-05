function checkItems(itemNum){
	if(itemNum == 7 ){
			$(".canvas8").removeClass("oculto");
	}
	
	else{
			$(".canvas8").addClass("oculto");

	}
}



$(function(){	
	$( "#si select").change(function() {
	  	var itemNum = $(this).val();
		checkItems(itemNum)
	});
		

	checkItems();
});