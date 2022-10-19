<script setup>
import MovieBoxComponent from '@/components/MovieBoxComponent.vue';
import { useMoviesStore  } from '@/stores/movies';
import {ref} from 'vue';

const store = useMoviesStore();
const overview = ref('');


function clearDescription() {
    store.showDescription = false;
}
</script>

<template>
    <div class="boxContainer" v-if="store.movies!=null">
        <div class="overView" v-show="store.showDescription">
            <div @click="clearDescription();" id="closed">&#10006;</div>
            <p>{{overview}}</p>
        </div>
        <MovieBoxComponent v-for="movie in store.movies" 
            :title="movie.title" 
            :year="movie.release_date" 
            :poster_path="movie.poster_path" 
            @click="overview = movie.overview; store.showDescription = true"
        />
    </div>
    <div class="overView" v-else-if="store.searchUsed">No results for your search</div>
</template>

<style scoped>
.boxContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 50px;
}

.overView {
    box-sizing: border-box;
    width: 500px;
    height: 250px;
    background-color: white;
    padding: 15px;
    font-family: 'Roboto', sans-serif;
    border-top: 1px solid rgb(164, 162, 162);
    position: fixed;
    left:calc(50% - 250px);
    /* display: none; */
    top: 100px;
    z-index: 1000;
    text-align: center;

}

#closed {
    text-align: end;
    cursor: pointer;
}
</style>