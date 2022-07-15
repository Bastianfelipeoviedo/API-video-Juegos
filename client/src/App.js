import {Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import VideoGame from './components/Videogame/Videogame';
import LandingPage from './components/LandingPage/LandingPage';
import Filter from './components/Filter/Filter';
import Paginate from './components/Paginate/Paginate';
import CreateVg from './components/CreateVg/CreateVg';

function App() {
  return (
    <>
      <Route exact path='/' component={LandingPage}/>
      <Route path={["/home", "/videogame/:id", "/create"]}>
        <Nav/>
      </Route>
      <Route path='/home' component={Filter}/>
      <Route path='/home' component={Paginate} />
      <Route path='/home' component={Home}/>
      <Route path='/videogame/:id' component={VideoGame}/>
      <Route path='/create' component={CreateVg}/>
    </>
  );
}

export default App;
