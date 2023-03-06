import './App.css';
import Header from './components/atoms/header/Header';
import Main from './components/atoms/main/Main';
import Card from './components/molecules/card/card';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='main'>
     <Main/>
     <Card/>
     </div>
    </div>
  );
}

export default App;
