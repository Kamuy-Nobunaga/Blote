<template>
    <form class="edit-blog" @submit.prevent="updateBlog">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="blogForm.title">
        <label for="content">Content</label>
        <textarea name="context" id="context" cols="50" rows="30" v-model="blogForm.content"></textarea>

        <button>Update</button>
    </form>
</template>
<script setup>
    import { db } from '@/firebase';
    import { doc, getDoc, updateDoc } from 'firebase/firestore';
    import { reactive, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()
    const docRef = doc(db, 'blogs', route.params.id)
    const blog = ref({})
    const blogForm = reactive({
        title: '',
        content: '',
    })


    getDoc(docRef)
    .then((doc) => {
        blog.value = doc.data()
        blogForm.title = blog.value.title
        blogForm.content = blog.value.content
    })
    

    
    const updateBlog = (() => {
        updateDoc(docRef, {
            title: blogForm.title, 
            content: blogForm.content, 
        })
        .then(() => {
            router.push({ name: 'blog', params: { id: route.params.id } })
        })
    })



</script>
<style lang="scss" scoped>
    .edit-blog {
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