<template>
    <div class="movie__info">
        <b-modal id="modal-xl" size="xl" hide-footer>
            <template #modal-title>
                Information
            </template>
            <div class="info__block">
                <div class="info__img" :style="posterBg">

                </div>
                <div class="info__box">
                    <div class="info__title">
                        <h2>{{infoMovie.title}}</h2>
                    </div>
                    <div class="info__item">
                        <div class="name__info">
                            <span>
                                Relise data
                            </span>
                        </div>
                        <div class="inform">
                            <span>
                                {{infoMovie.release_date.replace(/-/g, '.')}}
                            </span>
                        </div>
                    </div>
                    <div class="info__item">
                        <div class="name__info">
                            <span>
                                Popularity
                            </span>
                        </div>
                        <div class="inform">
                            <span>
                                {{Math.floor(infoMovie.popularity)}}
                            </span>
                        </div>
                    </div>
                    <div class="info__item">
                        <div class="name__info">
                            <span>
                                Runtime
                            </span>
                        </div>
                        <div class="inform">
                            <span>
                                {{infoMovie.runtime}} min
                            </span>
                        </div>
                    </div>
                    <div class="info__item">
                        <div class="name__info">
                            <span>
                                Vote average
                            </span>
                        </div>
                        <div class="inform">
                            <span>
                                {{infoMovie.vote_average}}
                            </span>
                        </div>
                    </div>
                    <div class="info__item">
                        <div class="name__info">
                            <span>
                            Homepage
                            </span>
                        </div>
                        <div class="inform">
                            <a :href="infoMovie.homepage">
                                {{infoMovie.homepage.length > 45 ? `${infoMovie.homepage.slice(0, 45)}...` : infoMovie.homepage}}
                            </a>
                        </div>
                    </div>
                    <div class="play__btn">
                        <button 
                            class="btn__play">
                            Play trailer
                        </button>
                    </div>
                </div>
            </div>
            <div class="overview">
                <span>
                    {{infoMovie.overview}}
                </span>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'InfoModal',
    data: () => ({
        infoBg:`background-image: url(${this.infoMovie.poster_path})`,
    }),
    state: {
        infoMovie: {},
    },
    computed: {
        ...mapState({
            infoMovie: state => state.movies.infoMovie
        }),
        posterBg() {
            return {
                "background-image": `url(https://image.tmdb.org/t/p/original${this.infoMovie.poster_path})`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #bv-modal-example {
        max-width: 80% !important;
    }
    .info__block {
        display: flex;
    }
    .info__img {
        width: 300px;
        height: 500px;
        background-size: cover;
        background-position: center;
        margin-right: 20px;
    }
    .info__box {
        width: 70%;
    }
    .info__title {
        width: 100%;
        text-align: center;
    }
    .info__item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 20px 0 10px;
        border-bottom: 2px solid rgba(128, 128, 128, 0.611);
        span, a {
            color: rgba(101, 9, 146, 0.905);
            font-size: 26px;
        }
    }
    .play__btn {
        width: 100%;
        text-align: center;
        margin-top: 25px;
        button {
            border: none;
            background-color: rgba(48, 46, 46, 0.659);
            width: 70%;
            height: 50px;
            color: white;
            font-size: 20px;
            border-radius: 4px;
        }
    }
    .overview span {
        color: rgba(101, 9, 146, 0.905);
        font-size: 18px;
    }
    .movie__info {
        background-image: linear-gradient(rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
        background-color: red;
    }
</style>