function checkData(CID,YID){	
	var lalista = 'InternalAnalysis';
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq "+CID+" and Year/ID eq "+YID+"",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {
		                            					var p1 = "<div class='columna' id='"+data.d.results[i].Id+"' ><h2 class='titulo'>";
		                            					var eltit = data.d.results[i].Title;
		                            					var p2 = " </h2><div class='clear' ></div><div class='avances'><h3>Avances</h3><div class='clear'></div><div class='avancesCont' >";
		                            					var avances = data.d.results[i].Avances;
		                            					var p3 = " </div><div class='clear'></div><h3>GAPS</h3><div class='gapsCont'><h4>Proceso:</h4><div class='clear'></div><div class='procesoCont crow'>"
		                            					var gapPro = data.d.results[i].Gap_x002d_Proceso;
		                            					var p4 = "</div><div class='clear'></div><h4>Estructura:</h4><div class='clear'></div><div class='estruCont crow'>";
		                            					var gapEst = data.d.results[i].Gap_x002d_Estructura;
		                            					var p5 = "</div><div class='clear'></div><h4>Talento:</h4><div class='clear'></div><div class='talentoCont crow'>";
		                            					var gapTal = data.d.results[i].Gap_x002d_Talento;
		                            					var p6 = "</div><div class='clear'></div><h4>Otros:</h4><div class='clear'></div><div class='otrosCont crow'>";
		                            					var gapOtr = data.d.results[i].Gap_x002d_Otros;
		                            					var p7 =  "</div></div></div></div></div>";		                            					                         					
							                            $("#ia").append(p1+eltit+p2+avances+p3+gapPro+p4+gapEst+p5+gapTal+p6+gapOtr+p7);								                            
                                               }
                                               
												var numero = data.d.results.length;
												console.log("numero:"+numero);
												
												if(numero < 10){
													numero = numero.toString();
													numero = "0"+numero;														
												}
												
												else{
														numero = numero.toString();
												}
												
												var primer = "04,07,10,13,16,19";
												var segundo = "05,08,11,14,17,20";
																								
												if(primer.indexOf(numero) >= 0){
													console.log("combo 4");
													$(".columna:last-child").addClass("col1");												
												}
												
												else if(segundo.indexOf(numero) >= 0){
													console.log("combo 5");
													$(".columna:last-child").addClass("col2");
													$(".columna:last-child").prev().addClass("col2");
												}
												

	
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