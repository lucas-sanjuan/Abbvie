function checkData(CID,YID){	
	var lalista = 'ExternalAnalisisCanvas';			
	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq 1 or Country/Id eq "+CID+" and year/ID eq "+YID+"&$orderby=Country/Id desc",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          							                        
							                            var eltit = data.d.results[i].Title;
							                            var cont1T = data.d.results[i].Container1Title;
							                            var cont1C = data.d.results[i].Container1
														var cont2T = data.d.results[i].Container2Title;
							                            var cont2C = data.d.results[i].Container2;
														var cont3T = data.d.results[i].Container3Title;
							                            var cont3C = data.d.results[i].Container3;
														var cont4T = data.d.results[i].Container4Title;
							                            var cont4C = data.d.results[i].Container4;
  														var cont5T = data.d.results[i].Container5Title;
							                            var cont5C = data.d.results[i].Container5;
  														var cont6T = data.d.results[i].Container6Title;
							                            var cont6C = data.d.results[i].container6;
  														var cont7T = data.d.results[i].Container7Title;
							                            var cont7C = data.d.results[i].Container7;
							                            var tenID  =  data.d.results[i].TendenciasId.results;	
							                            var scen   = data.d.results[i].ScenarioItems;	

							                   			$("#tendencias #sti").text(eltit);
							                            $("#container1 .canTitle").text( cont1T);
							                            $("#container1 .canTitle").text( cont1T);							                       
  													    $("#container2 .canTitle").text( cont2T);							                              
							                            $("#container3 .canTitle").text( cont3T);							                             
														$("#container4 .canTitle").text( cont4T);							                             
  														$("#container5 .canTitle").text( cont5T);							                             
  														$("#container6 .canTitle").text( cont6T);							                             
  														$("#container7 .canTitle").text( cont7T);  														 
  														$("#container1 .ucont").html( cont1C);
							                            $("#container1 .ucont").html( cont1C);							                       
  													    $("#container2 .ucont").html( cont2C);							                              
							                            $("#container3 .ucont").html( cont3C);							                             
														$("#container4 .ucont").html( cont4C);							                             
  														$("#container5 .ucont").html( cont5C);							                             
  														$("#container6 .ucont").html( cont6C);							                             
  														$("#container7 .ucont").html( cont7C);
    
			                            		var arr = data.d.results[i].TendenciasId.results;							                         	
							                         	arr.forEach(function(item){
											         		itemId = item;
											         		//console.log(itemId);
											         		
											         		lalista2 = 'subtendencias';
											         		
											         		$.ajax({
													         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista2+"')/items?$filter=ID eq "+itemId+" ",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))$select=AttachmentFiles,Title&$expand=AttachmentFiles
													  
													        method: "GET",
													        headers: { "Accept": "application/json; odata=verbose" },
													        dataType: 'json',
													        success: function (data) {
													                 if (data.d.results.length > 0 ) {                             				
													                            for (var i = 0; i < data.d.results.length; i++) {						                          							                        
																		                           	 var tenTi = data.d.results[i].Title;	
																		                           	 $("#tendencias .ucont2 ul").append("<li>"+tenTi+"</li>");																					
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
									

                                                    });	
   
                                           			}  
                                           			  //console.log("scen:"+scen);
                                           			
  													if(scen == 7){
							                            		$("#linea2").removeClass("oculto");
							                            		$("#container1").addClass("large");						                            
							                            }
							                            else{
							                            		$("#linea2").addClass("oculto");
							                            		$("#container1").removeClass("large");		
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

function  checkScn(CID,YID,COU,TEX){	
	var lalista = 'ExternalAnalisisCanvas';
			
	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq 1 or Country/Id eq "+CID+" and year/ID eq "+YID+"&$orderby=Country/Id asc",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          							                        
							                            var eltit = data.d.results[i].Title;							                            
           							                    var elid = data.d.results[i].id;							                            
							                            
							                            $("#chooseSc").append("<option val="+elid+" >"+eltit+"</option>");
    	
   
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

function loadBytitle(thisVal){	
	
	
	$(".ucont, .ucont2 ul").html('');
	$(".canTitle").text("");
	
	
	var lalista = 'ExternalAnalisisCanvas';			
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Title eq '"+thisVal+"'",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          							                        
							                            var eltit = data.d.results[i].Title;
							                            var cont1T = data.d.results[i].Container1Title;
							                            var cont1C = data.d.results[i].Container1
														var cont2T = data.d.results[i].Container2Title;
							                            var cont2C = data.d.results[i].Container2;
														var cont3T = data.d.results[i].Container3Title;
							                            var cont3C = data.d.results[i].Container3;
														var cont4T = data.d.results[i].Container4Title;
							                            var cont4C = data.d.results[i].Container4;
  														var cont5T = data.d.results[i].Container5Title;
							                            var cont5C = data.d.results[i].Container5;
  														var cont6T = data.d.results[i].Container6Title;
							                            var cont6C = data.d.results[i].container6;
  														var cont7T = data.d.results[i].Container7Title;
							                            var cont7C = data.d.results[i].Container7;
							                            var tenID  =  data.d.results[i].TendenciasId.results;	
							                            var scen   = data.d.results[i].ScenarioItems;	

							                   			$("#tendencias .canTitle2 #sti").text(eltit);
							                            $("#container1 .canTitle").text( cont1T);
							                            $("#container1 .canTitle").text( cont1T);							                       
  													    $("#container2 .canTitle").text( cont2T);							                              
							                            $("#container3 .canTitle").text( cont3T);							                             
														$("#container4 .canTitle").text( cont4T);							                             
  														$("#container5 .canTitle").text( cont5T);							                             
  														$("#container6 .canTitle").text( cont6T);							                             
  														$("#container7 .canTitle").text( cont7T);  														 
  														$("#container1 .ucont").html( cont1C);
							                            $("#container1 .ucont").html( cont1C);							                       
  													    $("#container2 .ucont").html( cont2C);							                              
							                            $("#container3 .ucont").html( cont3C);							                             
														$("#container4 .ucont").html( cont4C);							                             
  														$("#container5 .ucont").html( cont5C);							                             
  														$("#container6 .ucont").html( cont6C);							                             
  														$("#container7 .ucont").html( cont7C);
    
			                            		var arr = data.d.results[i].TendenciasId.results;							                         	
							                         	arr.forEach(function(item){
											         		itemId = item;
											         		//console.log(itemId);
											         		
											         		lalista2 = 'subtendencias';
											         		
											         		$.ajax({
													         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista2+"')/items?$filter=ID eq "+itemId+" ",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))$select=AttachmentFiles,Title&$expand=AttachmentFiles
													  
													        method: "GET",
													        headers: { "Accept": "application/json; odata=verbose" },
													        dataType: 'json',
													        success: function (data) {
													                 if (data.d.results.length > 0 ) {                             				
													                            for (var i = 0; i < data.d.results.length; i++) {						                          							                        
																		                           	 var tenTi = data.d.results[i].Title;	
																		                           	 $("#tendencias .ucont2 ul").append("<li>"+tenTi+"</li>");																					
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
									

                                                    });	
   
                                           			}  
                                           			  //console.log("scen:"+scen);
                                           			
  													if(scen == 7){
							                            		$("#linea2").removeClass("oculto");
							                            		$("#container1").addClass("large");						                            
							                            }
							                            else{
							                            		$("#linea2").addClass("oculto");
							                            		$("#container1").removeClass("large");		
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
   checkScn(CID,YID,COU,TEX); 
   
   
   $("#chooseSc").on("change",function(){
   		var thisVal =  $(this).find("option:selected").text();
   		loadBytitle(thisVal); 
 
});
});

function nav(firstY,firtsC){
	//console.log("carganding")	;
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
													//console.log("CID: "+CID + " YID: " + YID+" COU: "+COU+" TEX "+TEX);	
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
						//console.log("Clicked");
						var pagina = $(this).attr("ID");
						var coSel  = CID;    
						var yeSel = YID;
						var yeTex = TEX;
						var coTex = COU
						var newUrl = _spPageContextInfo.siteAbsoluteUrl +"/SitePages/"+pagina+"?CO="+coSel+"&YE="+yeSel+"&COU="+coTex+"&yeTEX="+yeTex+"";
						//console.log(newUrl);
						window.location.replace(newUrl);
				});
		});		
}






$(function() {
		
  nav();
});