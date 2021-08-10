import './NoteEditor.css'

import { useState , useEffect, useRef} from 'react'

const NoteEditor = ({valueTitle='',valueDescription='' , readonly=false, path=null,redirect=null, method='GET',textButton='Enviar'}) => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

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
        
        if(!token) return;
    
        const Config={
            method,
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
            },
            body:JSON.stringify({title,description,userId})

        }
        fetch(path,Config)
            .then(rawData=>rawData.json())
            .then(Data=>handlerData(Data))    
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handlerSubmit} ref={formRef}>
                <input className="form__input-title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} readOnly={readonly}/>
                <textarea className="form__textarea" name="" id="" cols="30" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)} readOnly={readonly}></textarea>
                <input className="form__btn-submit" type="submit" value={textButton}/>
            </form>
        </div>
            
    )
}

export default NoteEditor;
