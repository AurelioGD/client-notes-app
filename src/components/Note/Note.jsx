import './Note.css'
import starOn from '../../svg/starOn-icon.svg'
import starOff from '../../svg/starOff-icon.svg'

import { useState } from 'react'

const API_CHANGE_FAVORITE='http://localhost:5500/api/notes/togglefavorite';

const Note = ({ noteId , title = "loading..", description="loading..", favorite=false}) => {

    const [favoriteMode,setFavoriteMode]=useState(favorite)
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
                <button className="note__btn btn-about">About</button>
                <button className="note__btn btn-delete">Delete</button>
            </div>
        </div>
    )
}

export default Note;
