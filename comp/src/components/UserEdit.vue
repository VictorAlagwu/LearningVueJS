<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Change Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: ['userAge'],
    methods:{
        editAge: function(){
            this.userAge = 30;
            //this.$emit('ageWasChanged', this.userAge);
            eventBus.$emit('ageWasChanged', this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
