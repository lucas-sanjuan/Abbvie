function checkData(CID,YID){	
	var lalista = 'GAPDEVALORAFILIADA';
	var totalS =[];		
	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq 1 or Country/Id eq "+CID+" and Year/ID eq "+YID+"&$orderby=Country/Id desc&$Top= 8 ",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))//$top8
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {
		                            				var titulo = data.d.results[i].Title;
		                            				var valor = data.d.results[i].Value;
		                            				
		                            				var valNum = parseInt(valor);
		                            				totalS.push(valNum)		                            						                            				                        					
							                            $("#pilares #pilaresT").append("<div class='pilares'><div class='valor'>"+valor+"%</div><div class='clear'></div><div class='contenido'>"+titulo+"</div></div>");							                            
                                               }
                                               
                                                var cuantos = data.d.results.length * 110;
                                                var cuantosSVG = cuantos-15;
                                                var centerP  = cuantos / 2;
                                               	$("#svg,#svg svg").css("width",cuantos);
                                               	$("#svg svg *").attr("points",""+centerP+",20 "+cuantosSVG+",200 15,200")
												$("#pilares").css("width",cuantos);

 
                                                                                       
                                              var sum = 0;
											            var array = totalS;											
											            $.each(array, function (index, value) {
											                sum = sum + value;
											            });
											
												$("#suma #nu").text(sum)                                               
													                                                                             
																								
														
											 }	
     
		                                      else{
		                                  			console.log("NO CONECTO");	                                  			
		                                        }                              
		                                        },
		                              error: function (data) {
		                              alert("Error: "+ data);
								               }
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
			var COU = $.urlParam('COU');
			var TEX = $.urlParam('TEX');	
   checkData(CID,YID,COU,TEX);   
});

function nav(firstY,firtsC){	
	var lalista = 'ScreenAdmin';	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items",
		         method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          
							                            var order = data.d.results[i].Order0;
							                            var title = data.d.results[i].Title;
							                            var pagina = data.d.results[i].Pagina;
							                         						                         
							                            $("#insideHeader #nav").append("<div  class='navEl' id='"+pagina+"'>"+title+"</div>");
							                            						                           
                                               }	
                                               
                                               	$.urlParam = function (name) {
														    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
														    .exec(window.location.search);
														    return (results !== null) ? results[1] || 0 : false;
														}
													var CID = $.urlParam('CO');
													var YID = $.urlParam('YE');
													var COU = $.urlParam('COU');
													var TEX = $.urlParam('yeTEX');												
													console.log("CID: "+CID + " YID: " + YID+" COU: "+COU+" TEX "+TEX);	
													$("#topCountry").text(COU);
													$("#topYear").text(TEX);
												
										
										
										
										  currentNav(CID,YID,COU,TEX);
										                                             
										                                            	
											 }						                                
		                                      else{
		                                  			console.log("NO CONECTO");	                                  			
		                                        }                              
		                                        },
		                              error: function (data) {
		                              alert("Error: "+ data);
								               }
										}); 

}







function currentNav(CID,YID,COU,TEX){

			$( ".navEl" ).each(function( index ) {								
					$(this).on("click",function(){
						console.log("Clicked");
						var pagina = $(this).attr("ID");
						var coSel  = CID;    
						var yeSel = YID;
						var yeTex = TEX;
						var coTex = COU
						var newUrl = _spPageContextInfo.siteAbsoluteUrl +"/SitePages/"+pagina+"?CO="+coSel+"&YE="+yeSel+"&COU="+coTex+"&yeTEX="+yeTex+"";
						console.log(newUrl);
						window.location.replace(newUrl);
				});
		});		
}






$(function() {
		
  nav();
});