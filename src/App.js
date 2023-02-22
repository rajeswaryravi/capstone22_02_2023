import './App.css';
import Header from "./Components/Common/Header.js";
import Footer from "./Components/Common/Footer.js";
import Home from "./Components/Home.js";
import Jobs from "./Components/Jobs.js";
import ContactUs from "./Components/ContactUs.js";
import ApplyJob from './Components/ApplyJob';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Header/>
   <div className="content">
       <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/apply" element={<ApplyJob />} />
          </Routes>
     </div>
    
   <Footer/>
   
    </div>
    </BrowserRouter>
   
  );
}

export default App;
