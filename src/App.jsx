import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx";
import Contacts from "./Pages/Contacts/Contacts.jsx"
import Services from "./Pages/Services/Services.jsx"

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
