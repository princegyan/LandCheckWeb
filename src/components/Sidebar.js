import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-2xl text-white items-center cursor-pointer fixed right-5 top-1 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#060646"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[20w] bg-[#060646]  p-10  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
          <div className="ml-0">
  <a href="#" className="flex items-center pl-2.5 mb-5">
    <img src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300&vertical=top" className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LandCheck™</span>
  </a>
  <ul className="space-y-2">
      
    
    <li>
      <a href="#" className="flex items-center p-2 text-base font-normal text-white   dark:hover:bg-gray-700">
        <svg className="flex-shrink-0 w-6 h-6 text-[#FED501] transition duration-75" fill="none"  viewBox="0 0 24 24" stroke="currentColor"  strokeWidth={2} xmlns="http://www.w3.org/2000/svg"><path    strokeLinecap="round"    strokeLinejoin="round"    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  /></svg>
        <span className="flex-1 ml-3 whitespace-nowrap">Login / Sign Up</span>
      </a>
    </li>
    <li>
    <a href="#" className="flex items-center p-2 text-base font-normal text-white   dark:hover:bg-gray-700">
      <svg className="flex-shrink-0 w-6 h-6 text-[#FED501] transition duration-75"fill="none"  viewBox="0 0 24 24" stroke="currentColor"  strokeWidth={2} xmlns="http://www.w3.org/2000/svg"><path    strokeLinecap="round"    strokeLinejoin="round"
    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  /></svg>
        <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
      </a>
    </li>
    <li>
    <a href="#" className="flex items-center p-2 text-base font-normal text-white   dark:hover:bg-gray-700">
      <svg className="flex-shrink-0 w-6 h-6 text-[#FED501] transition duration-75" fill="none"  viewBox="0 0 24 24" stroke="currentColor"  strokeWidth={2} xmlns="http://www.w3.org/2000/svg"><path    strokeLinecap="round"   strokeLinejoin="round"    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  /></svg>
        <span className="flex-1 ml-3 whitespace-nowrap">About</span>
      </a>
    </li>
    <li>
    <a href="#" className="flex items-center p-2 text-base font-normal text-white   dark:hover:bg-gray-700">
      <svg className="flex-shrink-0 w-6 h-6 text-[#FED501] transition duration-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="flex-1 ml-3 whitespace-nowrap">Help</span>
      </a>
    </li>
  </ul>
</div>

          
        
      </div>
      
    </>
  );
};

export default Sidebar;