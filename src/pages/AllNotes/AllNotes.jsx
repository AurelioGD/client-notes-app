import CompleteNav from '../../components/CompleteNav/CompleteNav.jsx';
import Note from '../../components/Note/Note.jsx';
import './AllNotes.css'

import { useEffect, useState } from 'react';

const API_ALLNOTES="http://localhost:5500/api/notes/all"

const AllNotes = () => {

    const [notes,setNotes] = useState([])

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
    },[])

    return (
        <>
            <CompleteNav/>
            <main className="main-AllNotes">
                <div className="main-AllNotes__container-title">
                    <h2 className="main-AllNotes__title">Here are your notes</h2>
                </div>
                <div className="main-AllNotes__notes">
                    {
                        notes.map(note=><Note key={note.id} title={note.title} description={note.description}/>)
                    }
                </div>
            </main>
        </>
    )
}

export default AllNotes
