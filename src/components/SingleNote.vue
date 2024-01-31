<template>
    <div class="all-notes">
        <div class="note" v-for="note in notes" :key="note.id">
            <h5>{{ note.title }}</h5>
            <p>{{ note.note }}</p>

            <button @click="deleteNote(note.id)">delete</button>
        </div>
    </div>
    <!-- <Vue3DraggableResizable 
        :draggable="true"
        v-model:x="drag.x"
        v-model:y="drag.y"
        v-model:w="drag.w"
        v-model:h="drag.h"
        v-model:active="active"
    >Test</Vue3DraggableResizable> -->
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useNoteStore } from '../stores/NoteStore'
// import Vue3DraggableResizable from 'vue3-draggable-resizable'

    const noteStore = useNoteStore()
    const { notes } = storeToRefs(noteStore)
    // const drag = ref({
    //     x: 100,
    //     y: 100,
    //     h: 100,
    //     w: 100,
    //     active: false
    // })
    
    const deleteNote = ((id) => {
        noteStore.deleteNote(id)
        noteStore.fetchNotes()
    })

    noteStore.fetchNotes()
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