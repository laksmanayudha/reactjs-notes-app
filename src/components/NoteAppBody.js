import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody({ notes, archievedNotes, addNote, onDelete, onArchive }) {
    return (
        <div className="note-app__body">

            {/* note input */}
            <NoteInput addNote={addNote} />

            {/* note list */}
            <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive}>Catatan Aktif</NoteList>
            <NoteList notes={archievedNotes} onDelete={onDelete} onArchive={onArchive} >Arsip</NoteList>
        </div>
    )
}


export default NoteAppBody;