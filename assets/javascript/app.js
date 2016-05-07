// Initial array of search
	var gifs = ['Dwight', 'Jim Halpert', 'Michael Scott'];

	// ========================================================

	// Generic function for dumping the JSON content for each button into the div
	function displayGifs(){

var gifName = $(this).data("name");
	var queryURL = "'http://api.giphy.com/v1/gifs/search?q="+ gifName + "&api_key=dc6zaTOxFJmzC";

		
  

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	     	 // Creates a generic div to hold the gif
			var gifDiv = $('<div class="movie">');

			// Retrieves the rating
			var rating = response.Rating;

			// Creates an element to have the rating displayed
			var pOne = $('<p>').text( "Rating: " + rating);

			// Displays the rating
			gifDiv.append(pOne);

			

		
			// Creates an element to hold the mp4 
			var image = $('<img>').attr("images/fixed_height/mp4", response.mp4);

			// Appends the mp4
			gifDiv.append(image);

			
			
		});

	}
	

	

	

	// function to generate gif data
	function renderButtons(){ 

		// Deletes gifs
		$('#gifView').empty();

		// Loops through the array of gifs
		for (var i = 0; i < gifs.length; i++){

			//creates button for each gif search

			 
		    var a = $('<button>')
		    a.addClass('gif'); // Added a class 
		    a.attr('data-name', gifs[i]); // Added a data-attribute
		    a.text(gifs[i]); // Provided the initial button text
		    $('#gifView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// Events where one is clicked
	$('#addGif').on('click', function(){

		// Grabs the input from the textbox
		var gif = $('#gif-input').val().trim();

		// The input from the textbox is added to array
		gifs.push(gif);
		
		// Our array then runs 
		renderButtons();

 
		return false;
	})

	// ========================================================

	// Generic function for displaying the gifInfo
	$(document).on('click', '.gif', displayGifs);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons();





