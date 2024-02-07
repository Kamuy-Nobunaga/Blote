<template>
    <div class="blog">
        <h1>{{ blog.title }} 
            <router-link :to="{ name: 'blog-edit', params: { id: id}}" class="material-symbols-outlined">edit</router-link>
            <span @click="deleteBlog" class="material-symbols-outlined">delete_forever</span>
        </h1>
        <p>{{ blog.content }}</p>
    </div>

</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import { doc, getDoc } from 'firebase/firestore';
    import { db } from '@/firebase';
    import { useRoute, useRouter } from 'vue-router'; 
    import { useBlogStore } from '@/stores/BlogStore';
    
    const blogStore = useBlogStore()
    const route = useRoute()
    const router = useRouter()
    const docRef = doc(db, 'blogs', route.params.id)
    const id = route.params.id
    const blog = ref({})

    const deleteBlog = () => {
        blogStore.deleteBlog(id)
        router.push({ name: 'blotes'})
    }

    onMounted(() => {
        getDoc(docRef)
        .then((doc) => {
            blog.value = doc.data()
        })
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