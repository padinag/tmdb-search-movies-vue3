<script setup>
import { ref } from 'vue';
import * as Api from '@/api';
import { useMoviesStore  } from '@/stores/movies';

const selected = ref(0);

const options = ref([
    { value: 0, label: 'Genre' },
    { value: 28, label: 'Action' },
    { value: 12, label: 'Adventure' },
    { value: 16, label: 'Animation' },
    { value: 35, label: 'Comedy' },
    { value: 80, label: 'Crime' },
    { value: 99, label: 'Documentary' },
    { value: 18, label: 'Drama' },
    { value: 10751, label: 'Family' },
    { value: 14, label: 'Fantasy' },
    { value: 36, label: 'History' },
    { value: 27, label: 'Horror' },
    { value: 10402, label: 'Music' },
    { value: 9648, label: 'Mystery' },
    { value: 10749, label: 'Romance' },
    { value: 878, label: 'Science Fiction' },
    { value: 10770, label: 'TVMovie' },
    { value: 53, label: 'Thriller' },
    { value: 10752, label: 'War' },
    { value: 37, label: 'Western' },
]);

const personName = ref('');
const poster_path = ref('')

const PLACEHOLDER_SRC_URL = 'https://via.placeholder.com/200x300.png/0000FF/FFFFFF?text=Missing%20Movie%20Poster';
const MOVIE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

const store = useMoviesStore();

async function getMovies() {
    console.log(selected.value, personName.value);
    store.movies = await Api.getMovies(selected.value, personName.value, poster_path.value); 
    store.searchUsed = true;   
}

function clearSearch() {
    store.movies = {};
    selected.value = 0;
    personName.value = '';
    store.showDescription = false;
    store.searchUsed = false;
}

</script>

<template>
    <div class="container">
        <div class="search">
            <div class="search__elem search--arrow" id="genresDiv">
                <select class="select__elem" v-model="selected">
                    <option v-for="option in options" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            <div class="search__elem search__elem--large">
                <input v-model="personName" placeholder="Actor Name" />
            </div>
            <div class="search__elem search--center search--center-lookup" @click="getMovies();">
                <svg viewBox="0 0 32 32" class="magnifier">
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </div>
            <div class="search__elem search--center search--center-clear" @click="clearSearch(true);  ">
                &#10006;
            </div>
        </div>

    </div>
</template>

<style scoped>
body {
    background-color: #a598ee;
    place-items: top;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 5px;
    margin: 0;
}

.search {
    display: flex;
    justify-content: center;
    /* border: 1px solid dimgray; */
}

.search__elem {
    display: inline;
    align-self: center;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 50px;
    min-width: 4em;
    background-color: white;
    box-shadow: 0 8px 20px 0 rgb(0 0 0 / 15%);
}

.search--arrow {
    appearance: none;
    position: relative;
    float: left;
}

.search--arrow:after {
    content: '▼';
    position: absolute;
    right: 11px;
    color: rgb(222, 220, 220);
    cursor: pointer;
    pointer-events: none;
}

select:focus {
    outline: none !important;
}

.select__elem {
    appearance: none;
    font: 400 12px/1.3 sans-serif;
    border: 0;
    /* border-style: solid dimgray;  */
    padding: 0.65em 2.5em 0.55em 0.65em;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: rgb(164, 162, 162);
    cursor: pointer;
    background-color: rgba(247, 245, 245, 0.1);
}

input {
    border: 0;
    outline: 0;
    padding: 0.65em 2.5em 0.55em 0.65em;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: rgb(164, 162, 162);
}

::placeholder {
    color: rgb(164, 162, 162);
}

.search__elem--large {
    flex-grow: 0.3;
}

.search--center {
    text-align: center;
    cursor: pointer;
    color: white;
}

.search--center-lookup {
    background: #63c76a;
    color: white;
}

.magnifier {
    vertical-align: middle;
    width: 1.7em;
    height: 1.7em;
}

.search--center-clear {
    background-color: rgb(164, 162, 162);
}

img {
    height: 300px;
    margin: 0 auto;
}


</style>
