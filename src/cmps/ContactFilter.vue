<template>
    <section class="filter">
        <input 
            @input="onSetFilterBy" 
            v-model="filterBy.txt"
            placeholder="Search"
            type="text" >
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { txt: '' }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
.filter {
    margin-block: 10px;
}

::placeholder {
    color: #cfced1e7;
}
</style>