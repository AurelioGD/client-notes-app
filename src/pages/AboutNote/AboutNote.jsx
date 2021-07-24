import CompleteNav from "../../components/CompleteNav/CompleteNav"
import NoteEditor from "../../components/NoteEditor/NoteEditor"
import './AboutNote.css'

const AboutNote = () => {
    return (
        <>
            <CompleteNav/>
            <main className="main-AboutNote">
                <div className="main-AboutNote__container-title">
                    <h2 className="main-AboutNote__title">That’s your note</h2>
                </div>
                <div className="main-AboutNote__container-form">
                    <NoteEditor/>
                </div>
                <div className="main-AboutNote__container-button">
                    <button className="main-AboutNote__btn-back">Back</button>
                </div>
            </main>
        </>
    )
}

export default AboutNote;
