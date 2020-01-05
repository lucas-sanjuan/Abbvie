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
                                               
                                               newUrl();
                                            	
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

function year(firtsC){	
	var lalista = 'Year';	
	//alert(med);
	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items",
		         method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          							                        
							                            var title = data.d.results[i].Title;
                  							            var yID = data.d.results[i].ID;							                         
							                            $("#year").append("<div  id='"+yID+"' class='yearNav' >"+title+"</div)");

                                               }
                                               $("#year div:first-child").addClass("yselected");
                                            	var firstY = $(".yselected").text()
                                            	$("#yearSelected").text(firstY);      
	
                                            	nav(firstY,firtsC);
                                            	                                     	
                                            	clickNav();
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
function country(){	
	var lalista = 'Country';	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items",
		         method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          							                        
							                            var title = data.d.results[i].Title;
                  							            var cID = data.d.results[i].ID;							                         
							                            $("#country").append("<div  id='"+cID+"' class='countryNav'  >"+title+"</div)");


                                               }	
                                               
                                               
                                               $("#country div:first-child").addClass("cselected");
                                               var firtsC = $(".cselected").text()
                                               $("#countyrSelected").text(firtsC);
                                               year(firtsC);

                                            
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


function clickNav(){
			$( ".countryNav" ).each(function( index ) {
					console.log("country"+$(this).text());
					$(this).on("click",function(){							
						$(".countryNav").removeClass("cselected");
						$(this).addClass("cselected");
						var selCo = $(this).text();
						$("#countyrSelected").text(selCo);
				    });
					

			});
		
			
			$( ".yearNav" ).each(function( index ) {
										console.log("year"+$(this).text());		
					$(this).on("click",function(){
					$(".yearNav").removeClass("yselected");
					$(this).addClass("yselected");
					var selYe = $(this).text()
					$("#yearSelected").text(selYe);

								
				});
		});		 
}

function newUrl(){

			$( ".navEl" ).each(function( index ) {								
					$(this).on("click",function(){
						var pagina = $(this).attr("ID");
						var coSel  = $(".cselected").attr("ID");      
						var yeSel = $(".yselected").attr("ID");	
						var coTex =  $(".cselected").text();
						var yeTex = $(".yselected").text().toString();
						var newUrl = _spPageContextInfo.siteAbsoluteUrl +"/SitePages/"+pagina+"?CO="+coSel+"&YE="+yeSel+"&COU="+coTex+"&yeTEX="+yeTex+"";
						console.log(newUrl);
						window.location.replace(newUrl);
				});
		});		
}






$(function() {
   country();   
});