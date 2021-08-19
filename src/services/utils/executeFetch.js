export default async function executeFetch({path,method="GET",body,token}){

    if(!path) return

    const ConfigFetch={
        method,
        headers:{
            'Content-Type':'application/json'
        }
    }

    if(body) ConfigFetch.body=JSON.stringify(body)

    if(token) ConfigFetch.headers.Authorization=`Bearer ${token}`

    const rawData= await fetch(path,ConfigFetch)
    const Data=rawData.json()
    
    return Data;
}