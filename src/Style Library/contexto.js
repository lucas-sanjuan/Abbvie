function checkData(CID,YID){	
	var lalista = 'Contexto';
			
	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=country/Id eq "+CID+" and Year/ID eq "+YID+"",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          							                        
							                            var eltit = data.d.results[i].Title;
							                            var titc1 = data.d.results[i].TituloCuadrante1;
							                            var conc1 = data.d.results[i].ContenidoCuadrante1;
							                            var titc2 = data.d.results[i].TituloCuadrante2
							                            var conc2 = data.d.results[i].ContenidoCuadrante2
							                            var titc3 = data.d.results[i].TituloCuadrante3;
							                            var conc3 = data.d.results[i].ContenidoCuadrante3;
							                            var titc4 = data.d.results[i].tituloCuadrante4
							                            var conc4 = data.d.results[i].ContenidoCuadrante4
							                            $("#titulo").text(eltit);
							                            $("#cont1 h2").text(titc1);
       							                        $("#cont1 p").html(conc1);
       							                        $("#cont2 h2").text(titc2);
       							                        $("#cont2 p").html(conc2);
       							                        $("#cont3 h2").text(titc3);
       							                        $("#cont3 p").html(conc3);
       							                        $("#cont4 h2").text(titc4);
       							                        $("#cont4 p").html(conc4);						                            
							                            
                      
							                            //$("#country").append("<div  id='"+cID+"' class='countryNav'  >"+title+"</div)");


                                               }	
                                                    
                                               
                                               /*
                                               $("#country div:first-child").addClass("cselected");
                                               var firtsC = $(".cselected").text()
                                               $("#countyrSelected").text(firtsC);
                                               year(firtsC);*/

                                            
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
	console.log("carganding")	;
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
							                            /*var seleYe = $(".yselected").text()*/
							                          	/*var selePa = $(".cselected").text();*/
							                            //console.log(order);
							                            $("#insideHeader #nav").append("<div  class='navEl' id='"+pagina+"'>"+title+"</div>");
							                            //$("#links").append("<div  class='navHome'><a href='/SitePages/"+pagina+"?CO=Colombia&YE=2019'>"+title+"</a></div>");
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
													$("#topCountry").text(COU)		;
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