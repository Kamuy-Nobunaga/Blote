<template>
  <div class="add-blotes">
    <div class="blog">
      <h1>Add the blog</h1>
      <h2>and edit with notes later</h2>
      <AddBlog />
    </div>
  </div>
</template>

<script setup>
  import AddBlog from '../components/AddBlog.vue';

</script>

<style lang="scss" scoped>
.add-blotes {
  width: 100%;
    .blog {
    width: 50%;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    > h1 {
      color: var(--middle2);
      font-size: 3rem;
    }
    > h2 {
      color: var(--middle2);
      font-size: 1.5rem;
    }

  }
}
</style>