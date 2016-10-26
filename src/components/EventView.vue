<template>
  <section class="section is-medium eventview">
    <div class="container">
      <h1 class="title is-2">Event view</h1>

      <div class="content">
        <h2>{{ $route.params.event.name }}</h2>

        <p><strong>Type</strong>: {{ $route.params.event.type }}</p>
        <p><strong>Host</strong>: {{ $route.params.event.host }}</p>
        <p><strong>Location</strong>: {{ $route.params.event.location }}</p>
        <p><strong>Start</strong>: {{ $route.params.event.start }}</p>
        <p><strong>End</strong>: {{ $route.params.event.end }}</p>
        <p><strong>Guest list</strong>: {{ $route.params.event.guestList }}</p>
        <p><strong>Additional information</strong>: {{ $route.params.event.additionalInfo }}</p>

        <router-link :to="{ name: 'eventlist' }" class="button is-link">Event list</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'eventview',
  data() {
    // const STORAGE_KEY = 'p1-event-planner-events';

    return {
      // item: JSON.parse(localStorage.getItem(STORAGE_KEY)),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
