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

      <!-- Landingpage content  -->
      <div class="main-content-wrapper">
        <div class="main-content">
          <div class="paragraph-card">
            <div class="cards">
              <h4><b>Poem heading</b></h4>
              <p class="lower-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                dolorem expedita magni consequuntur, error debitis suscipit
                excepturi fugiat, voluptatem aliquam facere blanditiis ipsum
                voluptas reiciendis, fugit ducimus inventore? Dicta, impedit.
              </p>
            </div>
          </div>
          <div class="paragraph-card">
            <div class="cards">
              <h4><b>Poem heading</b></h4>
              <p class="lower-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                dolorem expedita magni consequuntur, error debitis suscipit
                excepturi fugiat, voluptatem aliquam facere blanditiis ipsum
                voluptas reiciendis, fugit ducimus inventore? Dicta,
                impedit.Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Nobis dolorem expedita magni consequuntur, error debitis
                suscipit excepturi fugiat, voluptatem aliquam facere blanditiis
                ipsum voluptas reiciendis, fugit ducimus inventore? Dicta,
                impedit.
              </p>
            </div>
          </div>
          <div class="paragraph-card">
            <div class="cards">
              <h4><b>Poem heading</b></h4>
              <p class="lower-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                dolorem expedita magni consequuntur, error debitis suscipit
                excepturi fugiat, voluptatem aliquam facere blanditiis ipsum
                voluptas reiciendis, fugit ducimus inventore? Dicta, impedit.
              </p>
            </div>
          </div>
          <div class="paragraph-card">
            <div class="cards">
              <h4><b>Poem heading</b></h4>
              <p class="lower-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                dolorem expedita magni consequuntur, error debitis suscipit
                excepturi fugiat, voluptatem aliquam facere blanditiis ipsum
                voluptas reiciendis, fugit ducimus inventore? Dicta,
                impedit.Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Nobis dolorem expedita magni consequuntur, error debitis
                suscipit excepturi fugiat, voluptatem aliquam facere blanditiis
                ipsum voluptas reiciendis, fugit ducimus inventore? Dicta,
                impedit.
              </p>
            </div>
          </div>
          <div class="paragraph-card">
            <div class="cards">
              <h4><b>Poem heading</b></h4>
              <p class="lower-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                dolorem expedita magni consequuntur, error debitis suscipit
                excepturi fugiat, voluptatem aliquam facere blanditiis ipsum
                voluptas reiciendis, fugit ducimus inventore? Dicta, impedit.
              </p>
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

.main-content-wrapper {
  margin: 30px;
}

.main-content {
  display: grid;
  padding: 3px;
  gap: 9px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 150px);
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<script>
import axios from 'axios';
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';
export default {
  name: 'HomeView',

  components: {
    HeaderView,
    FooterView,
  },
};
</script>
