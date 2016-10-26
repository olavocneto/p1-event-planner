<template>
  <section class="section eventadd">
    <div class="container">
      <div class="heading">
        <h1 class="title">Create event</h1>
      </div>

      <form v-on:submit.prevent="onSubmit" name="eventAddForm">
        <label for="name" class="label">Name of event</label>
        <p class="control has-icon has-icon-right">
          <input type="text" v-model="newEvent.name" class="input" v-bind:class="{ 'is-danger': !validation.name.isValid() }" id="name" name="name" autofocus required placeholder="World JS Conference 2050">

          <i v-show="!validation.name.isValid()" class="fa fa-warning"></i>
          <span v-show="validation.name.notEmpty" class="help is-danger">Value is required and can't be empty</span>
        </p>

        <label for="type" class="label">Type</label>
        <p class="control has-icon has-icon-right">
          <input list="browsers" v-model="newEvent.type" class="input" v-bind:class="{ 'is-danger': !validation.type.isValid() }" id="type" name="type" required placeholder="Conference">
          <datalist id="browsers">
            <option value="Birthday party">
            <option value="Conference talk">
            <option value="Wedding">
          </datalist>

          <i v-show="!validation.type.isValid()" class="fa fa-warning"></i>
          <span v-show="validation.type.notEmpty" class="help is-danger">Value is required and can't be empty</span>
        </p>

        <label for="host" class="label">Host</label>
        <p class="control has-icon has-icon-right">
          <input type="text" v-model="newEvent.host" class="input" v-bind:class="{ 'is-danger': !validation.host.isValid() }" id="host" name="host" required placeholder="JS Community">

          <i v-show="!validation.host.isValid()" class="fa fa-warning"></i>
          <span v-show="validation.host.notEmpty" class="help is-danger">Value is required and can't be empty</span>
        </p>

        <label for="start" class="label">Start</label>
        <p class="control has-icon has-icon-right">
          <input type="datetime-local" v-model="newEvent.start" class="input" v-bind:class="{ 'is-danger': !validation.start.isValid() }" id="start" name="start" required>

          <i v-show="!validation.start.isValid()" class="fa fa-warning"></i>
          <span v-show="validation.start.notEmpty" class="help is-danger">Value is required and can't be empty</span>
          <span v-show="validation.start.dateTime" class="help is-danger">The input does not appear to be a valid datetime</span>
        </p>

        <label for="end" class="label">End</label>
        <p class="control has-icon has-icon-right">
          <input type="datetime-local" v-model="newEvent.end" class="input" v-bind:class="{ 'is-danger': !validation.end.isValid() }" id="end" name="end" required>

          <i v-show="!validation.end.isValid()" class="fa fa-warning"></i>
          <span v-show="validation.end.notEmpty" class="help is-danger">Value is required and can't be empty</span>
          <span v-show="validation.end.dateTime" class="help is-danger">The input does not appear to be a valid datetime</span>
        </p>

        <label class="label" for="guestList">Guest list</label>
        <p class="control">
          <textarea v-model="newEvent.guestList" class="textarea" id="guestList" name="guestList" placeholder="John, Peter" required></textarea>

          <span v-show="validation.guestList.notEmpty" class="help is-danger">Value is required and can't be empty</span>
        </p>

        <label for="location" class="label">Location</label>
        <p class="control has-icon has-icon-right">
          <input type="text" v-model="newEvent.location" class="input" v-bind:class="{ 'is-danger': !validation.location.isValid() }" id="location" name="location" required placeholder="Av. Diário de Notícias, 300, bairro Cristal Porto Alegre/RS, Brazil">

          <i v-show="!validation.location.isValid()" class="fa fa-warning"></i>
          <span v-show="validation.location.notEmpty" class="help is-danger">Value is required and can't be empty</span>
        </p>

        <label class="label" for="additionalInfo">Additional information</label>
        <p class="control">
          <textarea v-model="newEvent.additionalInfo" class="textarea" id="additionalInfo" name="additionalInfo" placeholder="A note for your guests as 'Parking is on the side street.'"></textarea>
        </p>

        <p class="control">
          <button type="submit" class="button is-primary">Create</button>
          <router-link :to="{ name: 'eventlist' }" class="button is-link">Cancel</router-link>
        </p>
      </form>

      <div class="notification is-warning" v-if="formHasError">
        The form is invalid
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'eventadd',
  data() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dateFormatted = `${year}-${month}-${day}T00:00`;

    return {
      newEvent: {
        name: null,
        type: null,
        host: null,
        start: dateFormatted,
        end: dateFormatted,
        guestList: null,
        location: null,
        additionalInfo: null,
      },
      formHasError: false,
    };
  },
  computed: {
    validation() {
      return {
        name: {
          notEmpty: this.newEvent.name !== null &&
            !this.newEvent.name.trim(),
          isValid: () => !this.validation.name.notEmpty,
        },
        type: {
          notEmpty: this.newEvent.type !== null &&
            !this.newEvent.type.trim(),
          isValid: () => !this.validation.type.notEmpty,
        },
        host: {
          notEmpty: this.newEvent.host !== null &&
            !this.newEvent.host.trim(),
          isValid: () => !this.validation.host.notEmpty,
        },
        start: {
          notEmpty: this.newEvent.start !== null &&
            !this.newEvent.start.toString().trim(),
          dateTime: this.newEvent.start !== null &&
            !this.newEvent.start.toString().match(/[0-9]+\-[0-9]+\-[0-9]+T+[0-9]+\:[0-9]{2}/g),
          isValid: () => !this.validation.start.notEmpty &&
            !this.validation.start.dateTime,
        },
        end: {
          notEmpty: this.newEvent.end !== null &&
            !this.newEvent.end.trim(),
          dateTime: this.newEvent.end !== null &&
            !this.newEvent.end.match(/[0-9]+\-[0-9]+\-[0-9]+T+[0-9]+\:[0-9]{2}/g),
          isValid: () => !this.validation.end.notEmpty &&
            !this.validation.end.dateTime,
        },
        guestList: {
          notEmpty: this.newEvent.guestList !== null &&
            !this.newEvent.guestList.trim(),
          isValid: () => !this.validation.guestList.notEmpty,
        },
        location: {
          notEmpty: this.newEvent.location !== null &&
            !this.newEvent.location.trim(),
          isValid: () => !this.validation.location.notEmpty,
        },
        additionalInfo: {
          isValid: () => true,
        },
      };
    },
    isValid() {
      const validation = this.validation;
      return Object.keys(validation).every(key => validation[key].isValid());
    },
  },
  mounted() {
    const locationInput = document.getElementById('location');
    /* eslint-disable no-new */
    new google.maps.places.Autocomplete(locationInput);
  },
  methods: {
    onSubmit() {
      if (!this.isValid) {
        this.formHasError = true;
        return;
      }

      const STORAGE_KEY = 'p1-event-planner-events';
      let events = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!events) {
        events = [this.newEvent];
      } else {
        events.push(this.newEvent);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));

      this.$router.push('event-list');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
