import {Link, Routes, Route} from "react-router-dom";

import Button from "./Button.js";

export default function Store(props) {

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
              <Link to="/store/NSO">
                <button 
                  className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 mx-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                </button>
              </Link>
              <Link to="/store/NSO">
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
            <p className="mb-5 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.<br /> Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <Link to="/store/NSW/">
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
  </>);
}