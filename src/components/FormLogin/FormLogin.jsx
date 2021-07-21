import './FormLogin.css'
import UserIcon from '../../svg/user-circle.svg';

function FormLogin({action}) {
    return (
        <div className="container-form">
            <img src={UserIcon} alt="icon-user" className="container-form__icon-user"/>
            <h2 className="container-form__title">Enter</h2>
            <form className="container-form__form" action={action||'#'}>
                <input type="text" className="container-form__input-username mg-2rem" placeholder="Type your username..."/>
                <input type="text" className="container-form__input-password mg-2rem" placeholder="Type your password..."/>
                <button className="container-form__button-submit mg-2rem">Log in</button>
            </form>
        </div>
    )
}

export default FormLogin;
