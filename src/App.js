import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/slick/slick-theme.css';
import './styles/slick/slick.css';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </Router>
    );
}

export default App;
