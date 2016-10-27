<template>
  <section class="section is-medium eventlist">
    <div class="container">
      <h1 class="title is-2">Event list</h1>

      <p>
        <router-link :to="{ name: 'eventadd' }" class="button is-primary">Create</router-link>
      </p>

      <div v-if="!items" class="has-text-centered">
        <h2 class="subtitle is-4">Welcome to event list!</h2>
        <p class="subtitle">Event list allows you to stay organized</p>
        <p><router-link :to="{ name: 'eventadd' }" class="button is-primary">Create a event</router-link></p>
      </div>

      <hr>

      <div class="table-responsive">
        <table class="table" v-if="items">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Host</th>
              <th>Start</th>
              <th>End</th>
              <th>Location</th>
              <th>View</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Host</th>
              <th>Start</th>
              <th>End</th>
              <th>Location</th>
              <th>View</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="item in items">
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.host }}</td>
              <td>{{ item.start }}</td>
              <td>{{ item.end }}</td>
              <td>{{ item.location }}</td>
              <td>
                <router-link :to="{ name: 'eventview', params: { event: item } }" class="button is-outlined">View</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'eventlist',
  data() {
    const STORAGE_KEY = 'p1-event-planner-events';

    return {
      items: JSON.parse(localStorage.getItem(STORAGE_KEY)),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
