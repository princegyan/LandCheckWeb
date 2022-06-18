
/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import SignIn from '../components/SignIn';

const features = [
  {
    name: 'Land Search',
    icon: 'LandSearch.png',
  },
  {
    name: 'Land Verification',
    icon: 'LandVerification.png',
  },
  {
    name: 'Land Valuation',
    icon: 'LandValuation.png',
  },
  {
    name: 'Land Monitoring',
    icon: 'LandMonitoring.png',
  },
  
]

export default function Tabtwo() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="py-12 ">
      <div className="max-w-xl mx-auto px-4 sm:px-4 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 sm: grid-cols-2 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-2">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className=''onClick={() => setShowModal(true)}>
                <div className="flex ml-20 justify-around items-center  h-40 w-40 rounded-md cursor-pointer text-white">
                  {/* <feature.icon className="h-30 w-30" aria-hidden="true" /> */}
                  <img src={feature.icon} alt={feature.name}/>
                </div>
                <p className="text-center text-3xl  ml-7 font-medium cursor-pointer text-[#060646]">{feature.name}</p>
              </dt>
              {showModal ? (
                <SignIn/>
              ) : null}

            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}



