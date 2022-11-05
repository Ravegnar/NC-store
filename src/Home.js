import { Link } from "react-router-dom";

export default function Home() {
  return (<>
    <section className="">
      <header className="w-full snap-center snap-always">
        <div className="relative">
          <video className="w-full h-screen object-cover opacity-40 object-top" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
            <source src="http://ravengar.wz.cz/Images/NS/nso.mp4" type="video/mp4" />
          </video>
          <div class="w-full max-h-[20vh] h-screen absolute bottom-1/3 text-center">
            <h1 class="text-white text-[8vw] font-bold uppercase mb-4 sm:mb-0 tracking-tight cursor-default">
              <strong>Nanite Systems</strong>
            </h1>
            <button className="text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110">
              Learn more
            </button>
          </div>
        </div>
      </header>
      <div className="">
      <section className="w-full h-screen flex items-center justify-center bg-slate-800 snap-center snap-always">
        <h1 className="text-white text-center ">
          asd
        </h1>
      </section>
      <section className="w-full h-screen flex items-center justify-center bg-cyan-800 snap-center snap-always">
        <h1 className="text-white text-center ">
          asd
        </h1>
      </section>
      <section className="w-full h-screen flex items-center justify-center bg-emerald-800 snap-center snap-always">
        <h1 className="text-white text-center ">
          asd
        </h1>
      </section>
      <section className="w-full h-screen flex items-center justify-center bg-teal-900 snap-center snap-always">
        <h1 className="text-white text-center ">
          asd
        </h1>
      </section>
      </div>
  </section>
  </>)
}