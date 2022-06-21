import './App.css';
import TFooter from './components/TFooter';
import Sidebar from './components/Sidebar';
import NewSidebar from './components/NewSidebar';
import Tabtwo from './prepcomponents/Tabtwo';


function App() {
  return (
    <div className="  bg-cover bg-center lg:w-full h-full " style={{ backgroundImage: "url('bg.png')" }}>
      <NewSidebar/>
      {/* <Sidebar/> */}
      <img className='sm:w-auto h-10 fixed left-10 top-6' src={'Logo.png'} alt={'LandCheck Logo'}/>
      
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
      <TFooter/>
      
      
      

      
    </div>
  );
}

export default App;
