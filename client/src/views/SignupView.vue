<template>
  <div class="signup-wrapper">
    <HeaderView></HeaderView>
    <div class="signup">
      <form>
        <h1>Signup</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          v-on:click.prevent="loginForm()"
        >
          Submit
        </button>
      </form>
    </div>
    <FooterView></FooterView>
  </div>
</template>
<style>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
</style>
<script>
import axios from 'axios';
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';

export default {
  name: 'signup',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async loginForm() {
      await axios.post('http://localhost:3000/api/v1/users/users', {
        email: this.email,
        password: this.password,
      });

      this.$router.push('/login');
    },
  },
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
