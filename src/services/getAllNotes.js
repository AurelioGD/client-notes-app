import executeFetch from "./utils/executeFetch"

const API_ALLNOTES="http://localhost:5500/api/notes/all";

export default  async function getAllNotes(token){
    
    const Notes= await executeFetch({path:API_ALLNOTES,token})
    
    return Notes.AllNotes

}