$(document).ready(function() {
	var features = [];
	$(".feature-badge").on("click", function (event) {
		
		//Selected Tag Value 
		var value = $(this).html();

		//Useless, it shows all tags value.
		var featuresAvailable = $(".feature-badge").map(function(){
           return $.trim($(this).html());
        }).get();
		
		
		//Show Selected Tags in Array
		var selected = $('#features').map(function(){
           return $(this).val().split(",");
        }).get();
        
        if( selected.indexOf(value) > -1){
			selected.splice( selected.indexOf(value), 1 );
			features.splice( features.indexOf(value), 1 );
			// delete selected[selected.indexOf(value)]
			// delete features[features.indexOf(value)]
			$("#features").val(features);
			
			//Make Tag unselected in design
			$(this).removeClass("bg-danger text-light");
			$(this).addClass("bg-warning");
        }
        else{
        	//Passes the selected tag to the global selected features Array.
			features.push(value)
			//Assign value to the form.

			$("#features").val(features);
	        //Make Tag selected in design
			$(this).removeClass("bg-warning");
			$(this).addClass("bg-danger text-light");
        }
        console.log(features);
        // select the passed selected tags value in hidden field of from in string format
		var feat = $("#features").val();
		console.log(feat);

	});

	$("#price_range").on("change", function(){
		value = $(this).val();
		console.log(value);
		$("#show_price").text(value);
	})

});
