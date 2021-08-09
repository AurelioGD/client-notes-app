import './NoteEditor.css'

import { useState , useEffect} from 'react'

const NoteEditor = ({valueTitle='',valueDescription='' , readonly=false, path=null,config={},redirect=null}) => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    useEffect(()=>{
        setTitle(valueTitle)
        setDescription(valueDescription)
    },[valueTitle,valueDescription])

    const handlerData=(data)=>{
        if(!redirect){return window.location.href='/home'}
        
        window.location.href=redirect;
    }

    const handlerSubmit=(e)=>{
        e.preventDefault()
        if(!path) return;

        fetch(path,config)
            .then(rawData=>rawData.json())
            .then(Data=>handlerData(Data))    
    }

    return (
        <form className="form" onSubmit={handlerSubmit}>
            <input className="form__input-title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} readOnly={readonly}/>
            <textarea className="form__textarea" name="" id="" cols="30" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)} readOnly={readonly}></textarea>
        </form>
    )
}

export default NoteEditor;
