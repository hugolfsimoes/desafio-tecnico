import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      Em Desenvolvimento
      <Switch>
        <Route path="/login" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
