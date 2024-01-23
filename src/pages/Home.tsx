import { Tab, Tabs } from "../components/Tabs"
import { LuPlane } from "react-icons/lu";
import { BiBuildings } from "react-icons/bi";
import { IoCarSportOutline } from "react-icons/io5";
import { Hotel } from "../components/Hotel";

export const Home = () => {
    return (
        <div>
            <div className="hero h-[80vh] w-full flex flex-wrap items-center px-5">
                <div>
                    <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl mb-3">
                        <span className="text-[#4d73fc]">Book</span> Your <br />
                        Dream <span className="text-[#4d73fc]">Flights</span> <br />
                        Now!
                    </h1>
                    <p className=" text-gray-500 md:text-[1.2rem] mb-3">Lorem ipsum dolor sit amet consectetur. Felis <br />
                     tristique pretium leo nisi at risus ac enim.</p>
                     <button className="bg-[#4d73fc] text-white font-bold text-[1.2rem] rounded-md px-5 md:px-3 py-3 hover:text-[#1a1a1a] hover:bg-white transition-all">Book Now</button>
                </div>
                <div>

                </div>
            </div>
            <div className="tabs-component">
                <Tabs label="tabs">
                    <Tab label="Flights" icon={<LuPlane className="mt-1" />}>
                        <div className="py-4">
                            <h2 className="text-lg font-medium mb-2">Tab 1 Content</h2>
                        </div>
                    </Tab>
                    <Tab label="Hotels" icon={<BiBuildings className="mt-1" />}>
                       <Hotel />
                    </Tab>
                    <Tab label="Car Rentals" icon={<IoCarSportOutline  className="mt-1" />}>
                        <div className="py-4">
                            <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}