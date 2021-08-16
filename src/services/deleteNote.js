export default function deleteNote(noteId,token){
    if(!noteId || !token) return

    return fetch('http://localhost:5500/api/notes/delete',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}` 
        },
        body:JSON.stringify({noteId})
    })
}