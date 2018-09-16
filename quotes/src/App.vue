<template>
    <div class="container">
        <h3 class="text-center">Quote App</h3>
        <hr>
        <app-header :quotesCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded = "newQuote"></app-new-quote>
       
        <hr>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function () { 
            return {
                quotes: [
                ],
                maxQuotes: 10
            }
         },
         methods: {
             newQuote(quote){
                 if(this.quotes.length >= this.maxQuotes){
                     return alert('Please you have enter your maximun limit, kindly delete some quotes to continue ! 😡')
                 }
                 this.quotes.push(quote);
             },
             deleteQuote(index){
                 this.quotes.splice(index, 1);
             }
         },
         components: {
             appQuoteGrid: QuoteGrid,
             appNewQuote: NewQuote,
             appHeader: Header
         }
    }
</script>

<style>
</style>
