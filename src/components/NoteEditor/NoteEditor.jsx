import './NoteEditor.css'

import { useState , useEffect, useRef} from 'react'

import { useParams } from 'react-router'

const NoteEditor = ({valueTitle='',valueDescription='' , readonly=false, path=null,redirect=null, method='GET',textButton='Enviar',modEditNote=false}) => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const { noteId }=useParams()
    const formRef=useRef()

    useEffect(()=>{
        setTitle(valueTitle)
        setDescription(valueDescription)
    },[valueTitle,valueDescription])

    const handlerData=(data)=>{

        if(data.error) {return window.location.href='/new-note'};

        if(!redirect){return window.location.href='/new-note'}
        
        window.location.href=redirect;
    }

    const handlerSubmit=(e)=>{
        e.preventDefault()
        if(!path) return;

        const {token, id:userId}=JSON.parse(localStorage.getItem('userInfoSession'));

        const data={title,description}

        modEditNote ? data['noteId']=noteId : data['userId']=userId

        if(!token) return;
        console.log(data)
        const Config={
            method,
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
            body:JSON.stringify(data)

        }
        fetch(path,Config)
            .then(rawData=>rawData.json())
            .then(Data=>handlerData(Data))    
    }
    const handlerModeReadonly=(e)=>{
        e.preventDefault()
        window.location.href=redirect;
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={readonly?handlerModeReadonly:handlerSubmit} ref={formRef}>
                <input className="form__input-title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} readOnly={readonly}/>
                <textarea className="form__textarea" name="" id="" cols="30" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)} readOnly={readonly}></textarea>
                <input className="form__btn-submit" type="submit" value={textButton}/>
            </form>
        </div>
            
    )
}

export default NoteEditor;
