<template>
  <div id="app">
    <image-slider :selectedindex="sliderIndex" @updateSelectedIndex="i =>  sliderIndex = i">
      <img src="./assets/img/pic-1.jpg" alt >
      <img src="./assets/img/pic-2.jpeg" alt >
      <img src="./assets/img/pic-3.jpeg" alt >
      <img src="./assets/img/pic-4.jpeg" alt >
      <img src="./assets/img/pic-3.jpeg" alt >
      <img src="./assets/img/pic-4.jpeg" alt >
    </image-slider>
  </div>
</template>

<script>

import ImageSlider from "./components/ImageSlider";
export default {
  name: 'app',
  components: {
      ImageSlider

  },
    data() {
        return {
            sliderIndex: 0
        }
    },
}
</script>

