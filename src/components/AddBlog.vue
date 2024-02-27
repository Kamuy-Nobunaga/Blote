<template>
    <form class="add-blog" @submit.prevent="addABlog">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="blogForm.title">

        <button>Add the blote</button>
    </form>
</template>
<script setup>
  import { useBlogStore } from '@/stores/BlogStore';
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const blogStore = useBlogStore()
  const blogForm = reactive({
    title: '',
    content: '',
    id: null
  })

  const addABlog = (() => {
    blogStore.addBlog(blogForm)
    blogForm.title = "" 
    blogForm.content = "" 
    router.push({name: 'blotes'})
  })

</script>
<style lang="scss" scoped>
    .add-blog {
      margin-top: 5rem;
      > label {
        display: block;
        color: var(--light);
        font-size: 2rem;
      }
      > input {
        width: 90%;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        background: var(--middle1);
        color: var(--lightest);
        font-size: 1.5rem;

      }
      > textarea {
        width: 90%;
        margin: 0 auto;
        padding: 1rem;
        display: block;
        border: none;
        border-radius: 10px;
        background: var(--middle1);
        color: var(--lightest);
        font-size: 1.5rem;

      }
      > input:focus, > textarea:focus {
        outline: none;
        caret-color: var(--lightest);
      }
      > button {
        width: 40%;
        height: 3rem;
        margin: 1rem;
        background: var(--light);
        color: var(--lightest);
        font-weight: bold;
        font-size: 2rem;
        border: none;
        border-radius: 10px;

      }
    }
    
</style>