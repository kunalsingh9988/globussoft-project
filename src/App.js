import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
//  Animation on Scroll 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
