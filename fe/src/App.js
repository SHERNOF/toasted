import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="main-container">
      <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main></Main>}></Route>
          </Routes>
        </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
