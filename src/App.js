import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Page/Home';

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
