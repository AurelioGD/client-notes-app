import './Note.css'


const Note = ({title = "waiting..", description="waiting..", }) => {
    return (
        <div className="note">
            <h3 className="note__title">{title}</h3>
            <p className="note__description">{description}</p>
            <div className="note__actions">
                <button className="note__btn btn-edit">Edit</button>
                <button className="note__btn btn-about">About</button>
            </div>
        </div>
    )
}

export default Note;
