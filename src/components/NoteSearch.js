import React from "react";

class NoteSearch extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            keywords: ''
        }

        this.onKeywordChange = this.onKeywordChange.bind(this);
    }

    onKeywordChange(event){
        this.setState(() => {
            return {
                keywords: event.target.value
            }
        })
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <div className="note-search">
                <input type='text' placeholder="Cari catatan..." onInput={this.onKeywordChange}  value={this.state.keywords}/>
            </div>
        )
    }
}

export default NoteSearch;