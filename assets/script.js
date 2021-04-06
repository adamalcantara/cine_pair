

var omdbKey = "f6c265c9"
var searchBtn1 = document.getElementById("search-btn1")
var result1 = document.getElementById("result1")

function searchValue1() {
    var searchValue1 = document.getElementById("search-box1").value;
    console.log(searchValue1)

    if (searchValue1 == "") {
        alert("Must input a search term");
        return false
    }

    getStatsOmdb(searchValue1);
    document.getElementById("search-box1").value = "";
}

function getStatsOmdb(searchValue1) {
    // var omdbURL = "https://api.themoviedb.org/3/movie/" + searchValue1 + "?api_key=" + omdbKey;
    var omdbURL = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + searchValue1;

    fetch(omdbURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log("THIS IS THE DATA")
            console.log(data);

            var movieName = data.Title;
            console.log("THE MOVIE TITLE");
            console.log(movieName);

            var movieNameEl = document.createElement("h1");
            movieNameEl.textContent = movieName;
            result1.append(movieNameEl);

            var moviePlot = data.Plot;
            console.log("THE MOVIE PLOT")
            console.log(moviePlot);

            var moviePlotEl = document.createElement("p");
            moviePlotEl.textContent = "Plot: " + moviePlot;
            result1.append(moviePlotEl);

            
        })

        
}

searchBtn1.addEventListener("click", searchValue1);