import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
