import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body className="App-header">
        <Body />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
