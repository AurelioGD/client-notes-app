const handlerResponseLogin=(response)=>{
    const { error } = response;

    if(error) return window.location.href="/login"

    const { id, name ,token } = response;

    localStorage.setItem('userInfoSession', JSON.stringify({id,name,token}))

    return window.location.href="/home"

}

export default handlerResponseLogin;