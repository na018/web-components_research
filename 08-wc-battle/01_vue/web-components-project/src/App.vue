<template>
  <div id="app">
    <market-banner>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg" alt>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ibiza.jpg" alt>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ankor-wat.jpg" alt>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt>
    </market-banner>
  </div>
</template>

<script>

import MarketBanner from "./components/market-banner/market-banner";
export default {
  name: 'app',
  components: {
      MarketBanner
  }
}
</script>

