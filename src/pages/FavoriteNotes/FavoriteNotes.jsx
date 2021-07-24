import CompleteNav from "../../components/CompleteNav/CompleteNav"
import Note from "../../components/Note/Note"
import './FavoriteNotes.css'
const FavoriteNotes = () => {
    return (
        <>
            <CompleteNav/>
            <main className="main-fabNote">
                <div className="main-fabNote__container-title">
                    <h2 className="main-fabNote__title">Here are your favorite notes</h2>
                </div>
                <div className="main-fabNote__notes">
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

export default FavoriteNotes
