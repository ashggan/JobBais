import { NavLink } from "react-router-dom";
import step_1 from "../assets/images/step-1.png";
import step_2 from "../assets/images/step-2.png";
import step_3 from "../assets/images/step-3.png";
// import Transition from "../animation/transition"
import Reveal from "../animation/Reveal";

const Home = () => {
  return (
    <>
      <div className="hero h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="mx-16 flex justify-center items-start gap-y-10 flex-col">
          <Reveal>
            <h1 className="text-5xl  font-bold text-gray-700">
              <span className="text-mainColor mxr-2 ">EquiJob</span>
              Using AI to Balance Bias in Job Descriptions
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-gray-700 font-semibold">
              an AI tool that can detect and highlight potentially biased
              language in job descriptions, promoting more inclusive hiring
              practices.
            </p>
          </Reveal>

          <div className=" flex gap-x-5">
            <Reveal>
              <a
                href="#step-1"
                className="bg-gray-700 py-3 px-6 text-white  hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
              >
                How it Work
              </a>
            </Reveal>
            <Reveal>
              <NavLink
                to="chat"
                className="bg-mainColor py-3 px-6 text-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
              >
                Try it now
              </NavLink>
            </Reveal>
          </div>
        </div>
        <div className="description flex justify-center items-center">
          <Reveal>
            <video
              src="https://www.youtube.com/watch?v=Kh24kwvrkCA&t=11s"
              className="w-full h-full"
              controls
            ></video>
          </Reveal>
        </div>
      </div>

      {/* section 1  */}
      <div id="step-1" className="h-screen w-full md:p-20 flex justify-center">
        <div className="  grid md:grid-cols-2  w-full h-full">
          <div className="container content-cneter">
            <Reveal>
              <img
                src={step_1}
                alt="step 1"
                className="w-[450px] object-cover border-b-4 border-l-4 border-mainColor shadow-2xl hover:cursor-pointer hover:shadow-xl transition-all ease-in-out delay-500 duration-500"
              />
            </Reveal>
          </div>
          <div className="container flex justify-center gap-y-12  flex-col ite ">
            <Reveal>
              <h1 className="text-2xl md:text-4xl capitalize font-bold text-gray-700">
                <span className="text-mainColor">1#</span> Begin by simply
                copying and pasting the job description into our platform.
              </h1>
            </Reveal>

            <Reveal>
              <a
                href="#step-2"
                className="bg-mainColor py-3 px-6 text-black hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
              >
                NEXT
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* section 2  */}
      <div id="step-2" className="h-screen w-full p-20 flex justify-center">
        <div className="  grid md:grid-cols-2  w-full h-full">
          <div className="container flex justify-center gap-y-12  flex-col ite ">
            <Reveal>
              <h1 className="text-2xl md:text-4xl capitalize font-bold text-gray-700">
                <span className="text-mainColor">2# </span> Our advanced{" "}
                <span className="text-mainColor">EQUIJOB</span>
                model will analyze the text and identify any biases present in
                the language used.
              </h1>
            </Reveal>

            <Reveal>
              <a
                href="#step-3"
                className="bg-mainColor py-3 px-6 text-black hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
              >
                NEXT
              </a>
            </Reveal>
          </div>
          <div className="container content-cneter">
            <Reveal>
              <img
                src={step_2}
                alt="step 1"
                className="w-[450px] object-cover border-b-4 border-l-4 border-mainColor shadow-2xl hover:cursor-pointer hover:shadow-xl transition-all ease-in-out delay-500 duration-500"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* section 2  */}
      <div id="step-3" className="h-screen w-full md:p-20 flex justify-center">
        <div className="  grid md:grid-cols-2  w-full h-full">
          <div className="container flex justify-center gap-y-12  flex-col ite ">
            <Reveal>
              <h1 className="text-2xl md:text-4xl capitalize font-bold text-gray-700">
                <span className="text-mainColor">2# </span> Our advanced{" "}
                <span className="text-mainColor">EQUIJOB</span>
                model will analyze the text and identify any biases present in
                the language used.
              </h1>
            </Reveal>

            <Reveal>
              <a
                href="#step-3"
                className="bg-mainColor py-3 px-6 text-black hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
              >
                NEXT
              </a>
            </Reveal>
          </div>
          <div className="container content-cneter">
            <Reveal>
              <img
                src={step_2}
                alt="step 1"
                className="w-[450px] object-cover border-b-4 border-l-4 border-mainColor shadow-2xl hover:cursor-pointer hover:shadow-xl transition-all ease-in-out delay-500 duration-500"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* section 3  */}
      <div id="step-3" className="h-screen w-full md:p-20 flex justify-center">
        <div className="  grid md:grid-cols-2  w-full h-full">
          <div className="container content-cneter">
            <Reveal>
              <img
                src={step_3}
                alt="step 1"
                className="w-[450px] object-cover border-b-4 border-l-4 border-mainColor shadow-2xl hover:cursor-pointer hover:shadow-xl transition-all ease-in-out delay-500 duration-500"
              />
            </Reveal>
          </div>
          <div className="container flex justify-center gap-y-12  flex-col ite ">
            <Reveal>
              <h1 className="text-2xl md:text-4xl capitalize font-bold text-gray-700">
                <span className="text-mainColor">3#</span> Once the biases are
                recognized, our platform suggests alternative, more neutral, and
                inclusive words to replace the biased ones.
              </h1>
            </Reveal>

            <Reveal>
              <NavLink
                to="/chat"
                className="bg-mainColor py-3 px-6 text-black hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700 uppercase"
              >
                trt it
              </NavLink>
            </Reveal>
          </div>
        </div>
      </div>

      <footer className="container content-center capitalize py-10 text-center border-t-2 ">
        © 2023 <span className="font-bold"> Omdena</span> . All rights reserved
      </footer>
    </>
  );
};
// Transition
export default Home;
