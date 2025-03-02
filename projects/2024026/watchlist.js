

const moviesContainer = document.querySelector('#movies-container');
const noMovieContainer = document.querySelector('#no-movie-container');

const movies = JSON.parse(localStorage.getItem('watchlist')) || [];
renderMovies(movies);

document.addEventListener('click', clickHandler);

function clickHandler(event) {
    if (event.target.id === 'remove-from-watchlist') {
        removeFromWatchlist(event);
    }
}

function removeFromWatchlist(event) {
    const movieId = event.target.dataset.movieId;
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    const updatedWatchlist = watchlist.filter(movie => movie.imdbID !== movieId);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    renderMovies(updatedWatchlist);
}

function renderMovies(movies) {
    if (movies.length === 0) {
        moviesContainer.innerHTML = '';
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
                            <span id="remove-from-watchlist" class="remove-from-watchlist" data-movie-id="${movie.imdbID}">Watchlist</span>
                        </div>
                        <div id="plot" class="plot">${movie.Plot}</div>
                    </div>
            </div>
            `).join('');
        moviesContainer.innerHTML = movieHTML;
    }
}   