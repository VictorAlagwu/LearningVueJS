<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <label for="quote">Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <br>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <button type="submit" @click.prevent="addQuote" class="btn btn-primary">Add Quote</button>
            </div>
        </form>
        
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            quote: ''
        }
    },
    methods: {
        addQuote: function(){
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>
<style>

</style>
