<template>
    <div>
        <h3>My New Quote</h3>
        <button @click="counter++">Increase Counter</button>
        <p>{{ counter }} </p>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            counter: 0
        };
    }
}
</script>
<style>

</style>

