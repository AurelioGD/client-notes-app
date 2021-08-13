import handlerResponseLogin from "./handlerResponseLogin"

const handlerSubmitLogin=(e,dataForm,path)=>{
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
export default handlerSubmitLogin;