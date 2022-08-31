import React from "react";

class NoteInput extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChange(event) {
        this.setState((prevState) => {
            return event.target.value.length <= 50 ? { title: event.target.value } : { title: prevState.title }
        })
    }

    onBodyChange(event) {
        this.setState(() => {
            return { body: event.target.value }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>

                <form onSubmit={this.onSubmitHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.title.length}</p>
                    <input className="note-input__title" type='text' placeholder="Ini adalah judul ..." onChange={this.onTitleChange}  value={this.state.title} required />
                    <textarea className="note-input__body" type='text' placeholder="Tuliskan catatanmu di sini ..." onChange={this.onBodyChange}  value={this.state.body} required />
                    <button type="submit" >Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;