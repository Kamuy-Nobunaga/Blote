<template>
    <div class="login">
        <form @submit.prevent="signIn">
            <label for="email" class="email">Email</label>
            <input type="text" name="email" id="email" v-model="account.email">
            <label for="password" class="password">Password</label>
            <input type="password" name="password" id="password" v-model="account.password">

            <button type="submit">Log in</button>
            <button type="button" @click="goToSignup">Sign up</button>

        </form>
    </div>
</template>
<script setup>
    import { reactive } from 'vue';
    // import { storeToRefs } from 'pinia';
    import { useBlogStore } from '@/stores/BlogStore';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const blogStore = useBlogStore()

    const account = reactive({
        email: '', 
        password: ''
    })

    const signIn = (() => {
        blogStore.signIn(account)
        router.push({ name: 'blotes' })
    })

    const goToSignup = (() => {
        router.push({ name: 'signUp'})
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
                cursor: pointer;
            }
            > button[type='button'] {
                color: var(--middle1);
                background: var(--dark);
                box-shadow: none;
            }
            > button[type='button']:hover {
                font-size: 1.5rem;
                background: var(--lightest);
                color: var(--light);
                border-radius: 20px;
                padding: 10px;
            }
        }
    }
</style>