import Reveal from "../animation/Reveal";

const Chat = () => {
  return (
    <>
      <div
        id="hero"
        className=" h-screen flex flex-col gap-y-5 items-center justify-center "
      >
        <div className="container flex flex-col gap-y-5 items-center justify-center">
          <Reveal>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Paste a job description"
              className="border-2  border-gray-700 p-5 w-[70vw] shadow-2xl
          outline-none focus:outline-none text-white bg-gray-700"
            ></textarea>
          </Reveal>
        </div>

        <Reveal>
          <button className="bg-mainColor py-3 px-6 text-black hover:bg-black hover:text-white transition-all ease-in-out delay-500 duration-700">
            Check Baises
          </button>
        </Reveal>
      </div>
    </>
  );
};

export default Chat;
