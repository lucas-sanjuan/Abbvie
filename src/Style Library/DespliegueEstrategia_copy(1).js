function  checkData(CID,YID,COU,TEX,pilar){	
	console.log("checkData YID:"+YID);
		console.log("checkData CID:"+CID);

	$(".indicador").remove();
	var lalista = 'DepliegueEstrategia';
	console.log(pilar)
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=PIlar/Id eq '"+pilar+"' ",//                   //((country/ID eq "+CID+") and (Year/ID eq "+YID+"))//and PIlar/ID eq "+pilar+" //and PIlar/Id eq '"+pilar+"'//url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq "+CID+" and Year/ID eq "+YID+"",//     
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {
		                            				var objetivo = data.d.results[i].Title;
		                            				var valor = data.d.results[i].Value;
		                            				var indicador =  data.d.results[i].IndicadorMetrica	
		                            				var g20 = data.d.results[i].Goal2020;
		                            				var g21 = data.d.results[i].Goal2021;
		                            				var g22 = data.d.results[i].Goal2022;
		                            				var pilar = data.d.results[i].Pilar;
		                            				console.log(objetivo);
		                            		
							                         $("#indicadores").append("<div class='indicador'><div class='headT'><h3>"+objetivo+"</h3></div><div class='headT'><h3>"+indicador+"</h3></div><div class='headT'><h3>Metas:</h3><div class='clear'></div><table><tr><td>"+g20+"</td><td>"+g21+"</td><td>"+g22+"</td></tr></table></div></div>");	
   
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
			var pilar = '';	
   
   pilarNav(CID,YID,COU,TEX,pilar);
   
		$("#choosePilar").on("change",function(){
					var pilar = $(this).val();
					 checkData(CID,YID,COU,TEX,pilar);
					 console.log(pilar);
		});

      
});


/*---------------------------------------------------------------------------------------*/




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
							                            //console.log(order);
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



function pilarNav(CID,YID,COU,TEX,pilar){
		var lalista = 'GAPDEVALORAFILIADA';
		console.log("YID:"+YID);
		console.log("CID:"+CID);
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq "+CID+" and Year/ID eq "+YID+"",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))//and PIlar/ID eq "+pilar+"
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {
		                            				var pilarName = data.d.results[i].Title;
		                            				var pilarID   = data.d.results[i].ID;		                            					                        					
							                            $("#choosePilar").append("<option value="+pilarID+">"+pilarName+"</option>");	
   
                                               }
                                               $("#choosePilar option:first-child").addClass("thePilar");
                                               var pilar = $(".thePilar").val();
                                               console.log("first Pilar:"+pilar);
                                               
                                               
												checkData(CID,YID,COU,TEX,pilar);	
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
  nav();
});


/*
function pilarNav(CID,YID,COU,TEX,pilar){
		var lalista = 'GAPDEVALORAFILIADA';
		console.log("YID:"+YID);
		console.log("CID:"+CID);
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq "+CID+" and Year/ID eq "+YID+"",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))//and PIlar/ID eq "+pilar+"
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {
		                            				var pilarName = data.d.results[i].Title;
		                            				var pilarID   = data.d.results[i].ID;		                            					                        					
							                            $("#choosePilar").append("<option value="+pilarID+">"+pilarName+"</option>");	
   
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

}*/
