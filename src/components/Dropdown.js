import React from 'react'

function Dropdown() {
  return (
    <>
  <button
    id="dropdownInformationButton"
    data-dropdown-toggle="dropdownInformation"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Dropdown header{" "}
    <svg
      className="w-4 h-4 ml-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
  <div
    id="dropdownInformation"
    className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    style={{
      position: "absolute",
      inset: "auto auto 0px 0px",
      margin: 0,
      transform: "translate(353px, 1399px)"
    }}
    data-popper-reference-hidden=""
    data-popper-escaped=""
    data-popper-placement="top"
  >
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul
      className="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownInformationButton"
    >
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Dashboard
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Settings
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Earnings
        </a>
      </li>
    </ul>
    <div className="py-1">
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      >
        Sign out
      </a>
    </div>
  </div>
</>

  )
}

export default Dropdown