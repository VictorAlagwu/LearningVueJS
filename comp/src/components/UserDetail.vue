<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User Name: {{ switchName() }} </p>
        <p> User Age {{ userAge }} </p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            userAge: Number
        },
        methods: {
            switchName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){
                this.name = "Legal";
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasChanged',(age) => {
                this.userAge = age;
            })
        },
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
