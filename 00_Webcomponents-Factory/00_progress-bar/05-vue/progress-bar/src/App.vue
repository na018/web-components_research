<template>
  <div id="app">
    <progress-bar :complete="90" class="ma-1"></progress-bar>
    <progress-bar :complete="40" class="ma-1"></progress-bar>
    <progress-bar v-for="(i,key) in 120" :complete="i*10" class="ma-1"></progress-bar>
  </div>
</template>

<script>
    import ProgressBar from "./components/ProgressBar";
    export default {
        name: 'app',
        components: {ProgressBar},
    }
</script>
<style>
  .ma-1 { margin: 5px;}
</style>
