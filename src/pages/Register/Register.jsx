import SmallNav from "../../components/SmallNav/SmallNav"
import Form from "../../components/Form/Form"
const Register = () => {
    return (
        <div>
            <SmallNav/>
            <div className="main">
                <Form title="Register" titleButton="Sign Up" inputName={true}/>
            </div>
        </div>
    )
}

export default Register
