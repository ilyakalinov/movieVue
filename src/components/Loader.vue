<template>
    <div class="loader" v-if="isShowLoad">
        <b-spinner style="width: 8rem; height: 8rem; background-color: #a03faf" type="grow"></b-spinner>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Loader',
    computed: {
        ...mapGetters({
            isShowLoad: 'loader/isShowLoad'
        })
    }
}
</script>

<style lang="scss" scoped>
    .loader {
        color: white;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;        
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
</style>