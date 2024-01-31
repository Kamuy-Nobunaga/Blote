<template>
  <div class="add-blotes">
    <div class="notes">
      <AddNote />
      <SingleNote />
    </div>
    <div class="blog">
      <AddBlog />
    </div>
  </div>
</template>

<script setup>
  import AddNote from '@/components/AddNote.vue';
  import SingleNote from '../components/SingleNote.vue';
  import AddBlog from '@/components/AddBlog.vue';
</script>

<style lang="scss" scoped>
.add-blotes {
  width: 100%;
  display: flex;
  flex-direction: row;
  .notes {
    width: 50%;
    height: 100vh;
    border: 5px solid var(--darkest);
  }
  .blog {
    width: 50%;
    height: 100vh;
    border: 5px solid var(--middle1);
    text-align: center;
  }
}
</style>