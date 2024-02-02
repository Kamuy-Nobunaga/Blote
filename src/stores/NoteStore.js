import { defineStore } from 'pinia';
import { db, notesRef } from '@/firebase';
import { deleteDoc, getDocs, doc } from 'firebase/firestore';


export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        notes: [], 
    }), 
    getters: {

    }, 
    actions: {
        async fetchNotes() {
            try {
                const snapshot = await getDocs(notesRef);
                this.notes = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                console.log(snapshot.docs);
            } catch (error) {
                console.log(error.message);
            }        
        }, 
        async deleteNote(id) {
            await deleteDoc(doc(db, 'notes', id))
        }
    
    }
})