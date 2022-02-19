<template>
    <div class="header">
        <nav class="navbar navbar-light bg-light justify-content-between">
            <h1 class="list__title">IMDB Top</h1>
            <form 
                class="form-inline"
                v-on:submit.prevent="searchMovie"
            >
                <input 
                    v-model="searchValue"
                    class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" >
                <button 
                    class="btn btn-outline-success my-2 my-sm-0" 
                    type="submit"
                >Search</button>
            </form>
        </nav>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    name: 'Header', 
    data: () => ({
        searchValue: '',
    }),
    methods: {
        ...mapActions({
            searcMovies: 'movies/searcMovies',
        }),
        ...mapMutations({
            setSearch: 'movies/setSearch'
        }),
        searchMovie(){
            // console.log(this.searchValue)
            this.setSearch(this.searchValue)
            this.searcMovies(this.searchValue)
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: auto;
        color: white;
        box-shadow: 0px 12px 37px rgba(20, 80, 223, 0.33);
    }
    .navbar {
        padding: 20px 30px;
        background-color: #3067ba77 !important;
    }
    form {
        display: flex;
        button {
            margin-left: 10px;
        }
    }
</style>