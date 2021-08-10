import './NewNote.css'
import CompleteNav from "../../components/CompleteNav/CompleteNav"
import NoteEditor from "../../components/NoteEditor/NoteEditor"

const NewNote = () => {
    return (
        <>
            <CompleteNav/>
            <main className="main-NewNote">
                <div className="main-NewNote__container-title">
                    <h2 className="main-NewNote__title">Create your note here</h2>
                </div>
                <div className="main-NewNote__note-editor">
                    <NoteEditor path="http://localhost:5500/api/notes/newnote" method="POST" redirect="/all-notes" textButton="Save"/>
                </div>
            </main>
        </>
    )
}

export default NewNote
