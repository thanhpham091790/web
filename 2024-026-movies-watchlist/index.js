

const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');
const moviesContainer = document.querySelector('#movies-container');
const noMovieContainer = document.querySelector('#no-movie-container');
const noMovieMsg = document.querySelector('#no-movie-msg');

searchForm.addEventListener('submit', formSubmitHandler);

document.addEventListener('click', clickHandler);

function clickHandler(event) {
    if (event.target.id === 'add-to-watchlist') {
        addToWatchlist(event);
    }
    if (event.target.id === 'remove-from-watchlist') {
        removeFromWatchlist(event);
    }
}

function addToWatchlist(event) {
    const movieId = event.target.dataset.movieId;
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movie = movies.find(movie => movie.imdbID === movieId);
    localStorage.setItem('watchlist', JSON.stringify([...JSON.parse(localStorage.getItem('watchlist') || '[]'), movie]));

    const removeFromWatchlistElement = document.createElement('span');
    removeFromWatchlistElement.id = 'remove-from-watchlist';
    removeFromWatchlistElement.classList.add('remove-from-watchlist');
    removeFromWatchlistElement.dataset.movieId = movieId;
    removeFromWatchlistElement.textContent = 'Watchlist';

    event.target.replaceWith(removeFromWatchlistElement);
}


function removeFromWatchlist(event) {
    const movieId = event.target.dataset.movieId;
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    const updatedWatchlist = watchlist.filter(movie => movie.imdbID !== movieId);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

    const addToWatchlistElement = document.createElement('span');
    addToWatchlistElement.id = 'add-to-watchlist';
    addToWatchlistElement.classList.add('add-to-watchlist');
    addToWatchlistElement.dataset.movieId = movieId;
    addToWatchlistElement.textContent = 'Watchlist';

    event.target.replaceWith(addToWatchlistElement);
}

function formSubmitHandler(event) {
    event.preventDefault();

    const searchValue = searchInput.value.trim();
    if (searchValue === '') return;

    fetch(`http://www.omdbapi.com/?apikey=3053bd0b&s=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                return renderMovies([]);
            }

            const movieIds = data.Search.map(movie => movie.imdbID);
            Promise.all(
                movieIds.map(movieId => fetch(`http://www.omdbapi.com/?apikey=3053bd0b&i=${movieId}`)
                    .then(res => res.json())
                    .then(data => {
                        const keys = ["imdbID", "Poster", "Title", "imdbRating", "Runtime", "Genre", "Plot"];
                        const movie = {};
                        for (const key of keys) {
                            if (data.hasOwnProperty(key))
                                movie[key] = data[key];
                        }
                        return movie;
                    }))
            ).then(movies => {
                localStorage.setItem('movies', JSON.stringify(movies));
                renderMovies(movies);
            });
        });
}

function renderMovies(movies) {
    if (movies.length === 0) {
        moviesContainer.innerHTML = '';
        noMovieMsg.textContent = 'No movies found';
        noMovieContainer.style.display = 'flex';
    } else {
        noMovieContainer.style.display = 'none';
        const movieHTML = movies.map(movie => `
            <div id="${movie.imdbID}" class="movie">
                <img src="${movie.Poster}" alt="${movie.Title}" id="poster" class="poster">
                    <div id="movie-info" class="movie-info">
                        <div id="title-ratings" class="title-ratings">
                            <h2 id="title" class="title">${movie.Title}</h2>
                            <span id="ratings" class="ratings">${movie.imdbRating}</span>
                        </div>
                        <div id="runtime-genre-watchlist" class="runtime-genre-watchlist">
                            <span id="runtime" class="runtime">${movie.Runtime}</span>
                            <span id="genre" class="genre">${movie.Genre}</span>
                            ${JSON.parse(localStorage.getItem('watchlist') || '[]').find(watchlistMovie => watchlistMovie.imdbID === movie.imdbID) ?
                `<span id="remove-from-watchlist" class="remove-from-watchlist" data-movie-id="${movie.imdbID}">Watchlist</span>` :
                `<span id="add-to-watchlist" class="add-to-watchlist" data-movie-id="${movie.imdbID}">Watchlist</span>`
            }
                        </div>
                        <div id="plot" class="plot">${movie.Plot}</div>
                    </div>
            </div>
            `).join('');
        moviesContainer.innerHTML = movieHTML;
    }
}   