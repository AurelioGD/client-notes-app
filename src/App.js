import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageWelcome from './pages/PageWelcome/PageWelcome';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact children={<PageWelcome/>}/>

      </Switch>
            
    </Router>  
  );
}

export default App;
