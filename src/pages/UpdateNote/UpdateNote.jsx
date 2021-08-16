import CompleteNav from "../../components/CompleteNav/CompleteNav"
import NoteEditor from "../../components/NoteEditor/NoteEditor"
import { useContext } from "react"
import noteContext from "../../context/noteContext"
import { useParams } from "react-router-dom"
const UpdateNote = () => {

    const {notes}=useContext(noteContext)
    const { noteId } = useParams()
    const note=notes.filter(note=>note._id===noteId)
    return (
        <>
            <CompleteNav/>
            <main className="main-NewNote">
                <div className="main-NewNote__container-title">
                    <h2 className="main-NewNote__title">That’s your note</h2>
                </div>
                <div className="main-NewNote__note-editor">
                    <NoteEditor redirect="/all-notes" textButton="Back" readonly={true} valueTitle={note[0].title} valueDescription={note[0].description}/>
                </div>
            </main>
        </>
    )
}

export default UpdateNote
