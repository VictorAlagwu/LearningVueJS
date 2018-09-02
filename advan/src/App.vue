<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h3 slot="title">{{ quoteTitle }}</h3>
                   <p >Learn today, Learn tomorrom</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
    export default {
        data: () => {
            return {
                quoteTitle: 'The Quote'
            }
            
        },
        components: {
            appQuote: Quote
        }
    }
</script>

<style>
</style>
