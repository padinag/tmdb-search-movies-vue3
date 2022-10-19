import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMoviesStore = defineStore('movies', () => {
    const movies = ref(null);
    const showDescription = ref(false);
    const searchUsed = ref(false);

    return { movies, showDescription, searchUsed };
});
