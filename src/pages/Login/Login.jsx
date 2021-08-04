import Form from "../../components/Form/Form";
import SmallNav from "../../components/SmallNav/SmallNav";
import './Login.css'

const Login = () => {

    return (
        <div>
            <SmallNav/>
            <div className="main">
                <Form title="Login" titleButton="Enter" textSignUp={true} path="http://localhost:5500/api/login"/>
            </div>
        </div>
    )
}

export default Login;

