const inputs =
  "Understanding project specifications and developing time schedules and budgets that meet them.Negotiating with vendors and contractors to secure the best prices.Observing existing processes, analyzing staff performance, and addressing deficiencies accordingly.Monitoring and tracking project progress, and writing up reports.Attending and scheduling meetings as required.Delegating tasks and ensuring workers receive feedback.Understanding and meeting all contract requirements.Communicating with managers, supervisors, and the rest of the team.Analyzing technical drawings and providing material and cost estimates.Ensuring all projects are completed on time and within budget.";

const query = async (data: any) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/saurabhg2083/model_bert",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};

query({ inputs }).then((response) => {
  console.log(JSON.stringify(response));
});
