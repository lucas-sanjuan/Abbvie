function currentNav(CID,YID){

			$( ".navEl" ).each(function( index ) {								
					$(this).on("click",function(){
						var pagina = $(this).attr("ID");
						var coSel  = CID;    
						var yeSel = YID;
						var newUrl = _spPageContextInfo.siteAbsoluteUrl +"/SitePages/"+pagina+"?CO="+coSel+"&YE="+yeSel+"";
						console.log(newUrl);
						window.location.replace(newUrl);
				});
		});		
}






$(function() {
			$.urlParam = function (name) {
				    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
				    .exec(window.location.search);
				    return (results !== null) ? results[1] || 0 : false;
				}
			var CID = $.urlParam('CO');
			var YID = $.urlParam('YE');
			console.log("CID: "+CID + " YID: " + YID);			



  currentNav(CID,YID)
});