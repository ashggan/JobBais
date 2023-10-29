// import { query } from "../utils/api";

import { result } from "../utils/model";

const Home = () => {
  console.log(result);

  return (
    <>
      <div className="hero h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="mx-16 flex justify-center items-start gap-y-10 flex-col">
          <h1 className="text-5xl  font-bold ">
            <span className="text-yellow-500 mxr-2">EquiJob</span>
            Using AI to Balance Bias in Job Descriptions
          </h1>
          <a
            href="/"
            className="bg-yellow-500 py-3 px-6 text-black hover:bg-black hover:text-white transition-all ease-in-out delay-500 duration-700"
          >
            Try it now
          </a>
        </div>
        <div className="description flex justify-center items-center">
          <video
            src="https://www.youtube.com/watch?v=DD3mR7guKag"
            className="w-full h-auto"
            controls
          ></video>
        </div>
      </div>
      <div className="h-screen w-screen ">
        <div className="text-[18vw] uppercase flex whitespace-nowrap font-bold">
          HOW IT WORKS
        </div>
      </div>
    </>
  );
};

export default Home;
