import executeFetch from "./utils/executeFetch"

const API_DELETE_NOTE="http://localhost:5500/api/notes/delete"

export default async function deleteNote(noteId,token){
    if(!noteId || !token) return

    const noteDeleted = await executeFetch({path:API_DELETE_NOTE,method:"POST",body:{noteId},token})

    return noteDeleted
}