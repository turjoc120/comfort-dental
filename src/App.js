import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage/HomePage';
import Footer from './pages/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNav from './pages/Home/HeaderNav/HeaderNav';
import Details from './pages/Home/Services/Details';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';
import Guideline from './pages/guideline/Guideline';
import Team from './pages/Team/Team';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <HeaderNav></HeaderNav>
          <Switch>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route path='/home'>
              <HomePage></HomePage>
            </Route>
            <Route path='/team'>
              <Team></Team>
            </Route>
            <Route path='/guideline'>
              <Guideline></Guideline>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <Details></Details>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
