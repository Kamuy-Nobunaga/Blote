import { defineStore } from 'pinia';
import { db, blogsRef } from '@/firebase';
import { deleteDoc, getDocs, doc } from 'firebase/firestore';
import { createPinia } from "pinia";

const pinia = createPinia();

export default pinia;

export const useBlogStore = defineStore('blogStore', {
    state: () => ({
        blogs: [], 
        isLogin: false
    }), 
    getters: {

    }, 
    actions: {
        async fetchBlogs() {
            try {
                const snapshot = await getDocs(blogsRef);
                this.blogs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            } catch (error) {
                console.log(error.message);
            }        
        }, 
        async fetchBlog() {

        },
        async deleteBlog(id) {
            await deleteDoc(doc(db, 'blogs', id))
        }
    
    }
})
