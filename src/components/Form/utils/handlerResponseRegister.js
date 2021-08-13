const handlerResponseRegister=(response)=>{
    const { error } = response;

    if(error) return window.location.href="/register"

    return window.location.href="/login"
}
export default handlerResponseRegister;