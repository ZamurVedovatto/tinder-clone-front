import './App.scss';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards'
import SwipeButtons from './Components/SwipeButtons'

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
