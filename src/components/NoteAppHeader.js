import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ onSearch }) {
    return (
        <div className="note-app__header">
            <h1>noted.id</h1>

            {/* searching */}
            <NoteSearch onSearch={onSearch} />
        </div>
    )
}

export default NoteAppHeader;