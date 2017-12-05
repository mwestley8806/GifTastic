var topics = ["Coco", "Jurassic Park", "The Lion King", "The Day After Tomorrow", "Despicable Me", "How the Grinch Stole Christmas", "October Sky", "Toy Story", "V for Vendetta", "The Proposal"];

for (var i=0; i < topics.length; i++){
    var movieButton = $("<button>");
    movieButton.addClass("movieName");
    movieButton.attr("id", topics[i]);
    movieButton.text(topics[i]);
    $("#buttonSpace").append(movieButton);
}

$("#add-movie").on("click", function(event){
    event.preventDefault();
    var newMovie = $("#movie-input").val().trim();
    topics.push(newMovie);
    renderButtons();
    console.log(topics)
})

function displayInfo() {
    var display = $(this).attr("data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BQJ3rm3sKpjx07qsffS6EkhcTiOzfgvr&q=" + display + "&limit=10&offset=0&rating=G&lang=en"

    $.ajax({
        URL = queryURL,
        method = "GET"
    }).done(function(response){
        console.log(queryURL);
    })
}

