/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Land Search',
     icon: 'landsearch.png',
  },
  {
    name: 'Land Verification',
     icon: 'landverification.png',
  },
  {
    name: 'Land Valuation',
     icon: 'landvaluation.png',
  },
  {
    name: 'Land Monitoring',
     icon: 'landmonitoring.png',
  },
]

export default function Somecomp() {
  return (
    <div className="py-12 ">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <img src={feature.icon} alt={feature.name}/>
                {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>  */}
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900 text-center">{feature.name}</p>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

