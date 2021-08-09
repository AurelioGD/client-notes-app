import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageWelcome from './pages/PageWelcome/PageWelcome';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllNotes from './pages/AllNotes/AllNotes';
import FavoriteNotes from './pages/FavoriteNotes/FavoriteNotes';
import NewNote from './pages/NewNote/NewNote';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact children={<Redirect to="/home"/>}/>
        <PrivateRoute path="/home" exact={true} component={PageWelcome}/>
        <PrivateRoute path="/all-notes" exact={true} component={AllNotes}/>
        <PrivateRoute path="/favorite-notes" exact={true} component={FavoriteNotes}/>
        <PrivateRoute path="/new-note" exact={true} component={NewNote}/>
        <Route path="/login" exact children={<Login/>}/>
        <Route path="/register" exact children={<Register/>}/>
      </Switch>
    </Router>  
  );
}

export default App;
