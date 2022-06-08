
/* This example requires Tailwind CSS v2.0+ */
import { ClipboardCheckIcon, SearchIcon, CashIcon, DesktopComputerIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Land Search',
    icon: SearchIcon,
  },
  {
    name: 'Land Verification',
    icon: ClipboardCheckIcon,
  },
  {
    name: 'Land Valuation',
    icon: CashIcon,
  },
  {
    name: 'Land Monitoring',
    icon: DesktopComputerIcon,
  },
  
]

export default function Tabtwo() {
  return (
    <div className="py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-4 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 sm: grid-cols-2 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-2">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className=''>
                <div className="flex ml-20 justify-around items-center  h-20 w-20 rounded-md bg-[#060646] text-white">
                  <feature.icon className="h-30 w-30" aria-hidden="true" />
                </div>
                <p className="mt-2  ml-20 text-left text-lg font-medium text-[#060646]">{feature.name}</p>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}



