import {BrowserRouter as Router, Switch ,useLocation ,Route, Routes} from 'react-router-dom';
import {Container,Row} from 'reactstrap'
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllTasks from './pages/AllTasks';
import Notifications from './pages/Notifications';
import HomeManager from './pages/manager/Home';



const App = ()=> {
  return (
    <Router>
    <NavigationBar/>
    <Container>
      <Routes>  
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>   
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/allTasks" element={<AllTasks/>}/>   
        <Route exact path="/notifications" element={<Notifications/>}/>   




        {/* Manager  */}
        <Route exact path="/HomeManager" element={<HomeManager/>}/>


      </Routes>
    </Container>
  </Router>
  );
}

export default App;
