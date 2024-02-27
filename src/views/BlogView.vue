<template>
    <div class="blog">
        <h1>{{ blog.title }} 
            <router-link :to="{ name: 'blogEdit', params: { id: id}}" class="material-symbols-outlined">edit</router-link>
            <span @click="deleteBlog" class="material-symbols-outlined">delete_forever</span>
        </h1>
        <p>{{ blog.content }}</p>
    </div>

</template>
<script setup>
    import { onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router'; 
    import { useBlogStore } from '@/stores/BlogStore';
    import { storeToRefs } from 'pinia';

    const blogStore = useBlogStore()
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id
    const { blog } = storeToRefs(blogStore)
    
    const deleteBlog = () => {
        blogStore.deleteBlog(id)
        blogStore.fetchBlogs()
        router.push({ name: 'blotes'})
    }

    onMounted(() => {
        blogStore.fetchBlog(id)
    })

</script>
<style lang="scss" scoped>
.blog {
    text-align: center;
    margin: 0 auto;
    width: 80%;
    > h1 {
        font-size: 3rem;
        color: var(--darkest);
        > a, > span {
            text-decoration: none;
            color: var(--light);
            opacity: 0.4;
        }
        > a:hover, > span:hover {
            opacity: 1;
        }
    }
    > p{
        font-size: 1.5rem;
        line-height: 3rem;
        color: var(--darkest);
    }
}
</style>