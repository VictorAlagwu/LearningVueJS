<template>
<div>
    <input v-model="filterText">
    <ul>
        <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
    </ul>
</div>
</template>

<script>
    import { fruitMix } from './fruitMix';
    export default {
      mixins: [fruitMix]
    };
</script>

<style>

</style>
