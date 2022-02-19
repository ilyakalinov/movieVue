<template>
    <div class="movie__item mb-3">
            <div 
                class="movie__item__poster"
                :style="posterBg">
            </div>
            <div class="movie__item__info">
                <h3 class="movie__title">
                    {{movie.title.length > 26 ? `${movie.title.slice(0, 26)}...` : movie.title}}
                </h3>
                <span class="movie__year">
                    {{movie.release_date}}
                </span>
            </div>
            <div class="movie__item__trailer">
                <img src="@/accets/img/play.png" alt="">
                <span>
                    Watch trailer
                </span>
            </div>
            <div class="movie__items__control row no-gutters">
                <div class="col">
                    <b-button 
                        @click="onShowModalInfo"
                        class="control__btn" 
                        size="md" 
                        block variant="outline-light">
                        Info
                    </b-button>
                </div>
                 <div class="col">
                    <b-button 
                        class="control__btn" 
                        size="md" 
                        block variant="outline-light"
                        @click="emitRemoveMovie"
                    >
                        Remove
                    </b-button>
                </div>
            </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: 'MovieItem',
    props: {
        movie:{
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapActions({
            infoMovies: 'movies/infoMovies'
        }),
        ...mapMutations({
            setIdInfo: 'movies/setIdInfo'
        }),
        async onShowModalInfo() {
            this.setIdInfo(this.movie.id);
            this.infoMovies(this.movie.id)
            await this.$bvModal.show('modal-xl', this.movie.id);
        },
        emitRemoveMovie() {
            this.$emit("removeItem", {id: this.movie.id, title: this.movie.title})
        }
    },
    computed: {
        ...mapState({
            IMG_URL: state => state.url.IMG_URL,
        }),
        posterBg() {
            return {
                "background-image": `url(${this.IMG_URL + this.movie.poster_path})`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .movie__item {
        position: relative;
        cursor: pointer;
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.2s ease-in;
        width: 250px;
        height: 400px;
        word-wrap: normal;
        
    }
    .movie__item:hover {
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.905);
        transform: scale(1.03);
        .movie__items__control {
            opacity: 1;
            transition: 0.8s;
            button {
                box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
            }
        }
        .movie__item__trailer {
            opacity: 1;
            box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
        }
    }
    .movie__item__poster {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .movie__item__info {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.486);
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 15px 0;
        h3 {
            line-height: 25px;
        }
    }
    .movie__item__trailer {
        position: absolute;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.72);
        font-size: 20px;
        color: white;
        padding: 5px 0;
        text-align: center;
        top: 15%;
        opacity: 0;
        transition: 0.4s;
        img {
            margin-top: -3px;
            width: 35px;
        }
        &:active {
            img{
                transform: scale(1.2); 
            }
        }   
    }
    .movie__items__control {
        position: absolute;
        margin: 0 auto;
        top: 30%;
        opacity: 0;
        transition: 0.4s;
        button {
            min-width: 100px;
            background-color: rgba(0, 0, 0, 0.72);
            color: white;
            &:active {
            background-color: rgba(0, 0, 0, 0.864);
            transform: scale(0.95);
            }
        }
    }
</style>