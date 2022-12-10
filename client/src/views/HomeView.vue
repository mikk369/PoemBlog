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
              <router-link class="router-styles" :to="{params: {id: post._id}, name: 'poemview'}" >
              <div class="cards"> 
                <h4>
                  <b>{{ post.title }}</b>
                </h4>
                <p class="lower-paragraph">
                  {{ post.text }}
                </p>
              </div>
            </router-link>
            <div class="author-wrapper">
              <div class="author-div">
                {{post.author}}
              </div>
              <div class="createdAt">
                {{post.createdAt}}
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
.router-styles{
  text-decoration: none; 
  color: inherit;
}
.news-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
}

.paragraph-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  overflow: hidden;
}

.cards {
  padding: 2px 16px;
  height: 120px;
}

.lower-paragraph {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.author-wrapper{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  
}
.author-div{
  padding: 9px;
}
.createdAt{
  padding: 9px;
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
    };
  },

  async created() {
    const response = await axios.get('http://localhost:3000/api/v1/poems/');
    this.posts = response.data.data.poems;
    console.log(response.data.data.poems);
  },
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
