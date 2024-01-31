<template>
    <nav class='navbar'>
        <router-link to="/">Blotes</router-link>
        <button @click="userSignout">Logout</button>
    </nav>
</template>
<script setup>
    import { useBlogStore } from '@/stores/BlogStore';
    import { getAuth, signOut } from 'firebase/auth'

    const auth = getAuth()
    const blogStore = useBlogStore()

    const userSignout = (() => {
        signOut(auth)
        .then(() => {
            console.log('the user signed out');
            blogStore.isLogin = false
        })
        .catch((err) => {
            console.log(err.message);
        })
    }) 
        

</script>
<style lang="scss" scoped>
    nav {
            width: 100%;
            background: var(--middle2);
            display: inline-block;
            // justify-content: space-between;
            height: 5rem;
            padding: 1rem 3rem;
            position: relative;
        > a {
            display: inline-block;
            font-size: 3rem;
            color: var(--lightest);
            text-decoration: none;
        }
        > button {
            background: var(--middle2);
            border: none;
            font-size: 1.5rem;
            color: var(--lightest);
            position: absolute;
            top: 40px;
            right: 100px;
        }
        > button:hover {
            background: var(--lightest);
            color: var(--middle2);
            border-radius: 20px;
        }
    }
</style>