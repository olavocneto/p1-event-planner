<template>
  <router-view></router-view>
</template>

<script>
import Hello from './components/Hello';
import SignUp from './components/SignUp';

export default {
  name: 'app',
  components: {
    Hello,
    SignUp,
  },
};
</script>

<style>
</style>
