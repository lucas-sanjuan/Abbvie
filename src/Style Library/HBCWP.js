

	$(document).ready(function() {
	
		var cascadeArray = new Array();
		
		cascadeArray.push({
			parentFormField: "Year", //Display name on form of field from parent list Nombre del campo del PADRE
			childList: "DepliegueEstrategia", //List name of child list
			childLookupField: "Year", //Internal field name in Child List used in lookup
			
			childFormField: "Pilar", //Display name on form of the child field
			parentFieldInChildList: "Pilar", //Internal field name in Child List of the parent field
			firstOptionText: "Select a pilar"
		});

	  
		
		
		$().HillbillyCascade(cascadeArray);
			
	});
	
