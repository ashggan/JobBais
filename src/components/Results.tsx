import { useEffect, useState } from "react";
import Reveal from "../animation/Reveal";
import { ResultsPropType } from "../utils/types";
import copy from "../assets/copy.svg";
import { wrapWordsInSpan } from "../utils/helpers";

const Results = ({ results }: ResultsPropType) => {
  const [newJob, setNewJob] = useState<string | undefined>("");
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    const separatedValues = results?.swapped_words.map(
      (obj) => Object.values(obj)[0]
    ) as string[];

    setValues(separatedValues);

    if (results?.result) {
      const job = wrapWordsInSpan(results?.result, values);
      setNewJob(job);
      // console.log(job);
    }
  }, []);

  // console.log(values);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyPlainText = () => {
    const textToCopy = results?.result || "";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
      });
  };

  return (
    <div className="w-full flex justify-center flex-col">
      <Reveal>
        <>
          <div className="w-full h-full my-5   ">{newJob} </div>
          <button onClick={handleCopyPlainText} className=" ">
            <div className="flex w-24 justify-center items-center h-8 gap-x-3">
              <img src={copy} className="h-4" />
              {copySuccess ? "Copied!" : "Copy "}
            </div>
          </button>
        </>
      </Reveal>
    </div>
  );
};

export default Results;
