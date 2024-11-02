import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import AdmissionPage from './pages/AdmissionPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/admin" component={AdminPage} />
                <Route path="/admission" component={AdmissionPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/" exact component={HomePage} /> 
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;