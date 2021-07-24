import './Note.css'


const Note = () => {
    return (
        <div className="note">
            <h3 className="note__title">title</h3>
            <p className="note__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam eius tenetur voluptatem perspiciatis! Porro facere placeat fugiat explicabo laborum, voluptates modi dolores, totam impedit cumque fuga quaerat molestiae dolorum consequuntur!</p>
            <div className="note__actions">
                <button className="note__btn btn-edit">Edit</button>
                <button className="note__btn btn-about">About</button>
            </div>
        </div>
    )
}

export default Note;
