import {Link} from "react-router-dom";
import Footer from "./Footer.js";
import {useEffect} from "react";

export default function Store(props) {

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])

  return (<>
      <section className="text-white body-font py-9">
        <div className="bg-line" />
        <div className="w-full mx-auto flex px-5 pt-52 pb-5 justify-center items-center bg-NSO">
          <div className="flex flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Nanite Systems Operatives
            </h1>
            <p className="mb-5 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.<br /> Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <Link to="/NC-store/store/NSO">
                <button 
                  className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                </button>
              </Link>
              <Link to="/NC-store/store/NSO">
                <button 
                  className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-line" />

        <div className="w-full mx-auto flex px-5 pt-48 pb-5 justify-center items-center bg-NSW">
          <div className="flex flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Nanite Systems Weapons & Gear
            </h1>
            <p className="mb-5 leading-relaxed">
              NS weapons have neutral color tones of tan, black, and white. The designs are a combination of every empires' 
              characteristics, serving as a middle ground between all three factions in terms of performance. The exception 
              to this rule are the pistols and rocket launchers, as these weapons have an emphasis on power over all else. 
            </p>
            <div className="flex justify-center">
              <Link to="/NC-store/store/NSW/">
                <button 
                  className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-line" />
      </section>
      <Footer />
  </>);
}