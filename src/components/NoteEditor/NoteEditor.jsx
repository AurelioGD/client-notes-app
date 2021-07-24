import './NoteEditor.css'
const NoteEditor = () => {
    return (
        <form className="form">
            <input className="form__input-title" type="text" />
            <textarea className="form__textarea" name="" id="" cols="30" rows="10"></textarea>
        </form>
    )
}

export default NoteEditor;
