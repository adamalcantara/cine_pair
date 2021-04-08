var omdbKey = "f6c265c9"
var tmdbKey = "f49057947bb2e484b64e96b04924b0e1"
var searchBtn1 = document.getElementById("search-btn1")
var searchBtn2 = document.getElementById("search-btn2")
var result1 = document.getElementById("result1")
var result2 = document.getElementById("result2")
var poster1 = document.getElementById("poster1")
var poster2 = document.getElementById("poster2")

function searchValue1() {
    var searchValue1 = document.getElementById("search-box1").value;
    console.log(searchValue1)

    result1.innerHTML = "";
    poster1.innerHTML = "";

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

    result2.innerHTML = "";
    poster2.innerHTML = "";

    if (searchValue2 == "") {
        alert("Must input a search term");
        return false
    }

    getRightStatsOmdb(searchValue2);
    document.getElementById("search-box2").value = "";
}

function getLeftStatsOmdb(searchValue1) {
    
    var omdbURL = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + searchValue1;

    fetch(omdbURL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log("THIS IS THE DATA")
            console.log(data);

            //Show bad search comment when undefined result is yielded
            var movieName = data.Title;
            if (movieName == undefined) {
                var movieNameErr = document.createElement("h3");
                movieNameErr.textContent = "No Title By That Name. Please Try Again.";
                poster1.append(movieNameErr);
            }

            console.log("THE MOVIE TITLE");
            console.log(movieName);

            var movieNameEl = document.createElement("h1");
            movieNameEl.textContent = movieName;
            result1.append(movieNameEl);

            //Hide Released Element when a bad search is yielded
            var released = data.Released;
            if (released == undefined) {
                var releaseErr = document.getElementById(releasedEl).style.display = 'block';
            }
            console.log(released);
                        
            var releasedEl = document.createElement("p");
            releasedEl.textContent = "Released: " + released;
            result1.append(releasedEl);

            //Hide Rated Element when a bad search is yielded
            var rated = data.Rated;
            if (rated == undefined) {
                var ratedErr = document.getElementById(ratedEl).style.display = 'block';
            }
            console.log(rated);

            var ratedEl = document.createElement("p");
            ratedEl.textContent = "Rated: " + rated;
            result1.append(ratedEl);

            var ratingIMDB = data.Ratings[0].Value;
            console.log(ratingIMDB);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = "IMDb Rating: " + ratingIMDB;
            result1.append(ratingsEl);

            var ratingRT = data.Ratings[1].Value;
            console.log(ratingRT);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = "Rotten Tomatoes Rating: " + ratingRT;
            result1.append(ratingsEl);

            var ratingMC = data.Ratings[2].Value;
            console.log(ratingMC);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = "Metacritic Rating: " + ratingMC;
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

            console.log("STARTING TO BRING IN THE OTHER API")
            var tmdbID = data.imdbID;
            console.log(tmdbID)
            var tmdbURL = "https://api.themoviedb.org/3/movie/" + tmdbID + "?api_key=" + tmdbKey;
            console.log(tmdbURL)

            fetch(tmdbURL)
                .then(function (response) {
                    return response.json()
                }).then(function (newData) {
                    console.log("THIS IS THE NEW API DATA")
                    console.log(newData);

                    var moviePoster = newData.poster_path;
                    console.log(moviePoster);

                    var posterPath = "https://image.tmdb.org/t/p/w185/" + moviePoster;

                    var moviePosterEl = document.createElement("img");
                    moviePosterEl.setAttribute("src", posterPath);
                    moviePosterEl.setAttribute("class", "poster1")
                    poster1.append(moviePosterEl);

                    var movieMarqueeEl = document.createElement("img");
                    movieMarqueeEl.setAttribute("src", "./assets/marquee.png")
                    movieMarqueeEl.setAttribute("class", "marquee1")
                    poster1.append(movieMarqueeEl);
                })
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

            //Show bad search comment when undefined result is yielded
            var movieName = data.Title;
            if (movieName == undefined) {
                var movieNameErr = document.createElement("h3");
                movieNameErr.textContent = "No Title By That Name. Please Try Again.";
                poster2.append(movieNameErr);
            }

            console.log("THE MOVIE TITLE");
            console.log(movieName);

            var movieNameEl = document.createElement("h1");
            movieNameEl.textContent = movieName;
            result2.append(movieNameEl);

            //Hide Released Element when a bad search is yielded
            var released = data.Released;
            if (released == undefined) {
                var releaseErr = document.getElementById(releasedEl).style.display = 'block';
            }
            console.log(released);

            var releasedEl = document.createElement("p");
            releasedEl.textContent = "Released: " + released;
            result2.append(releasedEl);

            //Hide Rated Element when a bad search is yielded
            var rated = data.Rated;
            if (rated == undefined) {
                var ratedErr = document.getElementById(ratedEl).style.display = 'block';
            }
            console.log(rated);

            var ratedEl = document.createElement("p");
            ratedEl.textContent = "Rated: " + rated;
            result2.append(ratedEl);

            var ratingIMDB = data.Ratings[0].Value;
            console.log(ratingIMDB);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = "IMDb Rating: " + ratingIMDB;
            result2.append(ratingsEl);

            var ratingRT = data.Ratings[1].Value;
            console.log(ratingRT);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = "Rotten Tomatoes Rating: " + ratingRT;
            result2.append(ratingsEl);

            var ratingMC = data.Ratings[2].Value;
            console.log(ratingMC);

            var ratingsEl = document.createElement("p");
            ratingsEl.textContent = "Metacritic Rating: " + ratingMC;
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

            console.log("STARTING TO BRING IN THE OTHER API")
            var tmdbID = data.imdbID;
            console.log(tmdbID)
            var tmdbURL = "https://api.themoviedb.org/3/movie/" + tmdbID + "?api_key=" + tmdbKey;
            console.log(tmdbURL)

            fetch(tmdbURL)
                .then(function (response) {
                    return response.json()
                }).then(function (newData) {
                    console.log("THIS IS THE NEW API DATA")
                    console.log(newData);

                    var moviePoster = newData.poster_path;
                    console.log(moviePoster);

                    var posterPath = "https://image.tmdb.org/t/p/w185/" + moviePoster;

                    var moviePosterEl = document.createElement("img");
                    moviePosterEl.setAttribute("src", posterPath);
                    moviePosterEl.setAttribute("class", "poster2")
                    poster2.append(moviePosterEl);

                    var movieMarqueeEl = document.createElement("img");
                    movieMarqueeEl.setAttribute("src", "./assets/marquee.png")
                    movieMarqueeEl.setAttribute("class", "marquee2")
                    poster2.append(movieMarqueeEl);
                })
        })

        
}

function compareButton() {
    var comparison1 = document.getElementById("result1")
    comparison1.removeAttribute("class", "result1")

    var comparison2 = document.getElementById("result2")
    comparison2.removeAttribute("class", "result2")
}



searchBtn1.addEventListener("click", searchValue1);
searchBtn2.addEventListener("click", searchValue2);
compareBtn.addEventListener("click", compareButton);

