import React from "react";
import NoteItem from './NoteItem';

function NoteList({ children, notes, onDelete, onArchive }) {

    return (
        <>
            <h2>{children}</h2>
            {
                notes.length === 0 ? 
                <p className="notes-list__empty-message">Tidak ada catatan</p>
                :
                <div className="notes-list">
                    {
                        notes.map(note => (
                            <NoteItem 
                                key={note.id}
                                {...note}
                                onDelete={onDelete}
                                onArchive={onArchive}
                            />
                        ))
                    }
                </div>
            }
        </>
    )
}

export default NoteList;