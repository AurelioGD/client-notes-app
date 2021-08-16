import './Note.css'
import starOn from '../../svg/starOn-icon.svg'
import starOff from '../../svg/starOff-icon.svg'
import deleteNote from '../../services/deleteNote'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const API_CHANGE_FAVORITE='http://localhost:5500/api/notes/togglefavorite';

const Note = ({ noteId , title = "loading..", description="loading..", favorite=false}) => {

    const [favoriteMode,setFavoriteMode]=useState(favorite)

    const handlerDeleteNote=()=>{
        const token= JSON.parse(localStorage.getItem('userInfoSession')).token;
        deleteNote(noteId,token)
            .then(rawData=>rawData.json())
            .then(data=>{
                if(!data.error)window.location.href='/all-notes'
            })
    }
    const handlerChangeFavorite=()=>{
        console.log(noteId)
        const token= JSON.parse(localStorage.getItem('userInfoSession')).token;
        console.log(token)
        fetch(API_CHANGE_FAVORITE,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'authorization':`Bearer ${token}`
            },
            body:JSON.stringify({noteId})
        })
            .then(rawNotes=>rawNotes.json())
            .then(Notes=>{
                if(!Notes.error){
                    setFavoriteMode(!favoriteMode)
                }
            })
    }

    return (
        <div className="note">
            <button className="note__star" onClick={handlerChangeFavorite}> <img className="note__icon-star" src={favoriteMode?starOn:starOff} alt="icon-start" /> </button>
            <h3 className="note__title">{title}</h3>
            <p className="note__description">{description}</p>
            <div className="note__actions">
                <button className="note__btn btn-edit">Edit</button>
                <Link className="note__btn btn-about" to={'/about/'+noteId}>About</Link>
                <button className="note__btn btn-delete" onClick={handlerDeleteNote}>Delete</button>
            </div>
        </div>
    )
}

export default Note;
