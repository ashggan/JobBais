import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");
const model = "saurabhg2083/model_bert";
///"distilbert-base-uncased-finetuned-sst-2-english";

export const launch = async () => {
  try {
    let outputs = await hf.textClassification({
      model,
      inputs: "The answer to the universe is",
    });

    console.log(outputs);
    return outputs;
  } catch (err) {
    console.log("Error: " + err.message);
  }
};
