import FormLogin from "../../components/FormLogin/FormLogin";
import SmallNav from "../../components/SmallNav/SmallNav";
import './Login.css'
const Login = () => {
    return (
        <div>
            <SmallNav/>
            <div className="main">
                <FormLogin/>
            </div>
        </div>
    )
}

export default Login;

