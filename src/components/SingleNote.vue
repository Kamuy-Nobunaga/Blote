<template>
    <div class="all-notes">
        <div class="note" v-for="note in noteStore.notesWithCorrespondingTitle" :key="note.id">
            <h5>{{ note.title }}</h5>
            <p>{{ note.note }}</p>
            <p>{{ note.blogTitle }}</p>

            <button @click="deleteNote(note.id)">delete</button>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useNoteStore } from '../stores/NoteStore';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const noteStore = useNoteStore()    

    onMounted(() => {
        noteStore.fetchNotes()
        noteStore.fetchNotesWithCorrespondingTitle(route.params.id)
    })

    const deleteNote = ((id) => {
        noteStore.deleteNote(id)
        noteStore.fetchNotesWithCorrespondingTitle(route.params.id)
        noteStore.fetchNotes()
    })

</script>
<style lang="scss" scoped>
.all-notes {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    .move {
            background: var(--middle2);
            color: var(--darkest);
            width: 5rem;
            aspect-ratio: 1;
        }
    .note {
        margin: 1rem;
        padding: 1rem;
        text-align: center;
        background: var(--middle2);
        color: var(--lightest);
        border-radius: 20px;
        position: relative;
        > h5 {
            margin: 0;
            font-size: 1.5rem;
        }
        > button {
            background: var(--lightest);
            color: var(--middle2);
            border: none;
            border-radius: 20px;
            opacity: 0.3;
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
        > button:hover {
            opacity: 1;
        }
    }
}


</style>