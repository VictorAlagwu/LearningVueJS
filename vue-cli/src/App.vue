<template>
  <div id="app">
    <h2>Hello {{ user }}</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return {
      msg: 'Welcome to Your Vue.js App',
      user: 'Victor'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
