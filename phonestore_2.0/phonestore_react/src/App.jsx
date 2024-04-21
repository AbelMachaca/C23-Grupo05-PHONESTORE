import SideBar from './components/SideBar';
import './assets/css/app.css'

// import ContadorF from './components/ContadorF';
import {BrowserRouter} from 'react-router-dom';
  function App() {
    return (
      <BrowserRouter>
      <div className='appcss' id="wrapper">
        <SideBar />
        
      </div>
      </BrowserRouter>
    );
  }

export default App