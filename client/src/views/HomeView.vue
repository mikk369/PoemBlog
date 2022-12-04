<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PoemBlog</title>
    </head>
    <body>
      <!-- navbar  -->
      <HeaderView></HeaderView>
      <div class="main-container">
        <div class="grid-wrapper">
          <div class="news-main">
            <div class="paragraph-card" v-for="post in posts" :key="post._id">
              <div class="cards">
                <h4>
                  <b>{{ post.title }}</b>
                </h4>
                <p class="lower-paragraph">
                  {{ post.text }}
                </p>
                <div class="button-wrapper">
                  <button
                    v-if="isLogged"
                    @click="deletePost(post._id)"
                    type="button"
                    class="delete-button btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterView></FooterView>
    </body>
  </html>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
.main-container {
  height: 100vh;
}
.grid-wrapper {
  margin-top: 40px;
  padding: 30px;
}
.button-wrapper {
  text-align: right;
  padding: 3px;
}

.news-main {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;

  grid-gap: 1rem;
}

.paragraph-card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  overflow: hidden;
}

.cards {
  padding: 2px 16px;
}
.lower-paragraph {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

<script>
import axios from 'axios';
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
export default {
  name: 'HomeView',
  data() {
    return {
      posts: [],
      isLogged: this.checkIfAuthenticated(),
    };
  },

  async created() {
    const response = await axios.get('http://localhost:3000/api/v1/poems');
    this.posts = response.data.data.poems;
  },
  methods: {
    deletePost(id) {
      axios.delete('http://localhost:3000/api/v1/poems/' + id).then(() => {
        window.location.reload();
      });
    },
    checkIfAuthenticated() {
      let token = localStorage.getItem('token');
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },

  components: {
    HeaderView,
    FooterView,
  },
};
</script>
