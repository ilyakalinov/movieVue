<template>
<div>
    <!-- <div class="pagination__block">
        <b-pagination
            class="pagination__block__inner"
            v-model="currentPageModal"
            :limit="limit"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>
        {{currentPage}}
    </div> -->
    <div class="page__block">
        <v-pagination 
            v-model="currentPageModal" 
            :page-count="100"
        ></v-pagination>
    </div>
</div>
    
</template>

<script>
import vPagination from 'vue-plain-pagination'
export default {
    name: 'Pagination',
    components: { vPagination },
    data: () => ({
        limit: 10,
        perPage: 10,
        rows: 100,
    }),
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        currentPageModal: {
            get() {
                return this.currentPage
            },
            set(value) {
                this.$emit('pageChanged', value)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .pagination__block {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .pagination__block__inner {
        margin: 0 auto;
    }
    .pagination__block::v-deep .pagination .page-item .page-link {
        background-color: transparent;
        font-size: 12px;
        color: #fff;
        box-shadow: none;
    }
    .pagination__block::v-deep .pagination .page-item.active .page-link {
        background-color: #fff;
        color: black;
        border: 1px solid #fff;
        box-shadow: 4px 3px 9px rgba(0, 0, 0, 0.905);
    }
    .page__block {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .page__block::v-deep .pagination-link{
        background-color: transparent;
        font-size: 12px;
        color: #fff;
        box-shadow: none;
        font-size: 20px;
        box-shadow: 4px 3px 9px rgba(0, 0, 0, 0.905);
        border: none;
        margin-right: 5px;
        min-width: 40px;
    }
    .page__block::v-deep .pagination-item span{
        display: none;
    }
    .page__block::v-deep .pagination-item--active button{
        background: rgba(140, 15, 15, 0.405);
    }
</style>