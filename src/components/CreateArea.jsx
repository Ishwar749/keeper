import React from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props){
    
    const [isExpanded, setExpanded] = React.useState(false);
    const [note, setNote] = React.useState({
        title :"",
        content : ""   
    });

    function expand(){
        setExpanded(true);
    }

    function handleChange(event){
        const {name,value} = event.target;

        setNote( prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({title:"", content:""});
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />}
                
                <textarea onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                <Zoom in={true}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;