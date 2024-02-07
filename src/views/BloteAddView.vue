<template>
  <div class="add-blotes">
    <!-- <div class="notes"> -->
      <!-- <AddNote /> -->
      <!-- <SingleNote /> -->
    <!-- </div> -->
    <div class="blog">
      <h1>Add the blog and edit with notes later</h1>
      <AddBlog />
    </div>
  </div>
</template>

<script setup>
  // import AddNote from '../components/AddNote.vue';
  // import SingleNote from '../components/SingleNote.vue';
  import AddBlog from '../components/AddBlog.vue';

</script>

<style lang="scss" scoped>
.add-blotes {
  width: 100%;
  
  // display: flex;
  // flex-direction: row;
  // .notes {
  //   width: 50%;
  //   height: 100vh;
  // }
  .blog {
    width: 50%;
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    > h1 {
      color: var(--middle2);
      font-size: 2.5rem;
    }
  }
}
</style>