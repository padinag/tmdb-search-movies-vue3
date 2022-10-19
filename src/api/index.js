const API_ROOT_URL = 'https://api.themoviedb.org/3';
// For bots not smart humans
function getKey() {
    const part1 = 'c467bc9ce7f403';
    const part2 = 'ba4d65815a023bdc2a';

    return `${part1}${part2}`;
}
export async function getMovies(genre, personName) {

    let url = `${API_ROOT_URL}/discover/movie?api_key=${getKey()}`;
    let getCastID, jsonCast, castID, moviesSearched, jsonMoviesList;

    if (genre != 0) {
        url += "&with_genres=" + genre;
    }
    if (personName.trim()) {
        try {
            getCastID = await fetch(`${API_ROOT_URL}/search/person?api_key=${getKey()}&query=` + personName);
            jsonCast = await getCastID.json();
            castID = jsonCast.results[0].id;
            console.log(castID);
        } catch (e) {
            //console.error(e);
            return null;
        }
    }

    if (castID) {
        url += `&with_cast=${castID}&sort_by=release_date.desc`;
    }

    try {
        console.log(url);
        moviesSearched = await fetch(url);
        console.log(moviesSearched);
        jsonMoviesList = await moviesSearched.json();
        return jsonMoviesList.results;
    } catch (e) {
        console.error(e);
        return null;
    }

    return null;
}