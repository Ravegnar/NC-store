import {NavLink, Routes, Route} from "react-router-dom";

const callouts = [
  {
    name: 'Weapons',
    description: 'Work from home accessories',
    imageSrc: 'http://ravengar.wz.cz/Images/NS/Weapon.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: "/store/NSW/weapons",
  },
  {
    name: 'Tools',
    description: 'Journals and note-taking',
    imageSrc: 'http://ravengar.wz.cz/Images/NS/Tool.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: "/store/NSW/tools",
  },
  {
    name: 'Equipment',
    description: 'Daily commute essentials',
    imageSrc: 'http://ravengar.wz.cz/Images/NS/Equip.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: "/store/NSW/equipment",
  },
]

export default function InfantryGears() {
 
  return (<>
    <div className="bg-NSW w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-24">
          <h2 className="text-5xl font-bold text-center text-white">Infantry Gear</h2>

          <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-3xl font-bold text-center text-white">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base text-center font-semibold text-white">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>);
}