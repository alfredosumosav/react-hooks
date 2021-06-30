import Header from './components/Header';
import Characters from './components/Characters';
import Parent from "./components/Parent";
import './App.css';

function App() {
  return (
    <div className="App">
      <Parent />
      <Header />
      <Characters />
    </div>
  );
}

export default App;
