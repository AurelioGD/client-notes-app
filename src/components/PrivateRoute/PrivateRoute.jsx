import { Route,Redirect } from 'react-router-dom'
const PrivateRoute = ({component:Component,...rest}) => {
    return <Route {...rest}> {localStorage.getItem('userInfoSession')? <Component/> : <Redirect to="/login"/>} </Route>
}

export default PrivateRoute
