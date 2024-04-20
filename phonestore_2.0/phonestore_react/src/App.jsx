import SideBar from './components/SideBar';
import './assets/css/app.css'
import ContentWrapper from './components/ContentWrapper';
import ProductPage from './components/ProductPage';
// import ContadorF from './components/ContadorF';

  function App() {
    return (
      <div id="wrapper">
       
        <SideBar  />

        <ContentWrapper>
          {/* <ContadorF /> */}
        </ContentWrapper>
        
      </div>
    );
  }

export default App