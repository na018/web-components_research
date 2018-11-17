<template>
  <div>
    <h1 style="color:red;">My Vue Web Component</h1>
    <div>{{ msg }}</div>
  </div>
</template>
<script>
  export default {
      name: 'my-custom-element',
      props: {
          msg: {
              required: false,
              default: 'Please add prop msg'
          }

      }
  }
</script>