import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ id, title, body, createdAt, onDelete, archived, onArchive }) {
    return (
        <div className="note-item">
            {/* item content */}
            <NoteItemContent title={title} body={body} createdAt={createdAt} />

            {/* item action */}
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
            </div>
        </div>
    )
}

export default NoteItem;