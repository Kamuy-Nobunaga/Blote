<template>
    <div class="blotes-view">
        <BloteSnippet />
        <button v-if="isLogin"><router-link to="/add-blote">Add blote</router-link></button>
    </div>
</template>
<script setup>
    import BloteSnippet from '@/components/BloteSnippet.vue';
    import { storeToRefs } from 'pinia';
    import { useBlogStore } from '@/stores/BlogStore';

    const blogStore = useBlogStore()
    const { isLogin } = storeToRefs(blogStore)
    blogStore.fetchBlogs

</script>
<style lang="scss" scoped>
.blotes-view {
    > button {
        width: 5rem;
        aspect-ratio: 1;
        background: var(--middle2);
        border: none;
        border-radius: 50%;
        box-shadow: 2px 2px 5px var(--darkest);
        position: fixed;
        bottom: 30px;
        right: 30px;
        > a {
        text-decoration: none;
        color: var(--lightest);
        font-size: 1.5rem;
        }
    }
    > button:hover {
        bottom: 32px;
        right: 32px;
    }   
}

</style>