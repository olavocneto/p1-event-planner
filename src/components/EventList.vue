<template>
  <section class="section eventlist">
    <div class="container">
      <ul id="example-1">
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'eventlist',
  data() {
    return {
      items: [
        {
          message: 'OLav',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
