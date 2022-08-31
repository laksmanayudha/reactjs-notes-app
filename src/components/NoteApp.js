import React from "react";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            searchKeyword: ""
        }

        this.addNote = this.addNote.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onArchive = this.onArchive.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    addNote({title, body}) {

        let note = {
            id: +new Date(),
            title, 
            body,
            createdAt: new Date(),
            archived: false
        }

        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, note]
            }
        })
    }

    onDelete(id) {
        this.setState(prevState => {
            return {
                notes: prevState.notes.filter(note => note.id !== id)
            }
        })
    }

    onArchive(id) {
        let newNotes = this.state.notes.map( note => {
            if (note.id === id){
                note.archived = !note.archived
            }

            return note;
        })

        this.setState(() => ({ notes: newNotes }))
    }

    onSearch(keywords) {
        this.setState(() => {
            return {
                searchKeyword: keywords
            }
        })
    }
    
    render() {

        const activeNotes = this.state.notes.filter(note => note.archived === false && note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()))
        const archivedNotes = this.state.notes.filter(note => note.archived === true && note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()))
        
        return (
            <>
                {/* header */}
                <NoteAppHeader onSearch={this.onSearch} />

                {/* body */}
                <NoteAppBody 
                    notes={activeNotes} 
                    archievedNotes={archivedNotes} 
                    addNote={this.addNote}
                    onDelete={this.onDelete}
                    onArchive={this.onArchive}
                />
            </>
        )
    }
}

export default NoteApp;