<template>
    <div class="login">
        <form @submit.prevent="signIn">
            <label for="email" class="email">Email</label>
            <input type="text" name="email" id="email" v-model="account.email">
            <label for="password" class="password">Password</label>
            <input type="password" name="password" id="password" v-model="account.password">

            <button>Log in</button>
            <router-link :to="{ name: 'sign up'}">Sign up</router-link>

        </form>
    </div>
</template>
<script setup>
    import { reactive } from 'vue';
    // import { storeToRefs } from 'pinia';
    import { useBlogStore } from '@/stores/BlogStore';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const blogStore = useBlogStore()

    const account = reactive({
        email: '', 
        password: ''
    })
    const auth = getAuth()

    const signIn = (() => {
        signInWithEmailAndPassword(auth, account.email, account.password)
        .then((cred) => {
            console.log('user logged in:', cred.user);
            blogStore.isLogin = true;
            // onAuthStateChanged(auth, (user) => {
            // console.log('user status changed:', user);
            // })
            router.push({ name: 'blotes' })
        })
        .catch((err) => {
            console.log(err.message);
        })

    })


</script>
<style lang="scss" scoped>
    .login {
        width: 50%;
        height: 100vdh;
        margin: 5rem auto;
        background: var(--middle2);
        color: var(--lightest);
        border-radius: 20px;
        > form {
            text-align: center;
            padding: 5rem 0;
            .email, .password {
                display: block;
                font-size: 3rem;
                font-weight: bold;
            }
            #email, #password {
                background: var(--lightest);
                margin-bottom: 1rem;
                width: 50%;
                height: 2rem;
                border: none;
                border-radius: 20px;
                padding: 0.8rem;
                font-size: 2rem;
                color: var(--middle2);
                caret-color: var(--light);
            }
            > button {
                display: block;
                margin: 1.5rem auto;
                width: 20%;
                height: 3.5rem;
                background: var(--lightest);
                color: var(--light);
                border: none;
                border-radius: 20px;
                font-size: 1rem;
                font-weight: bold;
                box-shadow: 5px 5px 10px var(--darkest);
            }
            > a {
                text-decoration: none;
                color: var(--middle1);
            }
            > a:hover {
                font-size: 1.5rem;
                background: var(--lightest);
                color: var(--light);
                border-radius: 20px;
                padding: 10px;
            }
        }
    }
</style>