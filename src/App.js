import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CompleteNav from './components/CompleteNav/CompleteNav';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact children={<CompleteNav/>}/>

      </Switch>
            
    </Router>  
  );
}

export default App;
