import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
