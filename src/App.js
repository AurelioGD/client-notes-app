import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageWelcome from './pages/PageWelcome/PageWelcome';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact children={<Login/>}/>
        <Route path="/register" exact children={<Register/>}/>
        <PrivateRoute path="/home" exact={true} children={<PageWelcome/>}/>
      </Switch>
            
    </Router>  
  );
}

export default App;
