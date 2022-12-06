<template>
  <div class="about">
    <HeaderView></HeaderView>
    <div class="poem-wrapper">
      <div class="addpoem">
        <form>
          <div class=" mb-3" >
              <label for="exampleFormControlInput1" class="form-label"
                >Poem title</label
              >
              <input
                v-model="title"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Poem title"
              />
              <label for="exampleFormControlInput1" class="form-label"
                >Poem author</label
              >
              <input
                v-model="author"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Poem author"
              />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Insert poem</label
            >
            <textarea
              v-model="text"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="15" 
            ></textarea>
          </div>
          <button
            @click.prevent="addPost()"
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <FooterView></FooterView>
  </div>
</template>
<style>
.poem-wrapper {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addpoem {
  width: 300px;
}
textarea{
  height: 271px;
}
</style>
<script>
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
import axios from 'axios';
export default {
  name: 'addpoems',
  data() {
    return {
      title: '',
      author: "",
      text: '',
    };
  },
  methods: {
    async addPost() {
      await axios.post('http://localhost:3000/api/v1/poems', {
        title: this.title,
        author: this.author,
        text: this.text,
        headers: {
          Cookie: 'jwt',
        },
      });
      this.title = '';
      this.author= '',
      this.text = '';
    },
  },
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
