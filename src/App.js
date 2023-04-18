import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Ordina from './component/Ordina';
import Prenotazione from './component/Prenotazione';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {



  return (
    <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<Navbar></Navbar>}>


          <Route index element={
            <div className="App">
              <Header></Header>
              <Main></Main>
            </div>}  ></Route>

          <Route path='prenotazione' element={<Prenotazione/>} />

        </Route>

      </Routes>

      <Ordina></Ordina>
      <Footer></Footer>

    </BrowserRouter >


  );
}

export default App;
