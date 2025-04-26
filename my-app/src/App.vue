<script setup>
  import Button from './components/Button.vue'
  import OptionsComponent from './components/OptionsComponent.vue'
  const name = "Fulan Bin Fulan"
  const blogPost = '<p style="color:red">Blog Wordpress</p>'
  const idBlog = 'Blog 1'
</script>

<template>
  <Button/>{{ name }}
  
  <h1>Hello Word</h1>
  <OptionsComponent/>
  <CompositionsComponent/>

  <div>
    {{ blogPost }}
  </div>
  <div v-bind:id="idBlog" v-html="blogPost"></div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
