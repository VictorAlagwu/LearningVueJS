<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | to-lowercase }}</p>
                <p>{{ text | toUppercase }}</p>
                <input v-model="filterText">
                <ul>
                    <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
                </ul>
            </div>
            <hr>
             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                 <app-list></app-list>
             </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMix } from './fruitMix';

    export default {
        mixins: [fruitMix],
        data() {
            return {
                 text: "Hello WcTRFGBscorld",
            }
         },
        filters: {
                toUppercase(value) {
                    return value.toUpperCase();
                }
        },
        components: {
            appList: List
        },
        
    }
</script>

<style>

</style>
