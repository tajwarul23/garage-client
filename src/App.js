import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Services from "./Components/Services/Services";



function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      <Route path='/' element={
        <RequireAuth>
          <Home></Home>
        </RequireAuth>
      }></Route>
      <Route path='/home'element={
        <RequireAuth>
          <Home></Home>
        </RequireAuth>
      }></Route>
      <Route path='/about'element={
        <RequireAuth>
          <About></About>
        </RequireAuth>
      }></Route>
      <Route path='/services' element={
        <RequireAuth>
          <Services></Services>
        </RequireAuth>
      }></Route>
      <Route path='/contact' element={
        <RequireAuth>
          <Contact></Contact>
        </RequireAuth>
      }></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
    </div>
  );
}

export default App;
