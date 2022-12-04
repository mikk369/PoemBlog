<template>
  <div class="header-wrap">
    <nav class="navbar navbar-expand-lg py-4">
      <div class="container-fluid">
        <h1>PoemWebsite</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button>
                <router-link to="/">Home</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button v-if="isLogged">
                <router-link to="/addpoems">Add Poem</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button v-if="!isLogged">
                <router-link to="/signup" v-if="!isLogged">Signup</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button v-if="!isLogged">
                <router-link to="/login">Login</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button v-if="isLogged" @click="loggedOut">Logout</button>
            </li>
          </ul>
          <h1 v-if="isLogged">{{ userName() }}</h1>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.header-wrap {
  background-color: aliceblue;
}
.navbar-collapse {
  flex-direction: row-reverse;
}

.nav-item button {
  margin: 0 15px;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
}
</style>
<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      isLogged: this.checkIfAuthenticated(),
    };
  },
  methods: {
    //if token then iseLogged is true else false
    checkIfAuthenticated() {
      let token = localStorage.getItem('token');
      if (token) {
        return true;
      } else {
        return false;
      }
    },
    loggedOut() {
      try {
        // foreach trough the key where value is token and remove it
        let keysToRemove = ['token', 'user'];
        keysToRemove.forEach((key) => {
          localStorage.removeItem(key);
        });
        this.$router.push('/');
        window.location.reload();
      } catch (err) {
        alert(err.response.data.message);
      }
    },
    userName() {
      let user = localStorage.getItem('user');
      return user;
    },
  },
};
</script>
