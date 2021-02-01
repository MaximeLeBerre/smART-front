import './App.css';
import Navbar from './components/Navbar'
import Works from './components/Works'
import Artists from './components/Artists'
import './styles/app.scss';


function App() {
  return (
    <div>
      <Navbar />
      <div class="container">

        <div class="blocHorizontal">
            <div class="slide "><Artists /></div>
            <div class="slide "><Works /></div>
        </div>

    </div>
    </div>
  );
}

export default App;
