import React, { useState, useEffect, useRef } from "react";


let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function SignIn() {
  const [ setShowModal] = React.useState(false);
  let domNode = useClickOutside(() => {
    setShowModal(false);
  });
  return (
    
    <div>
        <>
                    <div
                      ref={domNode}
                      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                      <div className="lg:w-[35vw] relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
        
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
        
                          {/*body*/}
                          <div className="relative p-10 flex-auto">
                          <div className="py-6 px-8 lg:px-8">
                            <h3 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white text-left">
                              Welcome
                            </h3>
                            <form className="space-y-6" action="#">
                              <div>
                                <label
                                  htmlFor="email"
                                  className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="name@company.com"
                                  required=""
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="password"
                                  className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="••••••••"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  required=""
                                />
                              </div>
                              <div className="flex justify-between">
                                <div className="flex items-start">
                                  <div className="flex items-center h-5 justify-between">
                                    <input
                                      id="remember"
                                      type="checkbox"
                                      defaultValue=""
                                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                      required=""
                                    />
                                  </div>
                                  <label
                                    htmlFor="remember"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-10"
                                  >
                                    Remember me
                                  </label>
                                </div>
                                <a
                                  href="#"
                                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                >
                                  Lost Password?
                                </a>
                              </div>
                              <div className='flex '>
                              <button
                                type="submit"
                                className=" w-half text-[#060646] bg-[#FED501] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-left dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Log In 
                              </button>
                              </div>
                          
                              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?{" "}
                                <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                                  Create account
                                </a>
                              </div>
                            </form>
                          </div>
                        
                          </div>
                          {/*footer*/}
        
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                
               
               
    </div>
  )
}

export default SignIn