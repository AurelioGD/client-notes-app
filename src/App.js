import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageWelcome from './pages/PageWelcome/PageWelcome';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllNotes from './pages/AllNotes/AllNotes';
import FavoriteNotes from './pages/FavoriteNotes/FavoriteNotes';
import NewNote from './pages/NewNote/NewNote';
import UpdateNote from './pages/UpdateNote/UpdateNote';
import EditNote from './pages/EditNote/EditNote';
import InfoNote from './context/InfoNote'

function App() {
  return (
    <Router>
      <Switch>
        <InfoNote>
          <Route path="/" exact children={<Redirect to="/home"/>}/>
          <PrivateRoute path="/home" exact={true} component={PageWelcome}/>
          <PrivateRoute path="/all-notes" exact={true} component={AllNotes}/>
          <PrivateRoute path="/favorite-notes" exact={true} component={FavoriteNotes}/>
          <PrivateRoute path="/new-note" exact={true} component={NewNote}/>
          <PrivateRoute path="/about/:noteId" exact={true} component={UpdateNote}/>
          <PrivateRoute path="/edit/:noteId" exact={true} component={EditNote}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact children={<Register/>}/>
        </InfoNote>
      </Switch>
    </Router>  
  )
}

export default App;
