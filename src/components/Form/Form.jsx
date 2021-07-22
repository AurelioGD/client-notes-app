import './Form.css'
import UserIcon from '../../svg/user-icon.svg';

function Form({action,title,titleButton}) {
    return (
        <div className="container-form">
            <img src={UserIcon} alt="icon-user" className="container-form__icon-user"/>
            <h2 className="container-form__title">{title}</h2>
            <form className="container-form__form" action={action||'#'}>
                <input type="text" className="container-form__input-username mg-2rem" placeholder="Type your username..."/>
                <input type="text" className="container-form__input-password mg-2rem" placeholder="Type your password..."/>
                <button className="container-form__button-submit mg-2rem">{titleButton}</button>
            </form>
        </div>
    )
}

export default Form;
