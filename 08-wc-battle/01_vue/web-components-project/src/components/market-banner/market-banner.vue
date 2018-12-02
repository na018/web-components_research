<template>
    <div id="slider">
        <figure>
            <slot></slot>
        </figure>
    </div>
</template>

<script>
    export default {
        name: "market-banner"
    }
</script>

<style>
    @keyframes slidy {
        0% { left: 0%; }
        20% { left: 0%; }
        25% { left: -100%; }
        45% { left: -100%; }
        50% { left: -200%; }
        70% { left: -200%; }
        75% { left: -300%; }
        95% { left: -300%; }
        100% { left: -400%; }
    }

    body { margin: 0; }
    div#slider { overflow: auto; }
    div#slider figure img { width: 20%; float: left; }
    div#slider figure img:hover { width:20.05%; height:110.5%; margin-left:-0.05%;transition: .3s; }
    div#slider figure {
        position: relative;
        width: 500%;
        margin: 0;
        left: 0;
        text-align: left;
        font-size: 0;
        animation: 5s slidy infinite;
        animation-duration:25s;
    }

</style>