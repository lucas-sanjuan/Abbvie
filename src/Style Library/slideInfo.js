function slideInfo(){
		var theURL  = window.location.href; 
		var domain = theURL.split('/');
		var fpage = domain[domain.length - 1]
		
		if(theURL.indexOf("List")>=0){
				console.log("tiene Lista");
				$("#info,#attachContainer ").addClass("oculto");
		}
				

		var page= fpage.substr(0, fpage.indexOf('?')); 
				console.log("page: "+page);		
		
	
	var lalista = 'ScreenAdmin';			
	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Pagina eq '"+page+"' ",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))$select=AttachmentFiles,Title&$expand=AttachmentFiles
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {                             				
		                            for (var i = 0; i < data.d.results.length; i++) {					                          							                        
							                            var pageTi = data.d.results[i].Title;					                           
							                            var subPa  =  data.d.results[i].SubTitle;	
						                                var gapv   =  data.d.results[i].GapText;
						                                var lAt = data.d.results[i].YAxisTopText;
						                                var lAm = data.d.results[i].YAxistext;
						                                var lAb = data.d.results[i].YAxisBottomText;
						                                var bAl = data.d.results[i].XAxisLeftText;
						                                var bAm = data.d.results[i].XAxisText;
						                                var bAr = data.d.results[i].XAxisRigthText;

							                            $("#tgap").text(gapv);		

														$("#slideTitle").text(pageTi)
														$("#subtitle").text(subPa);
														$("#lAxis .bot").text(lAt);
														$("#lAxis .mid").text(lAm);
														$("#lAxis .top").text(lAb);
														$("#bAxis .bot").text(bAr);
														$("#bAxis .mid").text(bAm);
														$("#bAxis .top").text(bAl);

														
														
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

function  attachInfo(){
		var theURL  = window.location.href; 
		var domain = theURL.split('/');
		var fpage = domain[domain.length - 1]

		var page= fpage.substr(0, fpage.indexOf('?')); 
				console.log("page: "+page);		
		
	
	var lalista = 'ScreenAdmin';			
	
	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Pagina eq '"+page+"'&$expand=AttachmentFiles",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))$select=AttachmentFiles,Title&$expand=AttachmentFiles //&select=AttachmentFiles&$expand=AttachmentFiles
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		                 if (data.d.results.length > 0 ) {  		                  								 
		                            for (var i = 0; i < data.d.results.length; i++) {				                          							                        
							                         	//var trl = data.d.results[i].AttachmentFiles.results[i].ServerRelativeUrl;          								             
							                         	var arr = data.d.results[i].AttachmentFiles.results;
							                         	
							                         	arr.forEach(function(item){
											                var fn = item.FileName
											                var ur = item.ServerRelativeUrl;
											                
											                $("#attachedFiles").append("<a class='elattach' target='_blank' href='"+ur+"'>"+fn+"</a>");

											                
											            });
							                         	
							                    

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
 slideInfo();
 attachInfo();
});

