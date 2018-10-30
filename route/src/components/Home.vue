<template>
    <div>
        <h1>The Home Page</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur
            dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero
            voluptatem.
        </p>
        <button @click="navigateToUser" class="btn btn-primary">Go to User Page</button>
    </div>
</template>
<script>
export default {
    methods: {
        navigateToUser() {
            this.$router.push('/user');
        }
    }
}
</script>
