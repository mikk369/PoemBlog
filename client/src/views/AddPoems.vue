<template>
  <div class="about">
    <HeaderView></HeaderView>
    <div class="poem-wrapper">
      <div class="addpoem">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Poem title</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Poem title"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Insert poem</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="15"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
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
}
.addpoem {
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
</style>
<script>
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';

export default {
  name: 'addpoems',
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
