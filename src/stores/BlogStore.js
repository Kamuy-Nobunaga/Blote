import { defineStore } from 'pinia';
import { db, blogsRef } from '@/firebase';
import { deleteDoc, getDocs, getDoc, doc, updateDoc, addDoc } from 'firebase/firestore';
import { createPinia } from "pinia";
import { v4 as uuidv4 } from 'uuid';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'


const pinia = createPinia();

export default pinia;

export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        blogs: [], 
        blog: {},
        username: ''
    }), 
    getters: {
    }, 
    actions: { 
        async signIn(account) {
            const auth = getAuth()
            try {
                const cred = await signInWithEmailAndPassword(auth, account.email, account.password)

                console.log('user logged in:', cred.user);
                localStorage.setItem('user', account.email)

                const isLogin = localStorage.getItem('user')
                this.username = isLogin
                console.log(this.username);
            } catch (err) {
                console.error(err.message)
            }
        }, 
        async userSignup(account) {
            try {
                const auth = getAuth()
                createUserWithEmailAndPassword(auth, account.email, account.password)
                console.log('successfully registered');
                localStorage.removeItem('user')
            } catch(err) {
                console.log(err.message);
            }
        }, 
        async userSignout() {
            try {
                const auth = getAuth()
                signOut(auth)
                console.log('the user signed out');
                localStorage.removeItem('user')
            } catch(err) {
                console.log(err.message);
            }
        }, 
        async fetchBlogs() {
            try {
                const snapshot = await getDocs(blogsRef);
                this.blogs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            } catch (error) {
                console.log(error.message);
            }        
        }, 
        async fetchBlog(id) {
            const docRef = doc(db, 'blogs', id)
            const document = await getDoc(docRef)
            this.blog = document.data()
        },
        async updateBlog(id) {
            const docRef = doc(db, 'blogs', id)
            await updateDoc(docRef, {
                title: this.blog.title, 
                content: this.blog.content, 
            })
    
        },
        async addBlog(blogForm) {
            await addDoc(blogsRef, {
                title: blogForm.title, 
                content: blogForm.content, 
                id: uuidv4()
            })
        },
        async deleteBlog(id) {
            await deleteDoc(doc(db, 'blogs', id))
        }, 
        setLoginState() {
            const isLogin = localStorage.getItem('user')
            this.username = isLogin
        }, 

    
    }
})
