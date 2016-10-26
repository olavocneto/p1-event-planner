<template>
  <section class="section eventlist">
    <div class="container">
      <h1 class="title">Event list</h1>

      <router-link :to="{ name: 'eventadd' }" class="button is-primary">Create event</router-link>

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
