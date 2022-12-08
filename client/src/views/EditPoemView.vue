<template>
    <div class="about">
      <HeaderView></HeaderView>
      <div class="poem-wrapper">
        <div class="edit-poem">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Poem title</label>
              <input v-model="title" type="text" class="form-control title-input" id="exampleFormControlInput1"
                placeholder="Poem title"/>
              <label for="exampleFormControlInput1" class="poem-author-label">Poem author</label>
              <input v-model="author" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Poem author"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Insert poem</label>
              <textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
            </div>
            <button @click.prevent="updatePost()" type="submit" class="btn btn-warning">
              Update
            </button>
          </form>
        </div>
      </div>
      <FooterView></FooterView>
    </div>
  </template>
  <style>
  .poem-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:70px;
  }
  .title-input{
    margin-bottom: 3px;
  }
  .poem-author-label{
    margin-bottom: 8px;
  }
  .edit-poem {
    width: 300px;
    justify-content: center;
    align-items: center;
  }
  
  textarea {
    height: 265px;
  }
  </style>
  <script>
  import HeaderView from './HeaderView.vue';
  import FooterView from './FooterView.vue';
  import axios from 'axios';
  export default {
    name: 'edit-poems',
    data() {
      return {
            title: '',
            author:'',
            text: '',
      };
    },
    
    async created(){
    const response = await axios.get('http://localhost:3000/api/v1/poems/' + this.$route.params.id)
        this.title = response.data.data.poem.title
        this.author = response.data.data.poem.author
        this.text = response.data.data.poem.text
        
        },
    methods: {
      async updatePost() {
        await axios.patch('http://localhost:3000/api/v1/poems/'+ this.$route.params.id, {
          title: this.title,
          author: this.author,
          text: this.text,
        });
        this.$router.push({ name: "home" });
      },
    },
    components: {
      HeaderView,
      FooterView,
    },
  };
  </script>
  