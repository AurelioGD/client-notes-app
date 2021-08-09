import CompleteNav from "../../components/CompleteNav/CompleteNav"
import Note from "../../components/Note/Note"
import './FavoriteNotes.css'
import { useEffect, useState } from 'react';

const API_ALLNOTES="http://localhost:5500/api/notes/favorites"

const FavoriteNotes = () => {
    const [favoriteNotes,setFavoriteNotes] = useState([])

    useEffect(()=>{
        const token= JSON.parse(localStorage.getItem('userInfoSession')).token;

        fetch(API_ALLNOTES,{
            method:"GET",
            headers:{
                'authorization':`Bearer ${token}`
            }
        })
            .then(rawNotes=>rawNotes.json())
            .then(Notes=>setFavoriteNotes(Notes.FavoriteNotes))
    },[])
    return (
        <>
            <CompleteNav/>
            <main className="main-fabNote">
                <div className="main-fabNote__container-title">
                    <h2 className="main-fabNote__title">Here are your favorite notes</h2>
                </div>
                <div className="main-fabNote__notes">
                    {
                        favoriteNotes.map(note=><Note key={note.id} title={note.title} description={note.description}/>)
                    }
                </div>
            </main>
        </>
    )
}

export default FavoriteNotes
