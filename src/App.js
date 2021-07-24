import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CompleteNav from './components/CompleteNav/CompleteNav';
import PageWelcome from './pages/PageWelcome/PageWelcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact children={<><CompleteNav/> <PageWelcome user="Aurelio"/></>}/>

      </Switch>
            
    </Router>  
  );
}

export default App;
