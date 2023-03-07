import './App.css';
import Header from './components/atoms/header/Header';
import Main from './components/atoms/main/Main';
import Card from './components/molecules/card/card';

function App() {
  return (
    <div className="App">
     <Header/>
     <main className='main'>
     <Main/>
     <Card/>
     </main>
    </div>
  );
}

export default App;
