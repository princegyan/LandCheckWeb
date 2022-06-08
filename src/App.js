import './App.css';
import Footer from './components/Footer';
import ModalSignIn from './components/ModalSignIn';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App  bg-cover bg-center w-full h-screen" style={{ backgroundImage: "url('https://media.istockphoto.com/photos/landscape-in-west-africa-picture-id519804447?k=6&m=519804447&s=612x612&w=0&h=FmxTlS9UAPb-QILrKtLHKX3vlZT_oT04uYlxP7C1vvE=')" }}>
      
      <Sidebar/>
      <ModalSignIn/> 
      <Footer/>
      
      
      

      
    </div>
  );
}

export default App;
