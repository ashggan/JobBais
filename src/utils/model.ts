import { pipeline } from "@xenova/transformers";

const Model_name = "Xenova/distilbert-base-uncased-finetuned-sst-2-english";
const classifier = await pipeline("sentiment-analysis", Model_name);

// Translate from English to Greek
export const result = await classifier("I like to walk my dog.");

// console.log(result);
