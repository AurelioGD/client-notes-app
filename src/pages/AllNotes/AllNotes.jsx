import CompleteNav from '../../components/CompleteNav/CompleteNav.jsx';
import Note from '../../components/Note/Note.jsx';
import './AllNotes.css'

const AllNotes = () => {
    return (
        <>
            <CompleteNav/>
            <main className="main-AllNotes">
                <div className="main-AllNotes__container-title">
                    <h2 className="main-AllNotes__title">Here are your notes</h2>
                </div>
                <div className="main-AllNotes__notes">
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                    <Note/>
                </div>
            </main>
        </>
    )
}

export default AllNotes
