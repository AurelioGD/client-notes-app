import { Route,Redirect } from 'react-router-dom'
const PrivateRoute = ({children,...rest}) => {
    if(localStorage.getItem('usertoken')){
        return <Route {...rest}>
            {children}
        </Route>
    }else{
        return <Redirect to='/login'/>
    }
}

export default PrivateRoute
