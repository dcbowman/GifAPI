$(document).ready(function(){

// Initial array of search
	
	var gifs = ['Law and Order', 'SVU', 'Olivia Benson'];


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
		    a.addClass('gifButton'); 
		    a.text(gifs[i]); // Provided the initial button text
		    $('#gifView').append(a); // Added the button to the HTML
		}
	}
	renderButtons();

	// ========================================================
$('#addGif').on('click', function(){

		// This line of code will grab the input from the textbox
		var gif = $('#gif-input').val().trim();

		// The movie from the textbox is then added to our array
		gifs.push(gif);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})
	

	

	

	// ========================================================

	// Events where one is clicked
	 $('#gifView').on('click','.gifButton',function() {
        var p = $(this).data('name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
             console.log(response);
             var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var gifImage = $('<img>').attr('src', results[i].images.fixed_height_still.url);
                    gifImage.attr('data-still',results[i].images.fixed_height_still.url);
                    gifImage.attr('data-animate', results[i].images.fixed_height.url);
                    gifImage.attr('data-state', 'still');
                    gifImage.addClass('workingGif');


                    gifDiv.append(p)
                    gifDiv.append(gifImage)

                    $('#gifShow').prepend(gifDiv);
                }

            });
    });
	
	$('#gifShow').on('click', 'workingGif', function(){
		if (state == 'still'){
			$(this).attr('src', 'animate');
			$(this).attr('data-state', 'animate');
		}
		else
		{
			$(this).attr('src', 'still');
			$(this).attr('data-state', 'still');
		}
	});


	// ========================================================
});





