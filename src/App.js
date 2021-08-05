import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
