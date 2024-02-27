<template>
    <form class="edit-blog" @submit.prevent="updateBlog">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="blog.title">
        <label for="content">Content</label>
        <textarea name="context" id="context" cols="50" rows="30" v-model="blog.content"></textarea>

        <button>Update</button>
    </form>
</template>
<script setup>
    import { onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useBlogStore } from '@/stores/BlogStore';
    import { storeToRefs } from 'pinia';


    const route = useRoute()
    const router = useRouter()
    const blogStore = useBlogStore()
    const { blog } = storeToRefs(blogStore)

    onMounted(() => {
      blogStore.fetchBlog(route.params.id)
    })    
    
    const updateBlog = (() => {
      blogStore.updateBlog(route.params.id)
      router.push({ name: 'blog', params: { id: route.params.id } })
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