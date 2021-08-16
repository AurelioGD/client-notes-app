import CompleteNav from '../../components/CompleteNav/CompleteNav.jsx';
import Note from '../../components/Note/Note.jsx';
import './AllNotes.css'
import noteContext from '../../context/noteContext.js';
import { useContext, useEffect } from 'react';

const API_ALLNOTES="http://localhost:5500/api/notes/all"

const AllNotes = () => {

    const { notes,setNotes }=useContext(noteContext)

    useEffect(()=>{
        const token= JSON.parse(localStorage.getItem('userInfoSession')).token;
        fetch(API_ALLNOTES,{
            method:"GET",
            headers:{
                'authorization':`Bearer ${token}`
            }
        })
            .then(rawNotes=>rawNotes.json())
            .then(Notes=>setNotes(Notes.AllNotes))
    },[setNotes])

    return (
        <>
            <CompleteNav/>
            <main className="main-AllNotes">
                <div className="main-AllNotes__container-title">
                    <h2 className="main-AllNotes__title">Here are your notes</h2>
                </div>
                <div className="main-AllNotes__notes">
                    {
                        notes.map(note=><Note key={note._id} title={note.title} description={note.description} favorite={note.favorite} noteId={note._id}/>)
                    }
                </div>
            </main>
        </>
    )
}

export default AllNotes
