import SmallNav from "../../components/SmallNav/SmallNav"
import Form from "../../components/Form/Form"
const Register = () => {
    return (
        <div>
            <SmallNav/>
            <div className="main">
                <Form title="Register" titleButton="Sign Up" inputName={true} modeLogin={false} path="http://localhost:5500/api/login/register"/>
            </div>
        </div>
    )
}

export default Register
