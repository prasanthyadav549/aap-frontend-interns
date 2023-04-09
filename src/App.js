

import './App.css';
import MenuAppBar from './components/Header';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';


function App() {
  return (
  
     <Router>
    <div className="App">
    <Routes>
        
        <Route path="/" element={<SignIn/>}/>
         <Route path="/sign-up" element={<SignUp/>}/> 
         <Route path="/calender" element={<MenuAppBar/>}/>
     
      </Routes>
      

   
  </div>
       </Router> 
  );
}

export default App;
