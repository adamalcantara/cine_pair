var omdbKey = "f6c265c9"
var searchBtn1 = document.getElementById("search-btn1")
var searchBtn2 = document.getElementById("search-btn2")
var result1 = document.getElementById("result1")
var result2 = document.getElementById("result2")

function searchValue1() {
    var searchValue1 = document.getElementById("search-box1").value;
    console.log(searchValue1)

    if (searchValue1 == "") {
        alert("Must input a search term");
        return false
    }

    getLeftStatsOmdb(searchValue1);
    document.getElementById("search-box1").value = "";
}

function searchValue2() {
    var searchValue2 = document.getElementById("search-box2").value;
    console.log(searchValue2)

    if (searchValue2 == "") {
        alert("Must input a search term");
        return false
    }

    getRightStatsOmdb(searchValue2);
    document.getElementById("search-box2").value = "";
}

function getLeftStatsOmdb(searchValue1) {
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

            var released = data.Released;
            console.log(released);

            var releasedEl = document.createElement("p");
            releasedEl.textContent = "Released: " + released;
            result1.append(releasedEl);

            var rated = data.Rated;
            console.log(rated);

            var ratedEl = document.createElement("p");
            ratedEl.textContent = "Rated: " + rated;
            result1.append(ratedEl);

            var ratings = data.Ratings[0].Value;
            console.log(ratings);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = ratings;
            result1.append(ratingsEl);

            var runTime = data.Runtime;
            console.log(runTime);

            var runTimeEl = document.createElement("p");
            runTimeEl.textContent = "Runtime: " + runTime;
            result1.append(runTimeEl);

            var moviePlot = data.Plot;
            console.log("THE MOVIE PLOT")
            console.log(moviePlot);

            var moviePlotEl = document.createElement("p");
            moviePlotEl.textContent = "Plot: " + moviePlot;
            result1.append(moviePlotEl);


        })

        
}

function getRightStatsOmdb(searchValue2) {
    // var omdbURL = "https://api.themoviedb.org/3/movie/" + searchValue1 + "?api_key=" + omdbKey;
    var omdbURL = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + searchValue2;

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
            result2.append(movieNameEl);

            var released = data.Released;
            console.log(released);

            var releasedEl = document.createElement("p");
            releasedEl.textContent = "Released: " + released;
            result2.append(releasedEl);

            var rated = data.Rated;
            console.log(rated);

            var ratedEl = document.createElement("p");
            ratedEl.textContent = "Rated: " + rated;
            result2.append(ratedEl);

            var ratings = data.Ratings;
            console.log(ratings);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = ratings;
            result2.append(ratingsEl);

            var runTime = data.Runtime;
            console.log(runTime);

            var runTimeEl = document.createElement("p");
            runTimeEl.textContent = "Runtime: " + runTime;
            result2.append(runTimeEl);

            var moviePlot = data.Plot;
            console.log("THE MOVIE PLOT")
            console.log(moviePlot);

            var moviePlotEl = document.createElement("p");
            moviePlotEl.textContent = "Plot: " + moviePlot;
            result2.append(moviePlotEl);


        })

        
}

searchBtn1.addEventListener("click", searchValue1);
searchBtn2.addEventListener("click", searchValue2);