import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
