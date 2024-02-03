<template>
    <button class="add-new-note" @click="toggleAddNote">add a note</button>
    <form class="add-note" @submit.prevent="addNote" v-if="showAddNote">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="noteForm.title" required>
        <label for="note">note</label>
        <textarea name="note" id="note" cols="40" rows="15" v-model="noteForm.note" required></textarea>

        <button>Add</button>
    </form>
</template>
<script setup>
    import { notesRef } from '@/firebase';
    import { addDoc, getDoc, doc } from 'firebase/firestore';
    import { reactive, ref } from 'vue';
    import { v4 as uuidv4 } from 'uuid';
    import { useNoteStore } from '../stores/NoteStore'
    import { useRoute } from 'vue-router';
    import { db } from '@/firebase';


    const route = useRoute()
    const docRef = doc(db, 'blogs', route.params.id)

    const noteStore = useNoteStore()
    const showAddNote = ref(false)
    const noteForm = reactive({
        title: '',
        note: '', 
        id: null
    })
    const blog = ref([])
    
    getDoc(docRef)
        .then((doc) => {
            blog.value = doc.data()
        })

    const addNote = (() => {
        addDoc(notesRef, {
            title: noteForm.title, 
            note: noteForm.note, 
            blogTitle: blog.value.title,
            id: uuidv4()
        })
        .then(() => {
            noteForm.title = "", 
            noteForm.note = "", 
            showAddNote.value = false
            noteStore.fetchNotes()
            //don't fetch the notes with corresponding blog title
        })
    })

    const toggleAddNote = (() => {
        showAddNote.value = !showAddNote.value
    })
</script>
<style lang="scss" scoped>
.add-new-note {
    display: block;
    width: 30%;
    height: 3rem;
    margin: 1rem;
    background: var(--light);
    color: var(--lightest);
    font-weight: bold;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px var(--darkest);
}
.add-new-note:active {
    position: relative;
    top: 2px;
    left: 2px;
}
.add-note {
    margin: 1rem;
    padding: 1rem;
    display: inline-block;
    text-align: center;
    background: var(--middle2);
    color: var(--lightest);
    border-radius: 20px;
    > label {
    display: block;
    font-size: 1.5rem;
    }
    > input {
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    background: var(--lightest);
    color: var(--middle2);
    font-size: 1.5rem;
    }
    > textarea {
    padding: 1rem;
    display: block;
    border: none;
    border-radius: 10px;
    background: var(--lightest);
    color: var(--middle2);
    font-size: 1.2rem;
    }
    > button {
    width: 40%;
    height: 3rem;
    margin: 1rem;
    background: var(--light);
    color: var(--lightest);
    font-weight: bold;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    }
}

</style>