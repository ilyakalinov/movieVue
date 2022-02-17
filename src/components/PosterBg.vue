<template>
    <div 
        class="poster__page__bg"
        :style="posterBg"
        >
    </div>
</template>

<script>
export default {
    name: 'PosterBg',
    props: {
        poster: {
            type: String,
            default: '',
        }
    },
    data: () => ({
        defaultPosterBg: 'linear-gradient( rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)'
    }),
    computed: {
        posterStyle() {
            return {
                'background-image': this.posterBg
            } 
        },
        posterBg() {
            return {
                    'background-image': this.poster ? `url(${this.poster})` : this.defaultPosterBg
                }
        }
    }
}
</script>

<style lang="scss" scoped>
    .poster__page__bg {
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        background-position: center;
        transition: all 0.3s ease;
    }
</style>