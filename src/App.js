// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Ordina from './component/Ordina';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Ordina></Ordina>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
