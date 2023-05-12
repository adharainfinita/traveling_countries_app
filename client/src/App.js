import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import Countries from './components/Countries.jsx';
import Activities from "./components/Activities";
import Footer from './components/Footer.jsx';
import SideBar from './components/SideBar.jsx';
import Loading from './components/Loading.jsx';
import Detail from "./components/Detail.jsx";
import Nav from './components/Nav';

function App() {

const showComponent =()=>{
  if(location.pathname !== "/" && location.pathname !=="/loading"){
    return true
  }
  return false
}

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/countries" && <SideBar/>}
      {showComponent() && <Nav/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path='/loading' element={<Loading/>} />
        <Route path="/countries" element={<Countries/>}/>
        <Route path='/countries/detail/:id' element={<Detail/>} />
        <Route path="/activities" element={<Activities/>} />
      
      </Routes>
      {showComponent() && <Footer/>}
    </div>
  );
}

export default App;
