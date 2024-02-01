<template>
    <div class="edit-blotes">
      <div class="notes">
        <AddNote />
        <SingleNote />
      </div>
      <div class="blog">
        <EditBlog />
      </div>
    </div>
  </template>
  
  <script setup>
    import AddNote from '@/components/AddNote.vue';
    import SingleNote from '../components/SingleNote.vue';
    import EditBlog from '@/components/EditBlog.vue';

  </script>
  
  <style lang="scss" scoped>
  .edit-blotes {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    .notes {
      width: 50%;
      height: 100vh;
      // border: 5px solid var(--darkest);
    }
    .blog {
      width: 50%;
      height: 100vh;
      // border: 5px solid var(--middle1);
      text-align: center;
    }
  }
  </style>