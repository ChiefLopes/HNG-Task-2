import Tv from "../assets/tv.png"
import Menu from "../assets/menu.png"


const Hero = () => {
    return (
        <>
            <div className="hero">
                {/* navbar */}
                <div className="flex items-center justify-between space-x pt-5">
                    <div className="flex items-center">
                        <img src={Tv} alt="hero" className="inline-flex"/>
                        <p className="font-bold text-2xl pl-3">MovieBox</p>
                    </div>

                    <div>
                        <input type="text"
                               className="bg-transparent border-white w-[500px] rounded-lg border-2 text-white pl-2 placeholder-white py-2 text-[1rem]"
                               placeholder="What do you need to watch ?"
                        />
                    </div>

                    <div className="flex items-center">
                        <p className="font-bold text-2xl pr-3">Sign In</p>
                        <img src={Menu} alt="hero" className="inline-flex hover:cursor-pointer"/>
                    </div>
                </div>

                {/*    content */}

                <section id="content" className="space-x flex h-full items-center text-white">
                  <div className="w-1/3 -mt-[8rem]">
                      <h3 className="font-bold text-6xl">
                          John Wick : <br/> Parabellum
                      </h3>

                      <div className="mt-2 flex">
                          <span>86.0/100</span>
                          <span className="pl-10">97%</span>
                      </div>

                      <p className="mt-3">
                          John Wick is on the run after killing a member of the international assassins&apos; guild, and with a
                          $14 million price tag on his head, he is the target of hit men and women everywhere.
                      </p>

                      <button className="bg-red-800 text-white px-3 py-2 rounded mt-4">WATCH THRILLER</button>
                  </div>
                </section>
            </div>
        </>
    )
}

export default Hero