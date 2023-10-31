import { NavLink } from "react-router-dom";
import step_1 from "../assets/images/step-1.png";
import step_2 from "../assets/images/step-2.png";
import step_3 from "../assets/images/step-3.png";
const Home = () => {
  return (
    <>
      <div className="hero h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="mx-16 flex justify-center items-start gap-y-10 flex-col">
          <h1 className="text-5xl  font-bold text-gray-700">
            <span className="text-mainColor mxr-2 ">EquiJob</span>
            Using AI to Balance Bias in Job Descriptions
          </h1>
          <p className="text-gray-700 font-semibold">
            an AI tool that can detect and highlight potentially biased language
            in job descriptions, promoting more inclusive hiring practices.
          </p>
          <div className=" flex gap-x-5">
            <a
              href="#step-1"
              className="bg-gray-700 py-3 px-6 text-white  hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
            >
              How it Work
            </a>
            <NavLink
              to="chat"
              className="bg-mainColor py-3 px-6 text-gray-700 hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
            >
              Try it now
            </NavLink>
          </div>
        </div>
        <div className="description flex justify-center items-center">
          <video
            src="https://www.youtube.com/watch?v=Kh24kwvrkCA&t=11s"
            className="w-full h-auto"
            controls
          ></video>
        </div>
      </div>
      <div
        id="step-1"
        className="container h-screen grid grid-cols-1 md:grid-cols-2"
      >
        <div className=" flex justify-center items-center  flex-col">
          <img
            src={step_1}
            alt=""
            className="h-[65vh] w-[65%] shadow-2xl hover:shadow-lg hover:cursor-pointer transition-all ease-in-out duration-500 delay-500 border-l-4 border-mainColor
            border-b-4  "
          />
        </div>
        <div className=" flex justify-center items-start gap-y-10 flex-col w-[70%] ">
          <h1 className="text-[30px] capitalize font-bold text-gray-700">
            <span className="text-mainColor">1#</span> Simplly paste the job
            decription
          </h1>
          <a
            href="#step-2"
            className="bg-mainColor py-3 px-6 text-black hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
          >
            NEXT
          </a>
        </div>
      </div>

      <div
        id="step-2"
        className="container h-screen grid grid-cols-1 md:grid-cols-2 items-center"
      >
        <div className="flex justify-center items-start gap-y-10 flex-col w-[70%] ml-[120px]">
          <h1 className="text-[30px] capitalize font-bold text-gray-700">
            <span className="text-mainColor">2#</span> Our{" "}
            <span className="bg-mainColor text-white">EQUIJOB</span> model will
            recognize the baises in the words.
          </h1>
          <a
            href="#step-3"
            className="bg-mainColor py-3 px-6 text-black hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
          >
            NEXT
          </a>
        </div>
        <div className=" flex justify-center items-center  flex-col">
          <img
            src={step_2}
            alt=""
            className="h-[65vh] w-[65%] shadow-2xl hover:shadow-lg hover:cursor-pointer transition-all ease-in-out duration-500 delay-500 border-l-4 border-mainColor
            border-b-4  "
          />
        </div>
      </div>

      <div
        id="step-3"
        className="container h-screen grid grid-cols-1 md:grid-cols-2"
      >
        <div className=" flex justify-center items-center  flex-col">
          <img
            src={step_3}
            alt=""
            className="h-[65vh] w-[65%] shadow-2xl hover:shadow-lg hover:cursor-pointer transition-all ease-in-out duration-500 delay-500 border-l-4 border-mainColor
            border-b-4  "
          />
        </div>
        <div className=" flex justify-center items-start gap-y-10 flex-col w-[70%] ">
          <h1 className="text-[30px] capitalize font-bold text-gray-700">
            <span className="text-mainColor">3#</span> Replace the biased words
            with more neutral and inclusive ones.
          </h1>
          <NavLink
            to="chat"
            className="bg-mainColor py-3 px-6 text-black hover:bg-black hover:text-white transition-all ease-in-out delay-500 duration-700"
          >
            Try it now
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
