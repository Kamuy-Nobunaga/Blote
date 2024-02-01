<template>
  <div class="home">
    <!-- <BlotesView v-if="isLogin" /> -->
    <LogIn />
    
  </div>
</template>

<script setup>
  import LogIn from '@/components/LogIn.vue';

  // import BlotesView from './BlotesView.vue';
  // import { storeToRefs } from 'pinia';
  // import { useBlogStore } from '@/stores/BlogStore';
  
  // const blogStore = useBlogStore()
  // const { isLogin } = storeToRefs(blogStore)
  
</script>

<style lang="scss" scoped>
</style>
