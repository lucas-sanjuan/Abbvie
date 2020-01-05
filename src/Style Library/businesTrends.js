function checkData(CID,YID){	
	var lalista = 'subtendencias';
	var elements = [];

	 $.ajax({
		         url: _spPageContextInfo.siteAbsoluteUrl + "/_api/Web/lists/Getbytitle('"+lalista+"')/items?$filter=Country/Id eq "+CID+" and Year/ID eq "+YID+"&$orderby=Country/Id desc",//((country/ID eq "+CID+") and (Year/ID eq "+YID+"))//Country/Id eq 1 or 
		  
		        method: "GET",
		        headers: { "Accept": "application/json; odata=verbose" },
		        dataType: 'json',
		        success: function (data) {
		        	var rawData = data;
		        	
		        		     drawG(rawData);   
		        
		        
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


function drawG(rawData){
console.log(rawData);   
    // Aquí en rawData poner los datos que vienen del api rest.
    /*var rawData = {
     
       
    }*/

    var elements = [];
    var items = [];
    var trendTitle = null;
    var wasNewTrend = false;

    rawData.d.results.forEach(function(trend){
        if(trend.TendenciaText.trim() !== trendTitle){
            trendTitle = trend.TendenciaText.trim();
            items = []
            wasNewTrend = true;
        }

        items.push({
            value: trend.valor + "%",
            text: trend.Title.trim(),
            bgColor: trend.Color
        });

        if(wasNewTrend){
            elements.push({
                title: trendTitle,
                items: items
            });

            wasNewTrend = false;
        }
    });


    function splitIntoSentences(s){
        s = s.substr(0, 55)

        var middle = Math.floor(s.length / 2);
        var before = s.lastIndexOf(' ', middle);
        var after = s.indexOf(' ', middle + 1);

        if (middle - before < after - middle) {
            middle = before;
        } else {
            middle = after;
        }

        var s1 = s.substr(0, middle);
        var s2 = s.substr(middle + 1);

        if(s.length >= 55){
            return [s1, s2, true];
        }

        return [s1, s2, false];

    }

    var svg = document.getElementById("chart");
    var svgns = "http://www.w3.org/2000/svg";

    var triangles = elements.length

    var rotation = 0;
    var spacing = 10;

    var height = 480;
    var initialPoint = 300;


    switch (triangles) {
        case 4:
            var centerGap = 55;
            var initialItemX = 400;
            var initialItemY = -150;
            var angle = 90;
            var unitWidth = 215;
            var width = unitWidth * triangles;
            var titleWidth = width + 13;
            var titleX = 294
            var titleY = 25;
            var originalXTranslation = 110 
            var originalYTranslation = 360 
            var xTranslation = 280 
            var yTranslation = 820 
            var percSpacing = 185
            var rectWidth = 250
            svg.setAttribute("viewBox", "240 0 1000 1000");
            break;

        case 5:
            var centerGap = 37;
            var initialItemX = 450;
            var initialItemY = 120;
            var angle = 72;
            var unitWidth = 125;
            var width = unitWidth * triangles;
            var titleWidth = width + 10;
            var titleX = 295
            var titleY = 25;
            var originalXTranslation = 158 
            var originalYTranslation = 360 
            var xTranslation = 380
            var yTranslation = 380 
            var percSpacing = 185
            var rectWidth = 250
            svg.setAttribute("viewBox", "0 0 1200 1100");
            break;

        case 7:
            var centerGap = 25;
            var initialItemX = 385;
            var initialItemY = 106;
            var angle = 51.4285714286;
            var unitWidth = 59;
            var width = unitWidth * triangles;
            var titleWidth = width + 10;
            var titleX = 295;
            var titleY = 25;
            var originalXTranslation = 90
            var originalYTranslation = 360 
            var xTranslation = 360
            var yTranslation = 342 
            var percSpacing = 175
            var rectWidth = 250
            svg.setAttribute("viewBox", "0 0 1030 1030");
            break;

        case 8:
            var centerGap = 22;
            var initialItemX = 385;
            var initialItemY = 106;
            var angle = 45;
            var unitWidth = 45;
            var width = unitWidth * triangles;
            var titleWidth = width + 5;
            var titleX = 297;
            var titleY = 27;
            var originalXTranslation = 90;
            var originalYTranslation = 387;
            var xTranslation = 375;
            var yTranslation = 317;
            var percSpacing = 160;
            var rectWidth = 230;
            svg.setAttribute("viewBox", "0 0 1030 1030");
            break;

        default:
            var centerGap = 30
            var initialItemX = 450
            var initialItemY = 85
            var angle = 60;
            var unitWidth = 82.6666666;
            var width = unitWidth * triangles;
            var titleWidth = width + 8;
            var titleX = 296;
            var titleY = 25;
            var originalXTranslation = 158;
            var originalYTranslation = 360;
            var xTranslation = 295;
            var yTranslation = 355;
            var percSpacing = 182;
            var rectWidth = 250;
            svg.setAttribute("viewBox", "0 0 1100 1000");
            break;
    }


    for (var i = 0; i < triangles; i++) {
        var polygon = document.createElementNS(svgns, 'polygon');

        var point1 = svg.createSVGPoint();
        point1.x = initialPoint;
        point1.y = 50;
        polygon.points.appendItem(point1);

        var point2 = svg.createSVGPoint();
        point2.x = initialPoint + width;
        point2.y = 50;
        polygon.points.appendItem(point2);

        var point0 = svg.createSVGPoint();
        point0.x = width / 2 + initialPoint + centerGap;
        point0.y = height - 50;
        polygon.points.appendItem(point0);

        var point3 = svg.createSVGPoint();
        point3.x = width / 2 + initialPoint;
        point3.y = height - 50;
        polygon.points.appendItem(point3);

        var point5 = svg.createSVGPoint();
        point5.x = width / 2 + initialPoint - centerGap;
        point5.y = height - 50;
        polygon.points.appendItem(point5);

        var originX = width / 2 + initialPoint;
        var originY = height + spacing;

        var titleRect = document.createElementNS(svgns, 'rect');
        titleRect.setAttribute("x", titleX);
        titleRect.setAttribute("y", 20);
        titleRect.setAttribute("width", titleWidth);
        titleRect.setAttribute("height", 30);
        titleRect.setAttribute("fill", "#031F46");
        titleRect.setAttribute("rx", 5);

        var title = document.createElementNS(svgns, 'text');
        title.textContent = elements[i].title;

        title.classList.add("title");

        if(elements.length === 8){
            title.classList.add("small");
        }

        title.setAttribute("text-anchor", "middle");
        title.setAttribute("x", originX);
        title.setAttribute("y", titleY);

        svg.appendChild(titleRect);
        svg.appendChild(title);
        svg.appendChild(polygon);

        itemX = initialItemX;
        itemY = initialItemY;
        substract = 0;

        var group = document.createElementNS(svgns, 'g');

        elements[i].items.forEach(function (item) {
            var text = document.createElementNS(svgns, 'text');
            //text.textContent = item.text;
            text.classList.add("text");
            text.setAttribute("text-anchor", "start");
            text.setAttribute("x", itemX - 15);
            text.setAttribute("transform", "rotate(90) translate(-280, " + originalYTranslation + ")");

            if (rotation >= 0 && rotation < 180) {
                text.setAttribute("x", itemX - 40);
                text.setAttribute("transform", "rotate(270) translate(" + xTranslation + ", " + yTranslation + ")");
            } 

            text.setAttribute("y", itemY - 30);

            var span = document.createElementNS(svgns, 'tspan');

            span.textContent = item.text;

            if(item.text.length > 40){
                span.textContent = splitIntoSentences(item.text)[0];
            }

            span.setAttribute("text-anchor", "start");
            
            span.setAttribute("x", itemX - 5);
            if (rotation >= 0 && rotation < 180) {
                span.setAttribute("x", itemX - 40);
            }

            span.setAttribute("y", itemY);
            text.appendChild(span)

            if (item.text.length > 40) {
                var span2 = document.createElementNS(svgns, 'tspan');
                span2.textContent = splitIntoSentences(item.text)[1];
                span2.setAttribute("text-anchor", "start");

                span2.setAttribute("x", itemX - 5);

                if (rotation >= 0 && rotation < 180) {
                    span2.setAttribute("x", itemX - 40);
                }

                span2.setAttribute("y", itemY + 15);
                text.appendChild(span2)


                if (splitIntoSentences(item.text)[2]) {
                    span2.textContent += "...";
                }

                substract = 0
            } else {
                substract = 15
            }

            var rect = document.createElementNS(svgns, 'rect');
            rect.setAttribute("transform-origin", "center");
            rect.setAttribute("fill", item.bgColor.toString());
            rect.setAttribute("transform", "rotate(90) translate(" + originalXTranslation + ", " + originalYTranslation + ")");

            if(rotation >= 0 && rotation < 180){
                rect.setAttribute("x", itemX - 50);
                rect.setAttribute("transform", "rotate(270) translate(" + xTranslation + ", " + yTranslation + ")");
            }

            rect.setAttribute("y", itemY - 5);
            rect.setAttribute("width", rectWidth);
            rect.setAttribute("height", 40 - substract);
            rect.setAttribute("rx", 5);
            rect.classList.add("text-rect");


            var perc = document.createElementNS(svgns, 'text');
            perc.textContent = item.value;
            perc.classList.add("perc");
            perc.setAttribute("text-anchor", "end");
            perc.setAttribute("font-weight", "bold");

            perc.setAttribute("x", itemX - 20);
            perc.setAttribute("transform", "rotate(90) translate(-280, " + originalYTranslation + ")");

            if(rotation >= 0 && rotation < 180){
                perc.setAttribute("x", itemX + 55);
                perc.setAttribute("transform", "rotate(270) translate(" + (xTranslation + percSpacing) + ", " + yTranslation + ")");
            }

            perc.setAttribute("y", itemY);

            group.appendChild(rect)
            group.appendChild(text)
            group.appendChild(perc)

            itemY += 50 - substract;

        })

        svg.appendChild(group)
        // Rotations
        //group.classList.add("text-group");
        //group.setAttribute("transform", "rotate(" + textGroupRotation + "deg)");
        //textGroupRotation += 60;

        var origin = originX + ", " + originY

        group.setAttribute("transform", "rotate(" + rotation + ", " + origin + ")");

        if(rotation >= 0 && rotation < 180){
            group.setAttribute("transform", "rotate(" + (rotation) + ", " + origin + ")");
        }
        
        polygon.setAttribute("transform", "rotate(" + rotation + ", " + origin + ")");
        title.setAttribute("transform", "rotate(" + rotation + ", " + origin + ")");
        titleRect.setAttribute("transform", "rotate(" + rotation + ", " + origin + ")");


        rotation += angle
    }

}    
    
/*--------NAVEGACION ---------------------------------*/

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
