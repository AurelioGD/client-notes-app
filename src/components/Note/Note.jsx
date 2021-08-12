import './Note.css'
import starOn from '../../svg/starOn-icon.svg'
import starOff from '../../svg/starOff-icon.svg'

const Note = ({title = "loading..", description="loading..", }) => {
    return (
        <div className="note">
            <button className="note__star"> <img className="note__icon-star" src={starOn} alt="icon-start" /> </button>
            <h3 className="note__title">{title}</h3>
            <p className="note__description">{description}</p>
            <div className="note__actions">
                <button className="note__btn btn-edit">Edit</button>
                <button className="note__btn btn-about">About</button>
                <button className="note__btn btn-delete">Delete</button>
            </div>
        </div>
    )
}

export default Note;
