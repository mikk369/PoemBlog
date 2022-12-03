<template>
  <div class="login-wrapper">
    <HeaderView></HeaderView>
    <h1 v-if="user">{{ user.email }}</h1>
    <div class="login">
      <form>
        <h1>Login</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="emailForm"
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
            id="passwordForm"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          v-on:click.prevent="submitLogin"
        >
          Submit
        </button>
      </form>
    </div>
    <FooterView></FooterView>
  </div>
</template>
<style>
.login {
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
  name: 'loginview',
  data() {
    return {
      user: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async submitLogin() {
      const response = await axios.post(
        'http://localhost:3000/api/v1/users/sessions',
        {
          email: this.email,
          password: this.password,
        }
      );
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.data.user.email);
      // console.log(response.data.data.email);
      this.$router.push('/');
    },
  },
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
