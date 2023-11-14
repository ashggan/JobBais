import { ChangeEvent, useState } from "react";
import Reveal from "../animation/Reveal";
import axios from "axios";
import { isSentenceLongerThan35Words } from "../utils/helpers";
import { ResulsType } from "../utils/types";
import Results from "../components/Results";
import Loading from "../components/Loading";

// const url = import.meta.env.VITE_PROCESS_API;

const Chat = () => {
  const [desc, setDesc] = useState("");
  const [results, setResults] = useState<ResulsType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [_serverError, setServerError] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setDesc(event.target.value);

  const fetchData = async () => {
    setResults(null);
    if (!desc) return setError("Job secription can't be empty");
    else if (isSentenceLongerThan35Words(desc) < 35)
      return setError("Job secription should be at least 35 words ");
    else {
      try {
        setError("");
        setIsLoading(true);
        const response = await axios.post(
          "https://jobbais-vfkrofhmwq-lm.a.run.app/process",
          { text: desc }
        );
        setResults(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        setServerError(error?.message);
      }
    }
  };

  console.log("this is data", results);

  return (
    <>
      <div
        id="heros"
        className="min-h-[70vh] mt-16 flex md:flex-col gap-y-5 items-center justify-center "
      >
        <div className="container md:flex items-start justify-center">
          <div className="flex flex-col  md:w-6/12">
            <Reveal>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                value={desc}
                onChange={handleChange}
                placeholder="Paste a job description"
                className="border-2  border-gray-700 p-5 md:w-[40vw] shadow-2xl
          outline-none focus:outline-none text-white bg-gray-700"
              ></textarea>
            </Reveal>
            <div className="flex justify-between items-center md:w-[40vw]">
              <p className="text-red-500 text-left ">
                {error}
                <span className="text-white">.</span>
              </p>
              <p className="text-xs font-bold text-gray-500">
                {isSentenceLongerThan35Words(desc)} Words
              </p>
            </div>
            <Reveal>
              <button
                className="bg-mainColor py-2 px-6 text-black hover:bg-gray-700 hover:text-white transition-all ease-in-out delay-500 duration-700"
                onClick={fetchData}
              >
                Check Bais
              </button>
            </Reveal>
          </div>
          <div className="flex flex-col w-6/12 h-full items-start justify-center  ">
            <Reveal>
              <>
                <div className="flex items-center gap-x-3    justify-center">
                  <h1 className="text-2xl font-bold">Results</h1>
                  {results &&
                    (results.swapped_words.length ? (
                      <small className="capitalize text-white bg-green-500 rounded-lg text-xs px-2">
                        positive
                      </small>
                    ) : (
                      <small className="capitalize text-white bg-red-500 rounded-lg text-xs px-2">
                        negative
                      </small>
                    ))}
                </div>
              </>
            </Reveal>
            {isLoading ? <Loading /> : <Results results={results} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
