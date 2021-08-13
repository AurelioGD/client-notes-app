import handlerResponseRegister from "./handlerResponseRegister"

const handlerSubmitRegister=(e,dataForm,path)=>{
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
export default handlerSubmitRegister;