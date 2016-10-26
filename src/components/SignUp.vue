<template>
  <section class="hero is-fullheight">
    <section class="hero-body signup">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="heading">
              <h1 class="title">Project 1: Meet-Up Event Planner</h1>
              <h2 class="subtitle">
                web application that allows the user to establish a meet-up event
              </h2>
            </div>

            <form v-on:submit.prevent="onSubmit" name="signUpForm">
              <label for="name" class="label"></label>
              <p class="control has-icon has-icon-right">
                <input type="text" v-model="newUser.name" class="input" v-on:blur="onBlurInput('name')" v-bind:class="{ 'is-danger': !validation.name.isValid() }" id="name" name="name" title="Name" autofocus required minlength="2" maxlength="256" placeholder="Name" autocomplete="name" spellcheck="false">
                <i v-show="!validation.name.isValid()" class="fa fa-warning"></i>
                <span v-show="validation.name.notEmpty" class="help is-danger">Value is required and can't be empty</span>
                <span v-show="validation.name.minLength" class="help is-danger">The input is less than 2 characters long</span>
                <span v-show="validation.name.maxLength" class="help is-danger">The input is more than 20 characters long</span>

              </p>

              <label for="name" class="label"></label>
              <p class="control has-icon has-icon-right">
                <input type="email" v-model="newUser.email" class="input" v-on:blur="onBlurInput('email')" v-bind:class="{ 'is-danger': !validation.email.isValid() }" id="email" name="email" title="Email" required placeholder="Email" autocomplete="email" spellcheck="false">
                <i v-show="!validation.email.isValid()" class="fa fa-warning"></i>
                <span v-show="validation.email.notEmpty" class="help is-danger">Value is required and can't be empty</span>
                <span v-show="validation.email.emailAddress" class="help is-danger">The input is not a valid email address. Use the basic format local-part@hostname</span>
              </p>

              <label for="name" class="label"></label>
              <p class="control has-icon has-icon-right">
                <input type="password" v-model="newUser.password" class="input" v-on:blur="onBlurInput('password')" v-bind:class="{'is-danger': !validation.password.isValid()}" id="password" name="password" title="Password" minlength="6" maxlength="100" required placeholder="Password">
                <i v-show="!validation.password.isValid()" class="fa fa-warning"></i>
                <span v-show="validation.password.notEmpty" class="help is-danger">Value is required and can't be empty</span>
                <span v-show="validation.password.minLength" class="help is-danger">The input is less than 6 characters long</span>
                <span v-show="validation.password.maxLength" class="help is-danger">The input is more than 100 characters long</span>
                <span v-show="validation.password.notHasSymbol" class="help is-danger">Missing a symbol (!, @, #, $, %, ^, &, *)</span>
                <span v-show="validation.password.notHasNumber" class="help is-danger">Missing a number</span>
                <span v-show="validation.password.notHasLowercase" class="help is-danger">Missing a lowercase letter</span>
                <span v-show="validation.password.notHasUppercase" class="help is-danger">Missing an uppercase letter</span>
                <span v-show="validation.password.hasIllegalCharacter" class="help is-danger">Includes illegal character</span>
              </p>

              <label for="bio" class="label"></label>
              <p class="control">
                <textarea v-model="newUser.bio" class="textarea" id="bio" name="bio" title="Bio" placeholder="Bio"></textarea>
              </p>

              <p class="control">
                <button class="button is-primary">Sign up</button>
              </p>
            </form>

            <div class="notification is-warning" v-if="formHasError">
              The form is invalid
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      newUser: {
        name: null,
        email: null,
        password: null,
        bio: null,
      },
      formHasError: false,
    };
  },
  computed: {
    validation() {
      return {
        name: {
          notEmpty: this.newUser.name !== null &&
            !this.newUser.name.trim(),
          minLength: this.newUser.name !== null &&
            this.newUser.name.length < 2,
          maxLength: this.newUser.name !== null &&
            this.newUser.name.length > 20,
          isValid: () => !this.validation.name.notEmpty &&
            !this.validation.name.minLength &&
            !this.validation.name.maxLength,
        },
        email: {
          notEmpty: this.newUser.email !== null &&
            !this.newUser.email.trim(),
          emailAddress: this.newUser.email !== null &&
            !this.newUser.email.match(/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm),
          isValid: () => !this.validation.email.notEmpty &&
            !this.validation.email.emailAddress,
        },
        password: {
          notEmpty: this.newUser.password !== null &&
            !this.newUser.password.trim(),
          minLength: this.newUser.password !== null &&
            this.newUser.password.length < 6,
          maxLength: this.newUser.password !== null &&
            this.newUser.password.length > 100,
          notHasSymbol: this.newUser.password !== null &&
            !this.newUser.password.match(/[\!\@\#\$\%\^\&\*]/g),
          notHasNumber: this.newUser.password !== null &&
            !this.newUser.password.match(/\d/g),
          notHasLowercase: this.newUser.password !== null &&
            !this.newUser.password.match(/[a-z]/g),
          notHasUppercase: this.newUser.password !== null &&
            !this.newUser.password.match(/[A-Z]/g),
          hasIllegalCharacter: this.newUser.password !== null &&
            this.newUser.password.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g),
          isValid: () => !this.validation.password.notEmpty &&
            !this.validation.password.minLength &&
            !this.validation.password.maxLength &&
            !this.validation.password.notHasSymbol &&
            !this.validation.password.notHasNumber &&
            !this.validation.password.notHasUppercase &&
            !this.validation.password.hasIllegalCharacter,
        },
      };
    },
    isValid() {
      const validation = this.validation;
      return Object.keys(validation).every(key => validation[key].isValid());
    },
  },
  methods: {
    onSubmit() {
      if (!this.isValid) {
        this.formHasError = true;
        return;
      }

      const STORAGE_KEY = 'p1-event-planner';
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.newUser));

      this.$router.push('event-list');
    },
    onBlurInput(field) {
      if (this.newUser[field] === null) {
        this.newUser[field] = '';
      }

      this.validation[field].isValid();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
