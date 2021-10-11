import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
