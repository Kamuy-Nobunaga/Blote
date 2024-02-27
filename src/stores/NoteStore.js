import { defineStore } from 'pinia';
import { db, notesRef } from '@/firebase';
import { deleteDoc, getDocs, doc } from 'firebase/firestore'; 
import { addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useBlogStore } from './BlogStore';



export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        notes: [], 
        notesWithCorrespondingTitle: [],
        isAddingOrDeleting: false
    }), 
    getters: {
    }, 
    actions: {
        async fetchNotes() {
            try {
                const snapshot = await getDocs(notesRef);
                this.notes = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                // console.log(snapshot.docs);
            } catch (error) {
                console.log(error.message);
            }        
        }, 
        async fetchNotesWithCorrespondingTitle(id) {
            //to get blog title
            const blogStore = useBlogStore()
            await blogStore.fetchBlogs()
            await blogStore.fetchBlog(id)
            
            this.notesWithCorrespondingTitle = this.notes.filter((note) => {
                return note.blogTitle === blogStore.blog.title
            })
        }, 
        async addNote(noteForm) {
            const blogStore = useBlogStore()
            await addDoc(notesRef, {
                title: noteForm.title, 
                note: noteForm.note, 
                blogTitle: blogStore.blog.title, 
                id: uuidv4()
            })
        }, 
        async deleteNote(id) {
            await deleteDoc(doc(db, 'notes', id))
        }, 
        finishAddingOrDeleting() {
            this.isAddingOrDeleting = !this.isAddingOrDeleting
        }

    
    }
})