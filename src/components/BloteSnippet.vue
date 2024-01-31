<template>
    <div class="blote-snippet" v-for="blog in blogs" :key="blog.title">
        <router-link :to="{ name: 'blog', params: { id: blog.id }}">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.content.substring(0, 200) }}...</p>
        </router-link>
    </div>
</template>
<script setup>
    import { onMounted } from 'vue';
    import { useBlogStore } from '../stores/BlogStore'
    import { storeToRefs } from 'pinia';


    const blogStore = useBlogStore()
    const { blogs } = storeToRefs(blogStore)

    onMounted(() => {
        blogStore.fetchBlogs()
    })

</script>
<style lang="scss" scoped>
    .blote-snippet {
        width: 60%;
        margin: 1rem auto;
        text-align: center;
        border-radius: 20px;
        background: var(--middle2);
        color: var(--lightest);
        > a {
            text-decoration: none;
            color: var(--lightest);
            > h3 {
            font-size: 2rem;
            margin: 0 auto;
            padding-top: 1rem;
            }
            > p {
                font-size: 1rem;
                margin: 0;
                padding: 20px 1rem;
            }
        }
        > a:hover {
            color: var(--middle2);
        }
    }
    .blote-snippet:hover {
        background: var(--lightest);
    }

</style>