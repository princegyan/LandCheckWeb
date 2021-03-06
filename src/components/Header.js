import React from 'react'

function Header() {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
  <div className='container flex flex-wrap justify-between items-center mx-auto'>
    <a href='#' className='flex items-center'>
     
    </a>
    <div className='flex items-center md:order-2'>
      <button type='button' className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600' id='user-menu-button' aria-expanded='false' data-dropdown-toggle='dropdown'>
        <span className='sr-only'>Open user menu</span>
        <img className='w-8 h-8 rounded-full' src='https://images.unsplash.com/photo-1576993537667-c6d2386f90a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='user photo' />
      </button>
      <div className='hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600' id='dropdown' style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(1015px, 937px)'}} data-popper-reference-hidden data-popper-escaped data-popper-placement='top'>
        <div className='py-3 px-4'>
          <span className='block text-sm text-gray-900 dark:text-white'>ALFRED GRANT</span>
          <span className='block text-sm font-medium text-gray-500 truncate dark:text-gray-400'>name@flowbite.com</span>
        </div>
        <ul className='py-1' aria-labelledby='dropdown'>
          <li>
            <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Dashboard</a>
          </li>
          <li>
            <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Settings</a>
          </li>
          <li>
            <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Earnings</a>
          </li>
          <li>
            <a href='#' className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle='mobile-menu-2' type='button' className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='mobile-menu-2' aria-expanded='false'>
        <span className='sr-only'>Open main menu</span>
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
        <svg className='hidden w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
      </button>
    </div>
    
  </div>
</nav>

  )
}

export default Header