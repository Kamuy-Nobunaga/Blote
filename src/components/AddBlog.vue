<template>
    <form class="add-blog" @submit.prevent="addBlog">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="blogForm.title">
        <label for="content">Content</label>
        <textarea name="context" id="context" cols="50" rows="30" v-model="blogForm.content"></textarea>

        <button>Add the blote</button>
    </form>
</template>
<script setup>
  import { blogsRef } from '@/firebase';
  import { addDoc } from 'firebase/firestore';
  import { v4 as uuidv4 } from 'uuid';
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const blogForm = reactive({
    title: '',
    content: '',
    id: null
  })

  const addBlog = (() => {
        addDoc(blogsRef, {
            title: blogForm.title, 
            content: blogForm.content, 
            id: uuidv4()
        })
        .then(() => {
            blogForm.title = "" 
            blogForm.content = "" 
            router.push({name: 'blotes'})
        })
    })

</script>
<style lang="scss" scoped>
    .add-blog {
      > label {
        display: block;
        color: var(--light);
        font-size: 2rem;
      }
      > input {
        width: 90%;
        padding: 0.5rem;
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
        font-size: 1.2rem;

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