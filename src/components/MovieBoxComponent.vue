<script setup>

const PLACEHOLDER_SRC_URL = 'https://via.placeholder.com/200x300.png/0000FF/FFFFFF?text=Missing%20Movie%20Poster';
const MOVIE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

const props = defineProps({
    title: String,
    year: String, 
    poster_path: String,
});

</script>

<template>
    <div class="box">
        <img :src="`${MOVIE_IMG_URL}${poster_path}`">
        <div class="boxTitle">{{ title }}</div>
        <div class="boxYear">{{ year }}</div>
    </div>
</template>

<style scoped>
.box {
    display: grid;
    /* border: 1px solid rgb(203, 202, 202); */
    grid-template-rows: auto;
    padding: 2em;
    margin: 0 auto;
    /* color: white; */
    cursor: pointer;
}

.boxTitle {
    display: inline;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-align: center;
    width: 200px;
    overflow-wrap:break-word;
    cursor: pointer;
}

.boxYear {
    display: inline;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding-top: 5px;
}

img{
    height: 300px;
}
</style>