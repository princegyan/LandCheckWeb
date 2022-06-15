import './App.css';
import Footer from './components/Footer';
import ModalSignIn from './components/ModalSignIn';
import Sidebar from './components/Sidebar';
import Tabtwo from './prepcomponents/Tabtwo';


function App() {
  return (
    <div className="  bg-cover bg-center lg:w-full h-full " style={{ backgroundImage: "url('https://media.istockphoto.com/photos/landscape-in-west-africa-picture-id519804447?k=6&m=519804447&s=612x612&w=0&h=FmxTlS9UAPb-QILrKtLHKX3vlZT_oT04uYlxP7C1vvE=')" }}>
      
      <Sidebar/>
      {/* <ModalSignIn/>  */}
      
          <>
      <h5 className=" pt-40 text-4xl font-bold text-[#060646] dark:text-white text-center">
        WELCOME
      </h5>
      <p className=" text-2xl font-bold text-[#060646] sm:text-lg dark:text-gray-400 text-center">
        FIND YOUR NEXT LAND!
      </p>
      <h1 className=" pt-5 text-3xl font-bold text-[#060646] dark:text-white text-center">
        Explore Our Services
      </h1>
        </>

        {/* <Tabtwo/> */}
        <Tabtwo/>
        <>
      <h5 className=" pt-40 text-4xl font-bold text-[#060646] dark:text-white text-center">
      </h5>
      <p className=" text-2xl font-bold text-[#060646] sm:text-lg dark:text-gray-400 text-center">
      </p>
      
        </>
      <Footer/>
      
      
      

      
    </div>
  );
}

export default App;
