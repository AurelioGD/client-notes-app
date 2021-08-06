import './Form.css'
import UserIcon from '../../svg/user-icon.svg';
import { useState }from 'react'

function Form({action='#',title="Form",titleButton="submit",inputName=false,textSignUp=false,path=null,modeLogin=true}) {

    const [dataForm,setDataForm]=useState({})

    const handlerChange=(e)=>{
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value
        })
    }

    const handlerResponseLogin=(response)=>{
        const { error } = response;

        if(error) return window.location.href="/login"

        const { id, name ,token } = response;

        localStorage.setItem('userInfoSession', JSON.stringify({id,name,token}))

        return window.location.href="/home"

    }
    const handlerResponseRegister=(response)=>{
        const { error } = response;

        if(error) return window.location.href="/register"

        return window.location.href="/login"
    }
    const handlerSubmitRegister=(e)=>{
        e.preventDefault()
        const payload={
            ...dataForm
        }
        fetch(path,{
            headers: {
                'Content-Type': 'application/json'
            },
            method:"POST",
            body: JSON.stringify(payload)
        })
            .then(rawData=>rawData.json())
            .then(data=>handlerResponseRegister(data))
    }
    const handlerSubmitLogin=(e)=>{
        e.preventDefault()
        if(!path) return
        const payload={
            ...dataForm
        }
        fetch(path,{
            headers: {
                'Content-Type': 'application/json'
            },
            method:"POST",
            body: JSON.stringify(payload)
        })
            .then(rawData=>rawData.json())
            .then(data=>handlerResponseLogin(data))

    }

    return (
        <div className="container-form">
            <img src={UserIcon} alt="icon-user" className="container-form__icon-user"/>
            <h2 className="container-form__title">{title}</h2>
            <form className="container-form__form" action={action} onSubmit={modeLogin ? handlerSubmitLogin : handlerSubmitRegister}>
                {inputName && <input type="text" name="name"className="container-form__input-name mg-2rem" placeholder="Type your name..." onChange={handlerChange}/>}
                <input type="text" name="username"className="container-form__input-username mg-2rem" placeholder="Type your username..." onChange={handlerChange}/>
                <input type="password" name="password"className="container-form__input-password mg-2rem" placeholder="Type your password..." onChange={handlerChange}/>
                <input type="submit" className="container-form__button-submit mg-2rem" value={titleButton}/>
            </form>
            {textSignUp && <p>Don't have an account? <a href="/register">Sign up</a></p>}
            
        </div>
    )
}

export default Form;
